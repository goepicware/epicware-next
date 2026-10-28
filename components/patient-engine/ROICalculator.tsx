"use client";

import { useEffect, useRef, useState } from "react";
import { PRICING } from "@/lib/site/proof";
import { trackEvent } from "@/lib/meta-tracking";

const { fullStack } = PRICING.plans;
const { minAdSpend } = PRICING.patientEngineOffer;

const currencyFormatter = new Intl.NumberFormat("en-SG", {
  style: "currency",
  currency: "SGD",
  maximumFractionDigits: 0,
});

function formatSGD(value: number): string {
  return currencyFormatter.format(value);
}

type ValueBasis = "first" | "twelveMonth";

export default function ROICalculator() {
  const [patientValue, setPatientValue] = useState("");
  const [newPatients, setNewPatients] = useState("");
  const [adSpendInput, setAdSpendInput] = useState("");
  const [outlets, setOutlets] = useState("1");
  const [basis, setBasis] = useState<ValueBasis>("first");
  const hasFiredCalculatorUsed = useRef(false);

  const patientValueNum = Number(patientValue);
  const newPatientsNum = Number(newPatients);
  const adSpendInputNum = Number(adSpendInput);
  const outletsNum = Math.max(1, Math.trunc(Number(outlets) || 1));

  const hasPatientValue = patientValue !== "" && patientValueNum > 0;
  const isBelowMinAdSpend = adSpendInput !== "" && adSpendInputNum < minAdSpend;

  const adSpend = Math.max(adSpendInputNum || 0, minAdSpend);
  const gbpMgmt = fullStack.perOutlet * (outletsNum - 1);
  const totalMonthly = fullStack.monthly + adSpend + gbpMgmt;
  const revenue = hasPatientValue ? patientValueNum * (newPatientsNum || 0) : 0;
  const net = revenue - totalMonthly;
  const breakEven = hasPatientValue ? Math.ceil(totalMonthly / patientValueNum) : 0;
  const roiMultiple = totalMonthly > 0 ? revenue / totalMonthly : 0;

  const hasFullResult = hasPatientValue && newPatients !== "";

  useEffect(() => {
    if (!hasFullResult || hasFiredCalculatorUsed.current) return;
    hasFiredCalculatorUsed.current = true;
    trackEvent("CalculatorUsed", {
      customData: { content_name: "90-Day Patient Engine" },
    });
  }, [hasFullResult]);

  const valueBasisLabel = basis === "first" ? "first-treatment revenue" : "12-month patient value";

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6 lg:p-10 shadow-card">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label htmlFor="pe-patient-value" className="text-sm font-semibold text-foreground block mb-2">
              Average value of a new patient (S$)
            </label>
            <div className="inline-flex rounded-full border border-border p-1 mb-3" role="group" aria-label="Patient value basis">
              <button
                type="button"
                onClick={() => setBasis("first")}
                aria-pressed={basis === "first"}
                className={`h-11 px-4 rounded-full text-xs font-semibold transition-colors ${
                  basis === "first" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                First treatment
              </button>
              <button
                type="button"
                onClick={() => setBasis("twelveMonth")}
                aria-pressed={basis === "twelveMonth"}
                className={`h-11 px-4 rounded-full text-xs font-semibold transition-colors ${
                  basis === "twelveMonth" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                12-month value
              </button>
            </div>
            <input
              id="pe-patient-value"
              type="number"
              inputMode="decimal"
              min={0}
              placeholder="e.g. 1,000"
              value={patientValue}
              onChange={(e) => setPatientValue(e.target.value)}
              className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <div>
            <label htmlFor="pe-new-patients" className="text-sm font-semibold text-foreground block mb-2">
              New patients per month from the Engine
            </label>
            <input
              id="pe-new-patients"
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              placeholder="e.g. 10"
              value={newPatients}
              onChange={(e) => setNewPatients(e.target.value)}
              className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <div>
            <label htmlFor="pe-ad-spend" className="text-sm font-semibold text-foreground block mb-2">
              Monthly ad spend (S$)
            </label>
            <input
              id="pe-ad-spend"
              type="number"
              inputMode="decimal"
              min={0}
              placeholder="1,500"
              value={adSpendInput}
              onChange={(e) => setAdSpendInput(e.target.value)}
              className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            {isBelowMinAdSpend ? (
              <p className="text-xs text-amber-700 mt-1.5 font-medium">
                Minimum ad spend is {formatSGD(minAdSpend)}/month
              </p>
            ) : (
              <p className="text-xs text-muted-foreground mt-1.5">
                Minimum {formatSGD(minAdSpend)}, paid directly to Meta and Google
              </p>
            )}
          </div>

          <div>
            <label htmlFor="pe-outlets" className="text-sm font-semibold text-foreground block mb-2">
              Number of outlets
            </label>
            <input
              id="pe-outlets"
              type="number"
              inputMode="numeric"
              min={1}
              step={1}
              value={outlets}
              onChange={(e) => setOutlets(e.target.value)}
              className="flex h-12 w-full rounded-xl border border-input bg-background px-4 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              First outlet included. S${fullStack.perOutlet} per additional outlet for Google Business Profile management
            </p>
          </div>
        </div>

        {/* Outputs */}
        <div>
          {!hasPatientValue ? (
            <div className="h-full flex items-center justify-center text-center rounded-2xl border border-dashed border-border bg-muted/30 p-8">
              <p className="text-muted-foreground">Enter your numbers to see your break-even point.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-2xl bg-foreground text-background p-6">
                <p className="text-sm text-background/70 mb-2">You need</p>
                <p className="font-display font-bold text-4xl lg:text-5xl mb-2 leading-tight">
                  {breakEven} new patient{breakEven === 1 ? "" : "s"} a month
                </p>
                <p className="text-sm text-background/70">to cover the full cost.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">Total monthly investment</p>
                  <p className="font-display font-bold text-xl text-foreground">{formatSGD(totalMonthly)}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {formatSGD(fullStack.monthly)} fee (incl. 1 outlet) + {formatSGD(adSpend)} ad spend
                    {gbpMgmt > 0 ? ` + ${formatSGD(gbpMgmt)} additional outlets` : ""}
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">Revenue from new patients</p>
                  <p className="font-display font-bold text-xl text-foreground">{formatSGD(revenue)}</p>
                  <p className="text-xs text-muted-foreground mt-2">in {valueBasisLabel}</p>
                </div>
                <div className="rounded-xl border border-border/60 p-4">
                  <p className="text-xs text-muted-foreground mb-1">Net return</p>
                  <p className={`font-display font-bold text-xl ${net >= 0 ? "text-emerald-700" : "text-foreground"}`}>
                    {formatSGD(net)}
                  </p>
                </div>
                {revenue > 0 && (
                  <div className="rounded-xl border border-border/60 p-4">
                    <p className="text-xs text-muted-foreground mb-1">Return on investment</p>
                    <p className="font-display font-bold text-xl text-foreground">{roiMultiple.toFixed(1)}×</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-8 pt-6 border-t border-border/40 leading-relaxed">
        This calculator illustrates your own assumptions. It is not a forecast or a guarantee of revenue. The
        one-time S${PRICING.patientEngineOffer.setupFee.toLocaleString("en-SG")} setup fee is not included and is
        waived when you pay 3 months upfront.
      </p>
    </div>
  );
}
