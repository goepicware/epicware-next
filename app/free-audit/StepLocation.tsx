"use client";

import { useEffect, useRef, useState } from "react";
import { importLibrary } from "@googlemaps/js-api-loader";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface Props {
  businessName: string;
  address: string;
  lat: number;
  lng: number;
  radiusKm: number;
  keywordCount: number;
  onRadiusChange: (km: number) => void;
  onConfirm: () => void;
  onBack: () => void;
}

function radiusToZoom(km: number): number {
  if (km <= 1) return 15;
  if (km <= 2) return 14;
  if (km <= 3) return 13;
  if (km <= 5) return 13;
  if (km <= 8) return 12;
  return 11;
}

export default function StepLocation({
  businessName, address, lat, lng,
  radiusKm, keywordCount,
  onRadiusChange, onConfirm, onBack,
}: Props) {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const circleRef = useRef<google.maps.Circle | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Initialise map once
  useEffect(() => {
    if (!mapDivRef.current) return;
    let cancelled = false;

    (async () => {
      try {
        const { Map } = await importLibrary("maps") as google.maps.MapsLibrary;
        if (cancelled || !mapDivRef.current) return;

        const center = { lat, lng };
        const map = new Map(mapDivRef.current, {
          center,
          zoom: radiusToZoom(radiusKm),
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          clickableIcons: false,
          styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }],
        });

        new google.maps.Marker({ position: center, map, title: businessName });

        const circle = new google.maps.Circle({
          map, center,
          radius: radiusKm * 1000,
          fillColor: "#2563EB", fillOpacity: 0.08,
          strokeColor: "#2563EB", strokeWeight: 2, strokeOpacity: 0.5,
        });

        mapRef.current = map;
        circleRef.current = circle;
        setMapLoaded(true);
      } catch {
        setMapError(true);
      }
    })();

    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update circle + zoom when radius changes
  useEffect(() => {
    if (!circleRef.current || !mapRef.current) return;
    circleRef.current.setRadius(radiusKm * 1000);
    mapRef.current.setZoom(radiusToZoom(radiusKm));
  }, [radiusKm]);

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Map */}
        <div className="relative h-52 bg-gray-100">
          <div ref={mapDivRef} className="w-full h-full" />
          {!mapLoaded && !mapError && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                Loading map…
              </div>
            </div>
          )}
          {mapError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-sm text-gray-400">
                <MapPin className="w-6 h-6 mx-auto mb-1 text-gray-300" />
                Map preview unavailable
              </div>
            </div>
          )}
        </div>

        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Set your audit radius</h2>
          <p className="text-gray-500 text-sm mb-6">
            We&apos;ll scan a{" "}
            <span className="font-semibold text-[#2563EB]">{radiusKm}km radius</span>{" "}
            around your business for all {keywordCount} keyword{keywordCount !== 1 ? "s" : ""}.
          </p>

          {/* Location summary */}
          <div className="bg-[#F0F4F8] rounded-xl p-4 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm truncate">{businessName}</p>
              <p className="text-xs text-gray-500 truncate">{address}</p>
            </div>
          </div>

          {/* Radius pills */}
          <label className="block text-sm font-semibold text-gray-700 mb-3">Scan radius</label>
          <div className="flex gap-2 flex-wrap mb-3">
            {[1, 2, 3, 5, 8, 10].map((km) => (
              <button
                key={km}
                type="button"
                onClick={() => onRadiusChange(km)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-colors ${
                  radiusKm === km
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#2563EB]"
                }`}
              >
                {km}km
              </button>
            ))}
          </div>
          <input
            type="range" min={1} max={10} step={1} value={radiusKm}
            onChange={(e) => onRadiusChange(Number(e.target.value))}
            className="w-full accent-[#2563EB] mb-6"
          />

          <p className="text-sm text-gray-500 mb-6">
            We&apos;ll scan{" "}
            <span className="font-semibold text-[#2563EB]">49 grid points</span>{" "}
            across {radiusKm}km — every block where your customers might search.
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onBack}
              className="px-5 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Start Audit <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
