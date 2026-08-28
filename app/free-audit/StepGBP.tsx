"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import {
  Search, MapPin, Loader2, AlertCircle, Star, ChevronRight,
  X, Shield, Link2,
} from "lucide-react";
import type { GBPSnapshot } from "./types";

// ─── helpers ──────────────────────────────────────────────────────────────────

function formatCategory(raw: string) {
  return raw.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function isValidGBPUrl(url: string): boolean {
  const t = url.trim();
  return (
    t.startsWith("https://maps.google.com") ||
    t.startsWith("https://www.google.com/maps") ||
    t.startsWith("https://goo.gl/maps") ||
    t.startsWith("https://share.google") ||
    t.startsWith("https://maps.app.goo.gl")
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface Props {
  onConfirm: (snap: GBPSnapshot, placeId: string, websiteUrl: string) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function StepGBP({ onConfirm }: Props) {
  // Maps SDK state
  const [mapsReady, setMapsReady] = useState(false);
  const autocompleteRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesRef = useRef<google.maps.places.PlacesService | null>(null);
  const attributionRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Path A — search
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const [searching, setSearching] = useState(false);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchError, setSearchError] = useState("");

  // Path B — URL
  const [gbpUrl, setGbpUrl] = useState("");
  const [urlLoading, setUrlLoading] = useState(false);
  const [urlError, setUrlError] = useState("");
  const [showUrlPath, setShowUrlPath] = useState(false);

  // Shared
  const [snapshot, setSnapshot] = useState<GBPSnapshot | null>(null);
  const [placeId, setPlaceId] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  // Load Google Maps JS SDK on mount (v2 functional API)
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) return; // Path A unavailable without key

    setOptions({ key: apiKey, v: "weekly" });
    importLibrary("places")
      .then(() => {
        autocompleteRef.current = new google.maps.places.AutocompleteService();
        if (attributionRef.current) {
          placesRef.current = new google.maps.places.PlacesService(attributionRef.current);
        }
        setMapsReady(true);
      })
      .catch(() => {
        // Maps failed to load — Path A silently unavailable
      });
  }, []);

  // Debounced autocomplete (Path A)
  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
    setSnapshot(null);
    setPlaceId("");
    setSearchError("");

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!value.trim() || value.length < 2) {
      setPredictions([]);
      setShowDropdown(false);
      return;
    }

    debounceRef.current = setTimeout(() => {
      if (!autocompleteRef.current) return;
      setSearching(true);
      autocompleteRef.current.getPlacePredictions(
        { input: value, types: ["establishment"], componentRestrictions: { country: "sg" } },
        (results, status) => {
          setSearching(false);
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            setPredictions(results);
            setShowDropdown(true);
          } else {
            setPredictions([]);
            setShowDropdown(false);
          }
        }
      );
    }, 300);
  }, []);

  // Fetch Place Details when a prediction is selected (Path A)
  const handleSelectPrediction = useCallback(
    (pred: google.maps.places.AutocompletePrediction) => {
      setShowDropdown(false);
      setPredictions([]);
      setQuery(pred.structured_formatting.main_text);
      setFetchingDetails(true);
      setSearchError("");

      if (!placesRef.current) return;
      placesRef.current.getDetails(
        {
          placeId: pred.place_id,
          fields: ["name", "formatted_address", "geometry", "rating", "user_ratings_total", "types", "website", "photos", "reviews", "editorial_summary"],
        },
        (result, status) => {
          setFetchingDetails(false);
          if (status !== google.maps.places.PlacesServiceStatus.OK || !result) {
            setSearchError("Could not load business details. Please try again.");
            return;
          }
          console.log("[StepGBP] Raw geometry:", result.geometry?.location);
          const snap: GBPSnapshot = {
            businessName: result.name ?? "",
            address: result.formatted_address ?? "",
            category: formatCategory(result.types?.[0] ?? "establishment"),
            rawTypes: result.types ?? [],
            rating: result.rating ?? 0,
            reviewCount: result.user_ratings_total ?? 0,
            lat: result.geometry?.location?.lat() ?? 0,
            lng: result.geometry?.location?.lng() ?? 0,
            photoCount: result.photos?.length ?? 0,
            reviews: result.reviews
              ?.map((r) => ({ text: r.text ?? "", rating: r.rating ?? 0 }))
              .filter((r) => r.text.length > 0),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            editorialSummary: (result as any).editorial_summary?.overview,
          };
          console.log("[StepGBP] Snapshot lat/lng:", { lat: snap.lat, lng: snap.lng });
          console.log("[StepGBP] Reviews:", snap.reviews?.length ?? 0, "Editorial:", snap.editorialSummary ?? "none");
          setSnapshot(snap);
          setPlaceId(pred.place_id);
          // Auto-populate website from GBP listing (user can override)
          if (result.website) setWebsiteUrl(result.website);
        }
      );
    },
    []
  );

  // Resolve GBP URL server-side (Path B)
  const handleUrlSubmit = useCallback(async () => {
    if (!gbpUrl.trim()) { setUrlError("Please paste your Google Business Profile link."); return; }
    if (!isValidGBPUrl(gbpUrl)) {
      setUrlError("Paste a Google Maps or share.google link (e.g. share.google/... or maps.app.goo.gl/...)");
      return;
    }
    setUrlLoading(true);
    setUrlError("");
    try {
      const res = await fetch("/api/audit/resolve-gbp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: gbpUrl }),
      });
      const data = await res.json();
      if (data.snapshot && data.placeId) {
        console.log("[StepGBP] URL resolve lat/lng:", { lat: data.snapshot?.lat, lng: data.snapshot?.lng });
        setSnapshot(data.snapshot);
        setPlaceId(data.placeId);
        // Auto-populate website URL returned from Places if user hasn't typed one
        if (data.websiteUrl && !websiteUrl) setWebsiteUrl(data.websiteUrl);
      } else {
        // Pre-fill the search box if we extracted a name
        if (data.businessName) {
          setQuery(data.businessName);
          setShowUrlPath(false);
        }
        setUrlError("Can't auto-detect your business from the link. Search by name above ↑");
      }
    } catch {
      setUrlError("Something went wrong. Please try searching by name above.");
    } finally {
      setUrlLoading(false);
    }
  }, [gbpUrl]);

  const reset = () => {
    setSnapshot(null);
    setPlaceId("");
    setQuery("");
    setGbpUrl("");
    setWebsiteUrl("");
    setUrlError("");
    setSearchError("");
  };

  return (
    <>
      {/* Hidden div for Google Places attribution (required by ToS) */}
      <div ref={attributionRef} style={{ display: "none" }} aria-hidden="true" />

      <div className="max-w-lg mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Audit Your Google Business Profile — Free
          </h1>
          <p className="text-gray-500 mb-8">
            See exactly where you rank across Singapore — and where you&apos;re invisible.
          </p>

          {/* ── PATH A: Business name search ───────────────────────────── */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <label className="text-sm font-semibold text-gray-700">
                Search your business name
              </label>
              <span className="text-[10px] font-bold bg-[#2563EB] text-white px-2 py-0.5 rounded-full tracking-wide">
                RECOMMENDED
              </span>
            </div>

            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="e.g. The Burger Lab, Bella Nail Studio…"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                onFocus={() => predictions.length > 0 && setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                disabled={!mapsReady && !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                className="w-full border border-gray-300 rounded-xl pl-10 pr-28 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
              {/* Singapore badge */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-400 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 pointer-events-none">
                <MapPin className="w-3 h-3" />
                Singapore
              </div>
              {/* Spinner */}
              {(searching || fetchingDetails) && (
                <Loader2 className="absolute right-24 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2563EB] animate-spin" />
              )}
            </div>

            {/* Autocomplete dropdown */}
            {showDropdown && predictions.length > 0 && (
              <div className="absolute z-50 left-0 right-0 mt-1 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
                style={{ position: "relative" }}>
                <ul>
                  {predictions.map((pred, i) => (
                    <li key={pred.place_id}>
                      <button
                        type="button"
                        onMouseDown={() => handleSelectPrediction(pred)}
                        className={`w-full text-left px-4 py-3 hover:bg-[#F0F4F8] transition-colors flex items-start gap-3 ${i > 0 ? "border-t border-gray-100" : ""}`}
                      >
                        <MapPin className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {pred.structured_formatting.main_text}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {pred.structured_formatting.secondary_text}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {searchError && (
              <p className="flex items-center gap-1.5 text-sm text-red-600">
                <AlertCircle className="w-4 h-4 shrink-0" />{searchError}
              </p>
            )}

            {!mapsReady && !process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
              <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                Business name search requires a Google Maps API key.
              </p>
            )}
          </div>

          {/* ── Divider ────────────────────────────────────────────────── */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <button
              type="button"
              onClick={() => setShowUrlPath((v) => !v)}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap px-1"
            >
              {showUrlPath ? "— hide URL option —" : "— or paste a link —"}
            </button>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* ── PATH B: URL paste (collapsible) ────────────────────────── */}
          {showUrlPath && (
            <div className="space-y-3 mb-6">
              <label className="text-sm font-medium text-gray-500">
                Or paste your Google Business Profile link
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="url"
                    placeholder="https://share.google/... or maps.app.goo.gl/..."
                    value={gbpUrl}
                    onChange={(e) => { setGbpUrl(e.target.value); setUrlError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
                    className="w-full border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleUrlSubmit}
                  disabled={urlLoading}
                  className="shrink-0 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm rounded-xl transition-colors flex items-center gap-1.5 disabled:opacity-60"
                >
                  {urlLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Look up"}
                </button>
              </div>
              {urlError && (
                <p className="flex items-center gap-1.5 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4 shrink-0" />{urlError}
                </p>
              )}
            </div>
          )}

          {/* ── Business preview card (shared by both paths) ───────────── */}
          {(fetchingDetails) && (
            <div className="flex items-center justify-center py-8 gap-3 text-gray-500">
              <Loader2 className="w-5 h-5 animate-spin text-[#2563EB]" />
              <span className="text-sm">Loading business details…</span>
            </div>
          )}

          {snapshot && !fetchingDetails && (
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-emerald-700 mb-1">✓ Business found</p>
                  <h3 className="font-bold text-gray-900 truncate">{snapshot.businessName}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5 truncate">
                    <MapPin className="w-3 h-3 shrink-0" />{snapshot.address}
                  </p>
                </div>
                <span className="text-xs bg-white border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full font-medium shrink-0 capitalize">
                  {snapshot.category}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {snapshot.rating > 0 ? snapshot.rating : "—"}
                </span>
                {snapshot.reviewCount > 0 && <span>{snapshot.reviewCount} reviews</span>}
              </div>

              {/* Website URL — auto-populated from GBP, user can override */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 flex items-center gap-1.5">
                  Your website
                  {websiteUrl
                    ? <span className="font-normal text-emerald-600">✓ auto-detected from Google</span>
                    : <span className="font-normal text-gray-400">(optional — improves keyword accuracy)</span>}
                </label>
                <input
                  type="url"
                  placeholder="https://yourbusiness.com.sg"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className={`w-full border rounded-xl px-3 py-2 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent bg-white ${
                    websiteUrl ? "border-emerald-300" : "border-gray-200"
                  }`}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => onConfirm(snapshot, placeId, websiteUrl)}
                  className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-1"
                >
                  This is my business <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={reset}
                  className="px-4 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" /> Not mine
                </button>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <Shield className="w-3 h-3" /> Free audit. No credit card. Results in under 60 seconds.
          </p>
        </div>
      </div>
    </>
  );
}
