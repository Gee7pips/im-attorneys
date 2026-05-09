"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, Gavel, Award, ArrowRight, ArrowDown } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
  GoldLine,
} from "@/components/im/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Free Initial Consultation",
    description:
      "We listen to your situation, assess your legal position, and provide clear guidance on your options — at no cost.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Tailored Legal Strategy",
    description:
      "We develop a comprehensive legal strategy designed to achieve the best possible outcome for your unique circumstances.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Diligent Representation",
    description:
      "Our team executes your case with precision, keeping you informed at every stage and fighting for your rights.",
    icon: Gavel,
  },
  {
    number: "04",
    title: "Favourable Resolution",
    description:
      "Whether through negotiation, mediation, or litigation — we pursue the resolution you deserve.",
    icon: Award,
  },
];

function AnimatedTimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="absolute top-7 left-[7%] right-[7%] hidden lg:block z-0">
      {/* Gold connecting line */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-brand-gold/60 via-brand-gold to-brand-gold/60"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ transformOrigin: "left center" }}
      />
      {/* End arrow */}
      <motion.div
        className="absolute -right-3 -top-[5px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <ArrowRight className="w-3 h-3 text-brand-gold" />
      </motion.div>
    </div>
  );
}

function AnimatedVerticalLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="absolute left-7 top-7 bottom-7 w-0.5 lg:hidden z-0"
    >
      {/* Gold vertical line */}
      <motion.div
        className="w-full bg-gradient-to-b from-brand-gold/60 via-brand-gold to-brand-gold/60"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
      />
      {/* End arrow */}
      <motion.div
        className="absolute -bottom-3 -left-[5px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <ArrowDown className="w-3 h-3 text-brand-gold" />
      </motion.div>
    </div>
  );
}

function StepNumber({ number }: { number: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      className="font-display text-5xl font-bold text-brand-gold/20 select-none pointer-events-none"
      animate={
        isInView
          ? { opacity: [0.2, 0.45, 0.2], scale: [1, 1.05, 1] }
          : { opacity: 0.2, scale: 1 }
      }
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: isInView ? 1 : 0,
      }}
    >
      {number}
    </motion.span>
  );
}

export function OurProcess() {
  return (
    <section
      id="process"
      className="relative bg-brand-cream bg-crosshatch py-20 md:py-28 wave-divider-bottom overflow-hidden"
    >
      {/* Background section number */}
      <span className="section-number" aria-hidden="true">
        04
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal>
            <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Our Process
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark text-elegant-shadow">
              How We Work
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mt-5">
              <GoldLine width={80} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-brand-body leading-relaxed mt-5 max-w-2xl mx-auto text-base md:text-lg">
              From your first consultation to the final resolution, we guide you
              through every step with clarity, commitment, and care.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Timeline connectors */}
          <AnimatedTimelineLine />
          <AnimatedVerticalLine />

          {/* Desktop: 4-column grid, Mobile: single column */}
          <StaggerContainer
            className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-5"
            staggerDelay={0.15}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={staggerChildVariants}
                  className="relative"
                >
                  <div className="card-glass rounded-xl p-6 pt-7 h-full relative group">
                    {/* Step number watermark */}
                    <div className="absolute -top-1 -left-1">
                      <StepNumber number={step.number} />
                    </div>

                    {/* Icon container */}
                    <div className="relative z-10 w-14 h-14 rounded-full border border-brand-gold/30 bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.75} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg font-bold text-brand-dark mb-3 relative z-10">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-brand-body text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>

                    {/* Hover gold accent border glow */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-brand-gold/25 transition-colors duration-400 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
