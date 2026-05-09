"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, TrendingUp, Scale, Award } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
  CountUp,
  GoldLine,
} from "@/components/im/ScrollReveal";

/* ─── Data ──────────────────────────────────────────────────────── */

const metrics = [
  {
    value: 500,
    suffix: "+",
    prefix: "",
    label: "Cases Handled",
    icon: Trophy,
    duration: 2.2,
  },
  {
    value: 98,
    suffix: "%",
    prefix: "",
    label: "Success Rate",
    icon: TrendingUp,
    duration: 2,
  },
  {
    value: 50,
    suffix: "M+",
    prefix: "R",
    label: "Recovered for Clients",
    icon: Award,
    duration: 2.4,
  },
  {
    value: 15,
    suffix: "+",
    prefix: "",
    label: "Court Appearances Monthly",
    icon: Scale,
    duration: 2,
  },
];

const practiceAreas = [
  { name: "Wills & Estates", rate: 99 },
  { name: "Commercial Law", rate: 98 },
  { name: "Family Law", rate: 97 },
  { name: "Criminal Law", rate: 96 },
  { name: "Claims Against State", rate: 95 },
  { name: "General Litigation", rate: 94 },
];

/* ─── Stat Card ─────────────────────────────────────────────────── */

interface StatCardProps {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: number;
}

function StatCard({ value, suffix, prefix, label, icon: Icon, duration }: StatCardProps) {
  return (
    <motion.div
      className="group relative rounded-lg border border-brand-gold/20 p-6 sm:p-8 text-center glass-reflection transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/50"
      style={{
        background: "rgba(26, 50, 80, 0.45)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      whileHover={{
        boxShadow: "0 0 30px rgba(198, 168, 75, 0.15), 0 8px 32px rgba(0,0,0,0.2)",
      }}
      variants={staggerChildVariants}
    >
      {/* Small gold icon */}
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10">
        <Icon className="h-5 w-5 text-brand-gold" />
      </div>

      {/* Animated number */}
      <div className="relative mb-2">
        <span className="font-display text-4xl sm:text-5xl font-bold text-brand-gold tracking-tight">
          <CountUp
            end={value}
            suffix={suffix}
            prefix={prefix}
            duration={duration}
            className="text-brand-gold"
          />
        </span>
      </div>

      {/* Label */}
      <span className="font-body text-sm text-brand-inverse/60 tracking-wider uppercase leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Progress Bar Item ─────────────────────────────────────────── */

interface ProgressBarProps {
  name: string;
  rate: number;
  index: number;
}

function ProgressBar({ name, rate, index }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Label row */}
      <div className="flex items-center justify-between">
        <span className="font-body text-sm sm:text-base text-brand-inverse/80 font-medium">
          {name}
        </span>
        <span className="font-display text-lg sm:text-xl font-bold text-brand-gold tabular-nums">
          <CountUp end={rate} suffix="%" duration={1.8} className="text-brand-gold" />
        </span>
      </div>

      {/* Track */}
      <div className="relative h-2.5 w-full rounded-full bg-brand-gold/10 overflow-hidden">
        {/* Fill bar */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, #C6A84B 0%, #E4D49A 60%, #C6A84B 100%)",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${rate}%` } : { width: 0 }}
          transition={{
            duration: 1.6,
            delay: index * 0.15 + 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
        {/* Shimmer overlay */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full opacity-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={
            isInView
              ? {
                  opacity: [0, 0.6, 0],
                  x: ["-100%", "100%"],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: 2,
            delay: index * 0.15 + 1.2,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */

export function TrackRecord() {
  return (
    <section
      id="track-record"
      className="relative w-full overflow-hidden bg-brand-dark py-20 sm:py-28"
      aria-label="Our Track Record"
    >
      {/* ── Decorative background elements ── */}
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(198,168,75,0.5) 80px, rgba(198,168,75,0.5) 81px), repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(198,168,75,0.5) 80px, rgba(198,168,75,0.5) 81px)",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-8 left-6 sm:left-12 h-16 w-16 border-t-2 border-l-2 border-brand-gold/20 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-8 right-6 sm:right-12 h-16 w-16 border-t-2 border-r-2 border-brand-gold/20 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-8 left-6 sm:left-12 h-16 w-16 border-b-2 border-l-2 border-brand-gold/20 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-8 right-6 sm:right-12 h-16 w-16 border-b-2 border-r-2 border-brand-gold/20 rounded-br-sm pointer-events-none" />

      {/* Radial glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,168,75,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Radial glow bottom-left */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,168,75,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <div className="flex flex-col items-center">
            <GoldLine width={60} className="mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-inverse mb-4">
              Our Track Record
            </h2>
            <p className="font-body text-base sm:text-lg text-brand-inverse/50 max-w-2xl leading-relaxed">
              Numbers that speak to our commitment, expertise, and unwavering dedication
              to achieving the best outcomes for every client.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Part 1: Key Metrics ── */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24"
          staggerDelay={0.12}
        >
          {metrics.map((m) => (
            <StatCard key={m.label} {...m} />
          ))}
        </StaggerContainer>

        {/* ── Part 2: Practice Area Success Bars ── */}
        <ScrollReveal className="mb-8 sm:mb-10">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-inverse text-center mb-2">
            Success Across Practice Areas
          </h3>
          <p className="font-body text-sm sm:text-base text-brand-inverse/40 text-center">
            Consistently delivering results across every area of our practice
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
          {practiceAreas.map((area, index) => (
            <ProgressBar
              key={area.name}
              name={area.name}
              rate={area.rate}
              index={index}
            />
          ))}
        </div>

        {/* ── Bottom gold accent line ── */}
        <div className="mt-16 sm:mt-24">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
