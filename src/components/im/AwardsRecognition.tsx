"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Star,
  Trophy,
  Medal,
  Crown,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  ScrollReveal,
  GoldLine,
} from "@/components/im/ScrollReveal";

/* ─── Data ──────────────────────────────────────────────────────── */

interface AwardData {
  title: string;
  org: string;
  year: string;
  icon: React.ComponentType<{ className?: string }>;
}

const awards: AwardData[] = [
  {
    title: "Top 100 Lawyers in South Africa",
    org: "Mail & Guardian",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "Best Boutique Law Firm",
    org: "Legal 500 Africa",
    year: "2023",
    icon: Award,
  },
  {
    title: "Excellence in Family Law",
    org: "SACLP Awards",
    year: "2024",
    icon: Star,
  },
  {
    title: "Rising Star in Legal Practice",
    org: "Lawyer of the Year",
    year: "2023",
    icon: Crown,
  },
  {
    title: "BBBEE Level 1 Contributor",
    org: "SANAS Certified",
    year: "2024",
    icon: Shield,
  },
  {
    title: "Client Choice Award",
    org: "LexisNexis SA",
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

/* ─── Stagger animation variants ────────────────────────────────── */

const carouselContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const carouselCardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ─── Award Card ────────────────────────────────────────────────── */

interface AwardCardProps {
  award: AwardData;
  index: number;
}

function AwardCard({ award, index }: AwardCardProps) {
  const Icon = award.icon;
  const floatDelay = index * -1;

  return (
    <motion.div
      className="group relative card-glass-organic spotlight-card p-6 sm:p-8 flex flex-col items-center text-center cursor-default"
      style={{
        minWidth: "280px",
        width: "min(300px, 80vw)",
        animationDelay: `${index * -1.5}s`,
      }}
      variants={carouselCardVariants}
    >
      {/* Subtle gold glow behind icon — appears on hover */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-brand-gold/0 group-hover:bg-brand-gold/10 blur-3xl transition-all duration-700 pointer-events-none" />

      {/* Icon container with diamond clip-path */}
      <div className="relative mb-6 flex-shrink-0">
        <div
          className="clip-diamond-lg w-20 h-20 flex items-center justify-center bg-gradient-to-b from-brand-gold/20 via-brand-gold/10 to-transparent float-organic"
          style={{ animationDelay: `${floatDelay}s` }}
        >
          <div className="clip-diamond-lg w-16 h-16 flex items-center justify-center bg-brand-dark/60">
            <Icon className="w-8 h-8 text-brand-gold relative z-10" />
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug mb-2 relative z-10">
        {award.title}
      </h3>

      {/* Gold gradient line separator */}
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent mb-3 relative z-10" />

      {/* Organization */}
      <p className="font-body text-sm text-brand-inverse/40 leading-relaxed mb-3 relative z-10">
        {award.org}
      </p>

      {/* Year badge */}
      <span className="relative z-10 font-body text-sm font-semibold text-brand-gold tracking-widest uppercase">
        {award.year}
      </span>

      {/* Bottom subtle accent line on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent group-hover:w-3/4 transition-all duration-700" />
    </motion.div>
  );
}

/* ─── Featured Marquee (enhanced) ──────────────────────────────── */

function FeaturedMarquee() {
  const items = [...mediaOutlets, ...mediaOutlets];

  return (
    <div className="marquee-container w-full py-5">
      <div className="marquee-content">
        {items.map((outlet, index) => (
          <span
            key={`${outlet}-${index}`}
            className="inline-flex items-center gap-6 sm:gap-8 font-body text-xs sm:text-sm tracking-[0.3em] uppercase select-none"
            style={{ color: "rgba(198, 168, 75, 0.4)" }}
          >
            {outlet}
            {/* Diamond separator */}
            <span
              className="inline-block w-1.5 h-1.5 rotate-45 rounded-[1px] flex-shrink-0"
              style={{ background: "rgba(198, 168, 75, 0.3)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */

export function AwardsRecognition() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);

    const cardEl = el.querySelector<HTMLElement>(":scope > *");
    const cardWidth = cardEl?.offsetWidth ?? 300;
    const gap = 24;
    const newIndex = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(newIndex, awards.length - 1));
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();

    el.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const cardEl = el.querySelector<HTMLElement>(":scope > *");
    const cardWidth = cardEl?.offsetWidth ?? 300;
    const scrollAmount = cardWidth + 24;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const cardEl = el.querySelector<HTMLElement>(":scope > *");
    const cardWidth = cardEl?.offsetWidth ?? 300;
    const scrollTarget = (cardWidth + 24) * index;
    el.scrollTo({ left: scrollTarget, behavior: "smooth" });
  }, []);

  return (
    <section
      id="awards-recognition"
      className="relative w-full overflow-hidden bg-brand-dark noise-overlay py-20 sm:py-28"
      aria-label="Awards &amp; Recognition"
    >
      {/* ── Background Effects ── */}
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-10" />

      {/* Floating blob-morph shapes */}
      <div className="blob-morph blob-1" />
      <div className="blob-morph blob-2" />
      <div className="blob-morph blob-3" />

      {/* Subtle radial glows in corners */}
      <div
        className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(198,168,75,0.06) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(198,168,75,0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(198,168,75,0.015) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section heading ── */}
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <div className="flex flex-col items-center">
            <GoldLine width={80} className="mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hall of{" "}
              <span className="text-gold-gradient">Excellence</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-brand-inverse/45 max-w-2xl leading-relaxed">
              Our commitment to legal excellence has been recognized across
              South Africa&apos;s most prestigious institutions
            </p>
          </div>
        </ScrollReveal>

        {/* ── Carousel Container ── */}
        <div ref={sectionRef}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={carouselContainerVariants}
          >
            <div className="relative">
              {/* Left fade overlay */}
              <div
                className="absolute left-0 top-0 bottom-8 w-8 sm:w-16 bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none transition-opacity duration-300"
                style={{ opacity: canScrollLeft ? 1 : 0 }}
              />
              {/* Right fade overlay */}
              <div
                className="absolute right-0 top-0 bottom-8 w-8 sm:w-16 bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none transition-opacity duration-300"
                style={{ opacity: canScrollRight ? 1 : 0 }}
              />

              {/* Left arrow button */}
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-gold/20 bg-brand-dark/80 backdrop-blur-sm flex items-center justify-center text-brand-gold/60 hover:text-brand-gold hover:border-brand-gold/40 hover:bg-brand-dark/95 hover:shadow-[0_0_20px_rgba(198,168,75,0.15)] transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none disabled:cursor-default"
                aria-label="Scroll awards left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right arrow button */}
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-gold/20 bg-brand-dark/80 backdrop-blur-sm flex items-center justify-center text-brand-gold/60 hover:text-brand-gold hover:border-brand-gold/40 hover:bg-brand-dark/95 hover:shadow-[0_0_20px_rgba(198,168,75,0.15)] transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none disabled:cursor-default"
                aria-label="Scroll awards right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Horizontal scroll carousel */}
              <div
                ref={carouselRef}
                className="scroll-carousel px-2 sm:px-0"
              >
                {awards.map((award, index) => (
                  <AwardCard
                    key={award.title}
                    award={award}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div
              className="flex items-center justify-center gap-2 mt-6"
              role="tablist"
              aria-label="Award card navigation"
            >
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? "w-6 h-2 bg-brand-gold shadow-[0_0_8px_rgba(198,168,75,0.4)]"
                      : "w-2 h-2 bg-brand-gold/25 hover:bg-brand-gold/40"
                  }`}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to award ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── "As Featured In" subsection ── */}
        <ScrollReveal delay={0.25} className="mt-16 sm:mt-20">
          <div className="flex flex-col items-center">
            {/* Label with diamond accents */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-block w-1.5 h-1.5 rotate-45 rounded-[1px]"
                style={{ background: "rgba(198, 168, 75, 0.3)" }}
              />
              <span
                className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase"
                style={{ color: "rgba(198, 168, 75, 0.45)" }}
              >
                As Featured In
              </span>
              <span
                className="inline-block w-1.5 h-1.5 rotate-45 rounded-[1px]"
                style={{ background: "rgba(198, 168, 75, 0.3)" }}
              />
            </div>

            {/* Marquee with fade edges */}
            <div className="relative w-full max-w-4xl">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
              <FeaturedMarquee />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Footer ornament ── */}
        <div className="ornament-divider mt-12 sm:mt-16">
          <span className="ornament-diamond" />
        </div>
      </div>
    </section>
  );
}
