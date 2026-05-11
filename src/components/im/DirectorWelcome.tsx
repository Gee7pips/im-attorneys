"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, staggerChildVariants } from "@/components/im/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function DirectorWelcome() {
  const handleBookConsultation = () => {
    const consultationSection = document.getElementById("consultation");
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-brand-cream dark:bg-brand-navy/40 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Logo & Greeting */}
          <motion.div variants={staggerChildVariants} className="flex flex-col items-center lg:items-start">
            <ScrollReveal>
              <motion.div 
                className="mb-8 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/im-attorneys-logo.png"
                  alt="IM Attorneys - Ingrid Misweni Attorneys Incorporated"
                  width={320}
                  height={220}
                  priority
                  className="w-full max-w-xs lg:max-w-sm h-auto drop-shadow-lg"
                />
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-center lg:text-left">
                <div className="ornament-line mb-4 mx-auto lg:mx-0 max-w-[80px]" />
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark dark:text-brand-inverse mb-2">
                  Welcome to IM Attorneys
                </h2>
                <p className="font-body text-sm text-brand-muted dark:text-brand-muted/90 leading-relaxed">
                  Excellence in Legal Practice Since Inception
                </p>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Right Column: Director Message */}
          <motion.div variants={staggerChildVariants} className="flex flex-col justify-center">
            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                <div>
                  <p className="font-body font-semibold text-sm tracking-[0.15em] uppercase text-brand-gold mb-4">
                    A Message from Our Director
                  </p>
                  <div className="ornament-line max-w-[60px]" />
                </div>

                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="font-display text-2xl sm:text-3xl font-bold text-brand-dark dark:text-brand-inverse leading-tight">
                    Dedication to Your Legal Excellence
                  </p>
                  
                  <p className="font-body text-sm sm:text-base text-brand-body dark:text-brand-muted leading-relaxed">
                    At IM Attorneys, we believe that exceptional legal representation begins with a deep commitment to understanding our clients' needs and delivering tailored solutions. Under the strategic direction of Ingrid Misweni, our firm has built a reputation for unwavering professionalism, meticulous attention to detail, and results-driven advocacy across all practice areas.
                  </p>

                  <p className="font-body text-sm sm:text-base text-brand-body dark:text-brand-muted leading-relaxed">
                    Our team comprises highly skilled attorneys with extensive experience in corporate law, commercial disputes, and specialized legal matters. We pride ourselves on maintaining the highest ethical standards while providing practical, cost-effective solutions that advance our clients' interests and aspirations.
                  </p>

                  <p className="font-body text-sm sm:text-base text-brand-body dark:text-brand-muted leading-relaxed">
                    We warmly invite you to experience the IM Attorneys difference. Whether you require strategic legal counsel or representation in complex matters, we are committed to being your trusted legal partner.
                  </p>
                </motion.div>

                {/* Director Signature */}
                <motion.div 
                  className="pt-4 border-t border-brand-gold/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="font-display text-lg font-bold text-brand-dark dark:text-brand-inverse mb-1">
                    Ingrid Misweni
                  </p>
                  <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-gold">
                    Director & Founder
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleBookConsultation}
                  className="btn-premium mt-6 self-start lg:self-start"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    Schedule a Consultation <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>
            </ScrollReveal>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
