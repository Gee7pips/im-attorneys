"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal, GoldLine } from "@/components/im/ScrollReveal";

export function TheFirm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "#F9F8F5" }}
      aria-labelledby="the-firm-heading"
    >
      {/* Gold horizontal rule above section */}
      <div className="flex justify-center mb-16 sm:mb-20">
        <GoldLine width={60} />
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column — Pull Quote */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-start lg:pt-8">
            <ScrollReveal direction="left" delay={0.1} duration={0.8}>
              <div className="relative max-w-md">
                {/* Decorative gold quotation mark */}
                <motion.span
                  className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 font-display text-brand-gold text-7xl sm:text-8xl lg:text-9xl leading-none select-none"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  &ldquo;
                </motion.span>

                <blockquote className="relative z-10 pl-6 sm:pl-10">
                  <p
                    className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium italic leading-snug sm:leading-snug"
                    style={{ color: "#C6A84B" }}
                  >
                    I Am Attorneys. We wear the law on our sleeve.
                  </p>
                </blockquote>

                {/* Thin gold accent line below quote */}
                <motion.div
                  className="h-0.5 bg-brand-gold mt-6 ml-6 sm:ml-10"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "80px" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                />

                <motion.p
                  className="mt-4 ml-6 sm:ml-10 font-body text-sm tracking-widest uppercase"
                  style={{ color: "#7A8A9C" }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Ingrid Mtsweni, Founder
                </motion.p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Firm Description */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.2} duration={0.8}>
              <div className="space-y-5 sm:space-y-6 max-w-2xl">
                <p className="font-body text-base sm:text-lg leading-relaxed" style={{ color: "#3A4A5C" }}>
                  IM Attorneys Inc is a proudly South African, 100% female black-owned boutique law firm.
                  Founded by Ingrid Mtsweni, the firm combines deep banking-sector legal experience with a
                  commitment to Ubuntu — bringing personalised, innovative solutions to every client.
                </p>

                <p className="font-body text-base sm:text-lg leading-relaxed" style={{ color: "#3A4A5C" }}>
                  We are not a large, impersonal firm. We are a curated team that knows your name,
                  understands your circumstances, and delivers strategic legal outcomes.
                </p>

                <p className="font-body text-base sm:text-lg leading-relaxed" style={{ color: "#3A4A5C" }}>
                  Based in Pretoria&apos;s prestigious Menlyn Maine Precinct, we serve clients across Gauteng and
                  beyond — blending big-firm expertise with the dedication and personal touch only a
                  boutique practice can offer.
                </p>

                {/* CTA Link */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <a
                    href="#about"
                    className="group inline-flex items-center gap-2 font-body font-semibold text-sm tracking-wide transition-colors duration-300"
                    style={{ color: "#C6A84B" }}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector("#about");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="relative">
                      Read Our Story
                      <motion.span
                        className="absolute bottom-0 left-0 h-px bg-brand-gold"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="absolute bottom-0 left-0 h-px bg-brand-gold group-hover:w-full transition-all duration-300" style={{ width: "0%" }} />
                    </span>
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      &rarr;
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
