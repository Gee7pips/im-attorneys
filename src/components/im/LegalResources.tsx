"use client";

import { motion } from "framer-motion";
import {
  FileIcon,
  ClipboardCheck,
  Shield,
  FileText,
  Briefcase,
  Scale,
  Download,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
  GoldLine,
} from "@/components/im/ScrollReveal";

const resources = [
  {
    title: "Divorce Guide",
    icon: FileIcon,
    description:
      "Step-by-step guide to the divorce process in South Africa, including documents needed and timelines.",
  },
  {
    title: "RAF Claim Checklist",
    icon: ClipboardCheck,
    description:
      "Complete checklist for Road Accident Fund claims including required documentation and deadlines.",
  },
  {
    title: "Bail Application Guide",
    icon: Shield,
    description:
      "Understanding your rights and the bail application process, from arrest to court appearance.",
  },
  {
    title: "Estate Planning Checklist",
    icon: FileText,
    description:
      "Essential checklist for drafting your will and planning your estate, including executor appointment.",
  },
  {
    title: "Commercial Contract Basics",
    icon: Briefcase,
    description:
      "Key elements every business owner should know before signing commercial agreements.",
  },
  {
    title: "Know Your Rights",
    icon: Scale,
    description:
      "A comprehensive guide to your constitutional rights when dealing with law enforcement.",
  },
];

export function LegalResources() {
  return (
    <section
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-brand-parchment"
      aria-labelledby="legal-resources-heading"
    >
      {/* Subtle gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <ScrollReveal direction="up" delay={0}>
            <h2
              id="legal-resources-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#0D1B2A" }}
            >
              Legal Resources
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="mt-5 flex justify-center">
              <GoldLine width={60} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-5 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              Free guides and checklists to help you navigate common legal
              matters
            </p>
          </ScrollReveal>
        </div>

        {/* Resource Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          staggerDelay={0.1}
        >
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                variants={staggerChildVariants}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold mb-3 text-brand-dark">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {resource.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-border/30">
                  <span className="text-xs text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full font-semibold">
                    PDF Guide
                  </span>
                  <button
                    type="button"
                    className="text-sm text-brand-gold hover:underline flex items-center gap-1 transition-colors duration-200"
                    aria-label={`Download ${resource.title}`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="mt-12 sm:mt-16 text-center font-body text-sm text-muted-foreground">
            Need a resource not listed here?{" "}
            <a
              href="#contact"
              className="text-brand-gold hover:underline underline-offset-4 transition-colors duration-200 font-semibold"
            >
              Contact us
            </a>{" "}
            and we&apos;ll gladly assist.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
