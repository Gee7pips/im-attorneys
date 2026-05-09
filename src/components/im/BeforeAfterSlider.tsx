"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
} from "@/components/im/ScrollReveal";

/* ─── Data ──────────────────────────────────────────────────────── */

interface ComparisonCard {
  title: string;
  before: {
    heading: string;
    description: string;
    amount: string;
  };
  after: {
    heading: string;
    description: string;
    amount: string;
  };
  practiceArea: string;
  duration: string;
}

const comparisonCards: ComparisonCard[] = [
  {
    title: "RAF Claims Success",
    before: {
      heading: "After Car Accident",
      description:
        "Unable to work, mounting medical bills, insurance company denying claim",
      amount: "R0 recovered",
    },
    after: {
      heading: "Settlement Achieved",
      description:
        "Full medical expenses covered, lost income recovered, future care provided",
      amount: "R1.2 Million",
    },
    practiceArea: "RAF Claims",
    duration: "14 months",
  },
  {
    title: "Criminal Defence Victory",
    before: {
      heading: "Facing Serious Charges",
      description:
        "Bail denied, reputation at stake, career in jeopardy",
      amount: "Charges: Fraud",
    },
    after: {
      heading: "Full Acquittal",
      description:
        "All charges dropped, reputation restored, record expunged",
      amount: "Result: Not Guilty",
    },
    practiceArea: "Criminal Law",
    duration: "8 months",
  },
  {
    title: "Family Resolution",
    before: {
      heading: "Bitter Custody Battle",
      description:
        "No access to children, lengthy court delays, emotional distress",
      amount: "Duration: 18 months",
    },
    after: {
      heading: "Shared Custody Agreement",
      description:
        "Regular access to children, amicable co-parenting plan, peace of mind",
      amount: "Result: Favorable Order",
    },
    practiceArea: "Family Law",
    duration: "18 months",
  },
];

/* ─── Divider Gold Fancy ────────────────────────────────────────── */

function DividerGoldFancy({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="block h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/50" />
      <span className="block h-1.5 w-1.5 rotate-45 bg-brand-gold/60" />
      <span className="block h-0.5 w-16 bg-gradient-to-r from-brand-gold/20 via-brand-gold to-brand-gold/20" />
      <span className="block h-1.5 w-1.5 rotate-45 bg-brand-gold/60" />
      <span className="block h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/50" />
    </div>
  );
}

/* ─── Comparison Card ───────────────────────────────────────────── */

function ComparisonCardComponent({ card }: { card: ComparisonCard }) {
  return (
    <motion.div
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      variants={staggerChildVariants}
    >
      {/* Card Title */}
      <div className="px-5 pt-5 pb-3">
        <h3 className="font-display text-lg font-semibold text-brand-dark text-center">
          {card.title}
        </h3>
      </div>

      {/* Before / After Split */}
      <div className="flex flex-col md:flex-row">
        {/* Before Section */}
        <div className="flex-1 bg-red-50 p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-0.5 flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <h4 className="font-body text-sm font-semibold text-red-700">
              {card.before.heading}
            </h4>
          </div>
          <p className="font-body text-sm leading-relaxed text-red-700/80 mb-4">
            {card.before.description}
          </p>
          <p className="font-body text-sm font-medium text-red-600">
            {card.before.amount}
          </p>
        </div>

        {/* Divider: vertical on desktop, horizontal on mobile */}
        <div className="relative flex items-center justify-center md:w-px w-full md:h-auto h-px bg-transparent shrink-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold to-transparent md:bg-gradient-to-b md:from-transparent md:via-brand-gold md:to-transparent bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold shadow-sm">
            <ArrowRight className="h-3.5 w-3.5 text-white rotate-90 md:rotate-0" />
          </div>
        </div>

        {/* After Section */}
        <div className="flex-1 bg-green-50 p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-0.5 flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <h4 className="font-body text-sm font-semibold text-green-700">
              {card.after.heading}
            </h4>
          </div>
          <p className="font-body text-sm leading-relaxed text-green-700/80 mb-4">
            {card.after.description}
          </p>
          <p className="font-body text-sm font-bold text-green-600">
            {card.after.amount}
          </p>
        </div>
      </div>

      {/* Bottom Badges */}
      <div className="px-5 py-3 flex items-center justify-between border-t border-brand-border/50 bg-brand-cream/50">
        <span className="font-body text-xs font-medium text-brand-muted uppercase tracking-wider">
          {card.practiceArea}
        </span>
        <span className="font-body text-xs text-brand-muted">
          {card.duration}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */

export function BeforeAfterSlider() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="before-after"
      className="relative w-full overflow-hidden bg-brand-cream py-20 sm:py-28"
      aria-label="Before and After Case Comparisons"
    >
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,168,75,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <div className="flex flex-col items-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-5">
              Real Results, Real Impact
            </h2>
            <DividerGoldFancy className="mb-5" />
            <p className="font-body text-base sm:text-lg text-brand-body max-w-2xl leading-relaxed">
              See how we&apos;ve helped our clients transform challenging
              situations into positive outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {comparisonCards.map((card) => (
            <ComparisonCardComponent key={card.title} card={card} />
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-14 sm:mt-20">
          <div className="flex flex-col items-center text-center gap-5">
            <p className="font-body text-brand-body text-base sm:text-lg">
              Your situation has a solution too. Let us show you the way.
            </p>
            <a
              href="#contact"
              className="btn-premium"
              onClick={scrollToContact}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
