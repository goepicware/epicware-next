"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackPatientEngineCta, type PatientEngineCtaLocation, type PatientEngineCtaType } from "./trackCtaClick";

interface TrackedCtaProps {
  href: string;
  ctaType: PatientEngineCtaType;
  ctaLocation: PatientEngineCtaLocation;
  className?: string;
  children: ReactNode;
}

/**
 * Thin Link wrapper so server-component sections (ValueStackPrice, Proof,
 * FinalCTA) can fire PatientEngineCTAClick without becoming client
 * components themselves.
 */
export default function TrackedCta({ href, ctaType, ctaLocation, className, children }: TrackedCtaProps) {
  return (
    <Link href={href} onClick={() => trackPatientEngineCta(ctaType, ctaLocation)} className={className}>
      {children}
    </Link>
  );
}
