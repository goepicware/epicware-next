export interface GBPSnapshot {
  businessName: string;
  address: string;
  category: string;
  rawTypes: string[];
  rating: number;
  reviewCount: number;
  lat: number;
  lng: number;
  photoCount?: number;
  reviews?: Array<{ text: string; rating: number }>;
  editorialSummary?: string;
}

export interface EnrichedKeyword {
  keyword: string;
  type: "red" | "blue";
  difficulty: "LOW" | "MEDIUM" | "HIGH" | "VERY HIGH";
  estimatedVolume: string;
  clientRank: number;
  topCompetitor: { name: string; rating: number; reviewCount: number } | null;
  insight: string;
}
