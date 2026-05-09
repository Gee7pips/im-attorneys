"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  TrendingUp,
  Clock,
  Shield,
  Eye,
  CreditCard,
  Receipt,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
} from "@/components/im/ScrollReveal";

interface PricingCard {
  title: string;
  icon: React.ElementType;
  value: string;
  description: string;
  bullets: string[];
}

const pricingCards: PricingCard[] = [
  {
    title: "Initial Consultation",
    icon: MessageSquare,
    value: "Complimentary",
    description:
      "Your first 30-minute consultation is free. We'll assess your matter and provide preliminary guidance.",
    bullets: [
      "30 minutes",
      "No obligation",
      "Preliminary legal assessment",
      "Clear next steps",
    ],
  },
  {
    title: "Contingency Fees",
    icon: TrendingUp,
    value: "No Win, No Fee",
    description:
      "For certain personal injury and RAF claims, we work on contingency — you only pay if we win your case.",
    bullets: [
      "RAF claims",
      "Personal injury",
      "No upfront costs",
      "Percentage of settlement",
    ],
  },
  {
    title: "Hourly Billing",
    icon: Clock,
    value: "Competitive Rates",
    description:
      "For litigation and commercial matters, we offer competitive hourly rates with detailed monthly statements.",
    bullets: [
      "Detailed invoices",
      "Monthly statements",
      "No hidden charges",
      "Rate agreed upfront",
    ],
  },
];

const trustItems = [
  { icon: Shield, label: "Free Assessment" },
  { icon: Eye, label: "No Hidden Fees" },
  { icon: CreditCard, label: "Flexible Payment" },
  { icon: Receipt, label: "Detailed Invoicing" },
];

function PricingCardComponent({ card }: { card: PricingCard }) {
  const Icon = card.icon;

  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      variants={staggerChildVariants}
    >
      {/* Gold icon container */}
      <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-gold/10">
        <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.8} />
      </div>

      {/* Value / Price */}
      <p className="text-brand-gold font-bold text-lg mb-1">{card.value}</p>

      {/* Title */}
      <h3 className="font-display text-xl mb-3" style={{ color: "#0D1B2A" }}>
        {card.title}
      </h3>

      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed mb-5"
        style={{ color: "#3A4A5C" }}
      >
        {card.description}
      </p>

      {/* Bullet list */}
      <ul className="space-y-2.5">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5">
            <CheckCircle
              className="w-4 h-4 text-brand-gold mt-0.5 shrink-0"
              strokeWidth={1.8}
            />
            <span
              className="font-body text-sm"
              style={{ color: "#3A4A5C" }}
            >
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function FeesAndBilling() {
  return (
    <section
      id="fees"
      className="relative py-20 sm:py-28 lg:py-36 bg-white corner-gold-tl corner-gold-br"
      aria-labelledby="fees-heading"
    >
      {/* Section number watermark */}
      <span className="section-number" aria-hidden="true">
        06
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading Area ── */}
        <div className="text-center mb-14 sm:mb-16">
          <ScrollReveal direction="up" delay={0}>
            <h2
              id="fees-heading"
              className="font-display text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: "#0D1B2A" }}
            >
              Transparent Pricing
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="divider-gold-fancy" />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p
              className="mt-4 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#3A4A5C" }}
            >
              We believe in upfront, honest communication about legal fees. No
              hidden costs, no surprises.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Fee Philosophy Statement ── */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-14 sm:mb-16 max-w-3xl mx-auto text-center">
            <blockquote>
              <p
                className="font-display text-xl sm:text-2xl md:text-3xl italic leading-snug"
                style={{ color: "#0D1B2A" }}
              >
                &ldquo;Your first consultation is always complimentary — because
                understanding your legal position should never come at a
                cost.&rdquo;
              </p>
              <footer className="mt-4">
                <cite className="font-body text-sm font-semibold not-italic text-brand-gold tracking-wide">
                  — Ingrid Mtsweni, Founding Attorney
                </cite>
              </footer>
            </blockquote>
          </div>
        </ScrollReveal>

        {/* ── 3 Pricing Approach Cards ── */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.12}
        >
          {pricingCards.map((card) => (
            <PricingCardComponent key={card.title} card={card} />
          ))}
        </StaggerContainer>

        {/* ── Trust Bar ── */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              const showDivider = index < trustItems.length - 1;

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 ${
                    showDivider
                      ? "sm:after:content-[''] sm:after:block sm:after:w-px sm:after:h-6 sm:after:bg-brand-gold/25 sm:after:ml-6 sm:after:mr-0 sm:gap-3"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gold/10">
                    <Icon
                      className="w-5 h-5 text-brand-gold"
                      strokeWidth={1.8}
                    />
                  </div>
                  <span
                    className="font-body text-sm font-semibold whitespace-nowrap"
                    style={{ color: "#0D1B2A" }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── CTA Section ── */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-14 sm:mt-16 text-center max-w-xl mx-auto">
            <h3
              className="font-display text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: "#0D1B2A" }}
            >
              Discuss Your Legal Costs
            </h3>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "#3A4A5C" }}
            >
              Contact us for a personalised fee estimate tailored to your
              specific legal matter.
            </p>
            <a
              href="#contact"
              className="btn-premium"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Request a Fee Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
