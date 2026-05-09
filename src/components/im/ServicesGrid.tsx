"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Shield,
  FileText,
  Gavel,
  Building2,
  ArrowRight,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
} from "@/components/im/ScrollReveal";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  colSpan?: number;
}

const services: Service[] = [
  {
    title: "Family Law",
    description:
      "Divorce, custody, ANCs, protection orders — handled with care and expertise.",
    icon: Scale,
    colSpan: 2,
  },
  {
    title: "Wills & Estates",
    description:
      "Protect your legacy. We ensure your assets are preserved and intentionally transferred.",
    icon: FileText,
  },
  {
    title: "Claims Against the State",
    description:
      "RAF claims, wrongful arrests, medical malpractice — we hold the state accountable.",
    icon: Shield,
  },
  {
    title: "Criminal Law",
    description:
      "Bail available 24/7. Expert defence across all criminal matters.",
    icon: Gavel,
  },
  {
    title: "Commercial Law",
    description:
      "Contracts, M&A, corporate governance — legal solutions that make business sense.",
    icon: Building2,
    colSpan: 2,
  },
  {
    title: "General Litigation",
    description:
      "Evictions, debt collection, debt review removal — we litigate what others avoid.",
    icon: Scale,
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.div
      className={`group relative bg-white rounded-sm overflow-hidden cursor-pointer ${
        service.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
      }`}
      variants={staggerChildVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Hover gold left border */}
      <motion.div
        className="absolute top-0 left-0 w-0 h-full bg-brand-gold z-10"
        whileHover={{ width: "3px" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Subtle shadow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg shadow-brand-shadow" />

      <div className="relative p-6 sm:p-8">
        {/* Icon */}
        <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-sm bg-brand-cream">
          <Icon
            className="w-5 h-5 text-brand-gold transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}
        <h3 className="font-body text-lg font-semibold mb-2" style={{ color: "#0D1B2A" }}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm leading-relaxed" style={{ color: "#3A4A5C" }}>
          {service.description}
        </p>

        {/* Gold Arrow CTA */}
        <div className="mt-5 flex items-center gap-1.5">
          <span className="font-body text-xs font-semibold tracking-wider uppercase text-brand-gold">
            Learn More
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-gold transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 lg:py-36 bg-brand-cream"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <ScrollReveal direction="up" delay={0}>
            <span
              className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#C6A84B" }}
            >
              Our Practice
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto"
              style={{ color: "#0D1B2A" }}
            >
              Every Legal Matter, Handled with Precision.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-6 flex justify-center">
              <div className="h-0.5 w-12 bg-brand-gold" />
            </div>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          staggerDelay={0.08}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-14 sm:mt-16 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-brand-dark text-brand-inverse font-body font-semibold text-sm rounded-sm transition-all duration-300 hover:bg-brand-navy hover:shadow-lg hover:shadow-brand-shadow"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Discuss Your Case</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
