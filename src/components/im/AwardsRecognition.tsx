"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy, Medal, Crown, Shield } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
  GoldLine,
} from "@/components/im/ScrollReveal";

/* ─── Data ──────────────────────────────────────────────────────── */

interface AwardData {
  title: string;
  organization: string;
  year: string;
  icon: React.ComponentType<{ className?: string }>;
}

const awards: AwardData[] = [
  {
    title: "Top 100 Lawyers in South Africa",
    organization: "Mail & Guardian",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "Best Boutique Law Firm",
    organization: "Legal 500 Africa",
    year: "2023",
    icon: Award,
  },
  {
    title: "Excellence in Family Law",
    organization: "SACLP Awards",
    year: "2024",
    icon: Star,
  },
  {
    title: "Rising Star in Legal Practice",
    organization: "Lawyer of the Year",
    year: "2023",
    icon: Crown,
  },
  {
    title: "BBBEE Level 1 Contributor",
    organization: "SANAS Certified",
    year: "2024",
    icon: Shield,
  },
  {
    title: "Client Choice Award",
    organization: "LexisNexis SA",
    year: "2023",
    icon: Medal,
  },
];

const mediaOutlets = [
  "Mail & Guardian",
  "Legal 500",
  "SACLP",
  "LexisNexis",
  "Sunday Times",
];

/* ─── Award Card ────────────────────────────────────────────────── */

interface AwardCardProps {
  award: AwardData;
}

function AwardCard({ award }: AwardCardProps) {
  const Icon = award.icon;

  return (
    <motion.div
      className="group relative card-glass card-hover-lift-glass gold-border-reveal hover-scale-up rounded-xl p-6 sm:p-8"
      variants={staggerChildVariants}
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/25 bg-brand-gold/10 transition-all duration-500 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/40 group-hover:shadow-[0_0_20px_rgba(198,168,75,0.15)]">
        <Icon className="h-6 w-6 text-brand-gold" />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg sm:text-xl font-semibold text-brand-dark leading-snug mb-2 transition-colors duration-300 group-hover:text-brand-navy">
        {award.title}
      </h3>

      {/* Organization */}
      <p className="font-body text-sm text-brand-muted leading-relaxed mb-3">
        {award.organization}
      </p>

      {/* Year badge */}
      <span className="inline-block font-body text-sm font-semibold text-brand-gold tracking-wider">
        {award.year}
      </span>
    </motion.div>
  );
}

/* ─── Marquee ───────────────────────────────────────────────────── */

function FeaturedMarquee() {
  /* Duplicate the list so the scroll seamlessly loops */
  const items = [...mediaOutlets, ...mediaOutlets];

  return (
    <div className="marquee-container w-full py-4">
      <div className="marquee-content">
        {items.map((outlet, index) => (
          <span
            key={`${outlet}-${index}`}
            className="inline-block font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-brand-muted/60 mx-6 sm:mx-10 select-none"
          >
            {outlet}
            {/* Diamond separator between items */}
            <span className="inline-block ml-6 sm:ml-10 mr-2 sm:mr-2 w-1.5 h-1.5 bg-brand-gold/30 rotate-45 rounded-[1px] align-middle" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */

export function AwardsRecognition() {
  return (
    <section
      id="awards-recognition"
      className="relative w-full overflow-hidden bg-brand-dark noise-overlay py-20 sm:py-28"
      aria-label="Awards & Recognition"
    >
      {/* ── Decorative background elements ── */}
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent z-10" />

      {/* Subtle radial glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,168,75,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Subtle radial glow bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,168,75,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-8 left-6 sm:left-12 h-12 w-12 border-t border-l border-brand-gold/15 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-8 right-6 sm:right-12 h-12 w-12 border-t border-r border-brand-gold/15 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-8 left-6 sm:left-12 h-12 w-12 border-b border-l border-brand-gold/15 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-8 right-6 sm:right-12 h-12 w-12 border-b border-r border-brand-gold/15 rounded-br-sm pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section heading ── */}
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <div className="flex flex-col items-center">
            <GoldLine width={60} className="mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Awards &amp; Recognition
            </h2>
            <p className="font-body text-base sm:text-lg text-brand-inverse/50 max-w-2xl leading-relaxed">
              Our commitment to excellence has been recognized across
              South Africa&apos;s legal landscape
            </p>
          </div>
        </ScrollReveal>

        {/* ── Award cards grid ── */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20"
          staggerDelay={0.1}
        >
          {awards.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </StaggerContainer>

        {/* ── "As Featured In" subsection ── */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center">
            {/* Label */}
            <span className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-brand-muted/50 mb-6 select-none">
              As Featured In
            </span>

            {/* Separator lines flanking the marquee */}
            <div className="relative w-full max-w-4xl">
              {/* Left fade */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

              {/* Marquee */}
              <FeaturedMarquee />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Footer ornament ── */}
        <div className="ornament-divider mt-10 sm:mt-14">
          <span className="ornament-diamond" />
        </div>
      </div>
    </section>
  );
}
