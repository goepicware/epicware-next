export interface OpportunityCard {
  id: number;
  score: "A" | "B";
  type: "listicle" | "alternatives" | "guide";
  title: string;
  url: string;
  domain: string;
  lastUpdated: string;
  authorName: string;
  authorLinkedin?: string | null;
  contactEmail?: string | null;
  contactPage?: string | null;
  authorityEstimate: string;
  competitorsMentioned: string[];
  emailOutreach: string;
  dmOutreach: string;
  note?: string | null;
}

export type OpportunityStatus = "pending" | "contacted" | "replied" | "added";

export interface DashboardSummary {
  totalPages: number;
  scoreACount: number;
  scoreBCount: number;
  dailySendTarget: string;
  campaignDays: string;
  top5Recommendations: { rank: number; domain: string; reason: string }[];
  scheduleByDay: { days: string; domains: string[] }[];
}

export interface DashboardData {
  summary: DashboardSummary;
  opportunities: OpportunityCard[];
}

export interface FormInputs {
  brandName: string;
  website: string;
  description: string;
  targetAudience: string;
  competitors: string[];
  keywords: string[];
}

export function hashInputs(inputs: FormInputs): string {
  const str = JSON.stringify({
    brandName: inputs.brandName.toLowerCase().trim(),
    website: inputs.website.toLowerCase().trim(),
  });
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}
