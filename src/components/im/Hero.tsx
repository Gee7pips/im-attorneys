"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Scale, Clock, Award, Star } from "lucide-react";
import { ScrollReveal } from "@/components/im/ScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: (d: number) => ({
    scaleX: 1,
    transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

const trustItems = [
  { icon: Clock, label: "24/7 Available" },
  { icon: Scale, label: "500+ Cases Won" },
  { icon: Award, label: "98% Success Rate" },
  { icon: Star, label: "BBBEE Level 1" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.25]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/pegasus-building-exterior.jpg"
          alt="IM Attorneys — Pegasus Menlyn Maine, Pretoria"
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="(max-width: 640px) 600px, (max-width: 1024px) 1200px, 1920px"
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#C6A84B]/5 via-transparent to-[#C6A84B]/5" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_50%,#0D1B2A_95%)]" />

      <motion.div
        className="absolute inset-0 z-[1] bg-[#0D1B2A]"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative z-[5] w-full max-w-5xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 text-center">
        <motion.p
          className="font-body text-[11px] sm:text-xs uppercase tracking-[0.3em] text-brand-gold/80 mb-5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Est. 2023 · Pretoria · Boutique Law Firm
        </motion.p>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8 max-w-[140px]"
          variants={lineReveal}
          initial="hidden"
          animate="visible"
          custom={0.5}
        />

        <h1 className="font-display leading-[1.1] mb-6">
          <motion.span
            className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
          >
            Defending Your Rights,
          </motion.span>
          <motion.span
            className="block text-gold-gradient text-shadow-gold-glow text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.85}
          >
            Championing Your Future.
          </motion.span>
        </h1>

        <motion.p
          className="font-body text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.05}
        >
          When your freedom, family, or fortune is at stake — you need more than a lawyer. You need <span className="text-brand-gold font-medium">IM Attorneys</span>.
        </motion.p>

        <motion.div
          className="hidden md:flex items-center justify-center gap-5 lg:gap-8 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.25}
        >
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              {i > 0 && <span className="text-brand-gold/40 text-[8px]">◆</span>}
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-brand-gold/70" />
                <span className="font-body text-sm text-white/70">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.45}
        >
          <a href="#contact" className="btn-premium inline-flex items-center gap-2 px-7 py-3.5 font-body text-sm rounded-md">
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#practice-areas" className="btn-premium-outline inline-flex items-center gap-2 px-7 py-3.5 font-body text-sm rounded-md">
            <Scale className="w-4 h-4" />
            Explore Practice Areas
          </a>
        </motion.div>
      </div>
    </section>
  );
}
