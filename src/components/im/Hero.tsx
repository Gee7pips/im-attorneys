"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/im/ScrollReveal";

const practiceAreas = [
  "Family Law",
  "Wills & Estates",
  "Criminal Law",
  "Commercial Law",
  "RAF Claims",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Hero() {
  const handleExploreServices = () => {
    const el = document.querySelector("#services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-brand-dark"
    >
      {/* ─── Main Layout: 60/40 Split on Desktop ─── */}
      <div className="relative flex min-h-screen flex-col lg:flex-row">
        {/* ─── Text Panel (60% on desktop) ─── */}
        <div className="relative z-10 flex w-full flex-col justify-center lg:w-[60%]">
          {/* Subtle background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-navy/60 lg:bg-none" />

          <div className="relative z-10 px-6 py-8 sm:px-10 md:px-16 lg:px-20 xl:px-28">
            {/* Mobile: image banner appears above this on small screens */}
            <div className="lg:hidden mb-8 mt-16" />

            <div className="mx-auto max-w-xl lg:max-w-none lg:mx-0">
              {/* Small Caps Gold Label */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-6"
              >
                <span className="inline-block font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  Boutique Law Firm &middot; Pretoria
                </span>
              </motion.div>

              {/* Decorative gold line */}
              <motion.div
                custom={0.05}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-8"
              >
                <div className="h-[2px] w-16 bg-gradient-to-r from-brand-gold to-brand-gold/0" />
              </motion.div>

              {/* H1 Heading */}
              <motion.h1
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                Legal Service{" "}
                <span className="text-gold-gradient">Curated</span> for You.
              </motion.h1>

              {/* Body Text */}
              <motion.p
                custom={0.4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="font-body text-base sm:text-lg leading-relaxed text-white/70 max-w-lg mb-10"
              >
                Personal and business legal solutions from Pretoria&apos;s most
                prestigious address — Menlyn Maine.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={0.6}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
              >
                {/* Primary CTA — Gold */}
                <a
                  href="mailto:attorneys@iminc.co.za?subject=Book%20a%20consultation"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-gold text-brand-dark font-body font-semibold text-sm rounded-sm transition-all duration-300 hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/20 w-full sm:w-auto"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Secondary CTA — Outline */}
                <button
                  onClick={handleExploreServices}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-sm transition-all duration-300 hover:border-brand-gold hover:text-brand-gold hover:bg-white/5 backdrop-blur-sm w-full sm:w-auto"
                >
                  Explore Our Services
                </button>
              </motion.div>

              {/* Trust Signal Bar */}
              <motion.div
                custom={0.75}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="border-t border-white/10 pt-6"
              >
                <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-3">
                  Practice Areas
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  {practiceAreas.map((area, i) => (
                    <span key={area} className="flex items-center gap-x-3">
                      <span className="font-body text-sm text-white/60">
                        {area}
                      </span>
                      {i < practiceAreas.length - 1 && (
                        <span className="hidden sm:inline text-brand-gold/40 text-xs">
                          &middot;
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ─── Image Panel (40% on desktop) ─── */}
        <div className="relative hidden lg:block lg:w-[40%]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromRight}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero-building.png"
              alt="IM Attorneys office building in Menlyn Maine, Pretoria"
              fill
              className="object-cover"
              priority
              sizes="40vw"
            />
            {/* Gradient overlays for polish */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Gold Badge — positioned on the split line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute -left-8 top-1/2 z-20 -translate-y-1/2"
          >
            <div className="relative bg-brand-gold px-5 py-3 shadow-xl shadow-black/20">
              {/* Decorative notch left */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[8px] border-r-brand-gold" />
              {/* Decorative notch right */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[8px] border-l-brand-gold" />

              <div className="flex flex-col items-center">
                <span className="font-display text-sm font-semibold text-brand-dark leading-tight text-center whitespace-nowrap">
                  Est. 2023
                </span>
                <div className="w-8 h-px bg-brand-dark/30 my-1" />
                <span className="font-body text-[11px] text-brand-dark/70 text-center whitespace-nowrap">
                  Menlyn Maine, Pretoria
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Mobile Image Banner (280px) ─── */}
        <div className="relative block lg:hidden h-[280px] w-full flex-shrink-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero-building.png"
              alt="IM Attorneys office building in Menlyn Maine, Pretoria"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark" />
          </motion.div>

          {/* Mobile floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="bg-brand-gold px-4 py-2.5 shadow-lg shadow-black/20">
              <div className="flex flex-col items-center">
                <span className="font-display text-xs font-semibold text-brand-dark leading-tight text-center whitespace-nowrap">
                  Est. 2023 &middot; Menlyn Maine, Pretoria
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <ScrollReveal
        direction="none"
        delay={1.2}
        duration={0.8}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-white/30 group-hover:text-white/50 transition-colors duration-300">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-5 h-5 text-white/30 group-hover:text-brand-gold transition-colors duration-300" />
          </motion.div>
        </div>
      </ScrollReveal>

      {/* ─── Ambient Decorative Elements ─── */}
      {/* Top-right corner gold accent line */}
      <div className="hidden lg:block absolute top-0 right-[40%] z-10 w-px h-32 bg-gradient-to-b from-brand-gold/40 to-transparent" />
      {/* Bottom-left subtle gold glow */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/[0.03] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
