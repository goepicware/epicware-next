// Sept 15, 2026 at midnight SGT (UTC+8)
export const PRICE_INCREASE_DATE = new Date("2026-09-15T00:00:00+08:00");

export function isPriceIncreaseLive(): boolean {
  return new Date() >= PRICE_INCREASE_DATE;
}

export interface PlanPriceIncrease {
  newMonthly: number;
  newAnnual: number;
}

// Only plans whose prices change — Foundation and Full Stack are absent intentionally.
export const PRICE_INCREASES: Record<string, PlanPriceIncrease> = {
  Authority: { newMonthly: 899, newAnnual: 764 },
  Domination: { newMonthly: 1800, newAnnual: 1530 },
};

export const PRICE_INCREASE_LABEL = "Sept 15, 2026";
