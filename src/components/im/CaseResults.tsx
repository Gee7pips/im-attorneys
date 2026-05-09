"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Gavel, Building2, ArrowRight } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
  GoldLine,
} from "@/components/im/ScrollReveal";

/* ─── Data ──────────────────────────────────────────────────────── */

interface CaseResult {
  practice: string;
  icon: React.ElementType;
  title: string;
  outcome: string;
  result: string;
  isMonetary: boolean;
  badgeColor: "green" | "gold";
}

const caseResults: CaseResult[] = [
  {
    practice: "Family Law",
    icon: Scale,
    title: "High-Net-Worth Divorce Settlement",
    outcome:
      "Successfully negotiated a comprehensive divorce settlement involving properties across three provinces, business interests, and international custody arrangements.",
    result: "R12.5M",
    isMonetary: true,
    badgeColor: "green",
  },
  {
    practice: "RAF Claims",
    icon: Shield,
    title: "Road Accident Fund Claim",
    outcome:
      "Secured maximum compensation for a client who suffered catastrophic injuries in a head-on collision, including future medical expenses and loss of earnings.",
    result: "R8.2M",
    isMonetary: true,
    badgeColor: "green",
  },
  {
    practice: "Criminal Law",
    icon: Gavel,
    title: "Acquittal in Fraud Trial",
    outcome:
      "Successfully defended a corporate executive against 47 counts of fraud, securing a full acquittal after a protracted 8-month trial.",
    result: "Acquitted",
    isMonetary: false,
    badgeColor: "gold",
  },
  {
    practice: "Commercial Law",
    icon: Building2,
    title: "Commercial Lease Dispute",
    outcome:
      "Negotiated favorable settlement in a R15M commercial lease dispute between a property developer and national retail chain.",
    result: "R15M Settled",
    isMonetary: true,
    badgeColor: "gold",
  },
  {
    practice: "Claims Against State",
    icon: Shield,
    title: "Wrongful Arrest Claim",
    outcome:
      "Obtained substantial damages for a client wrongfully arrested and detained for 72 hours without cause, including trauma compensation.",
    result: "R2.8M",
    isMonetary: true,
    badgeColor: "green",
  },
  {
    practice: "General Litigation",
    icon: Scale,
    title: "Complex Debt Recovery",
    outcome:
      "Recovered outstanding debts totalling R4.5M across multiple jurisdictions through strategic litigation and negotiation.",
    result: "R4.5M Recovered",
    isMonetary: true,
    badgeColor: "gold",
  },
];

/* ─── Case Card ─────────────────────────────────────────────────── */

function CaseCard({ caseData }: { caseData: CaseResult }) {
  const Icon = caseData.icon;

  return (
    <motion.div
      className="card-gradient-border card-hover-lift corner-gold-tl corner-gold-br"
      variants={staggerChildVariants}
    >
      <div className="relative bg-white p-6">
        {/* Top gold accent line */}
        <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0" />

        {/* Practice area badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-3 py-1">
          <Icon className="h-3.5 w-3.5 text-brand-gold" strokeWidth={1.8} />
          <span className="font-body text-xs font-medium text-brand-gold">
            {caseData.practice}
          </span>
        </div>

        {/* Case title */}
        <h3 className="font-body text-lg font-semibold text-brand-dark mb-3">
          {caseData.title}
        </h3>

        {/* Outcome text */}
        <p className="font-body text-sm leading-relaxed text-brand-body mb-5">
          {caseData.outcome}
        </p>

        {/* Gold separator */}
        <div className="h-px bg-gradient-to-r from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 mb-5" />

        {/* Result highlight */}
        <div className="flex items-center justify-between">
          {caseData.isMonetary ? (
            <span className="font-display font-bold text-xl text-gold-gradient hover-glow-text-gold">
              {caseData.result}
            </span>
          ) : (
            <span className="font-body font-semibold text-green-600">
              {caseData.result}
            </span>
          )}

          {/* Status dot indicator */}
          <div
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
              caseData.badgeColor === "green"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-brand-gold/10 text-brand-gold border border-brand-gold/30"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                caseData.badgeColor === "green" ? "bg-green-500" : "bg-brand-gold"
              }`}
            />
            {caseData.badgeColor === "green" ? "Awarded" : "Resolved"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */

export function CaseResults() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="case-results"
      className="relative w-full overflow-hidden bg-white bg-dot-pattern py-20 sm:py-28"
      aria-label="Notable Case Results"
    >
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      {/* Ornament divider at top */}
      <div className="ornament-divider">
        <div className="ornament-diamond" />
      </div>

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,168,75,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <div className="flex flex-col items-center">
            <GoldLine width={60} className="mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Notable Case Results
            </h2>
            <p className="font-body text-base sm:text-lg text-brand-body max-w-2xl leading-relaxed">
              Real outcomes. Real justice. These represent a selection of matters we
              have successfully resolved.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {caseResults.map((caseData) => (
            <CaseCard key={caseData.title} caseData={caseData} />
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-14 sm:mt-20">
          <div className="flex flex-col items-center text-center gap-5">
            <p className="font-body text-brand-body text-base sm:text-lg">
              Every case is unique. Let us discuss yours.
            </p>
            <a
              href="#contact"
              className="btn-premium"
              onClick={scrollToContact}
            >
              <span>Request a Case Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
