"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  staggerChildVariants,
  GoldLine,
} from "@/components/im/ScrollReveal";

const articles = [
  {
    category: "Family Law",
    title: "Understanding Ante-Nuptial Contracts in South Africa",
    excerpt:
      "A comprehensive guide to ANC contracts — in community vs out of community of property, and how the Matrimonial Property Act protects your assets.",
    date: "15 April 2025",
    readTime: "5 min read",
    image: "/images/hero-building.png",
  },
  {
    category: "Criminal Law",
    title: "Your Rights When Arrested: A Practical Guide",
    excerpt:
      "Knowing your constitutional rights during an arrest can protect you from self-incrimination and ensure fair treatment throughout the legal process.",
    date: "2 April 2025",
    readTime: "4 min read",
    image: "/images/parallax-city.png",
  },
  {
    category: "RAF Claims",
    title: "How to File a Road Accident Fund Claim Successfully",
    excerpt:
      "Step-by-step instructions for filing a RAF claim, including required documentation, deadlines, and common pitfalls to avoid.",
    date: "20 March 2025",
    readTime: "6 min read",
    image: "/images/hero-building.png",
  },
];

export function LegalInsights() {
  return (
    <section
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "#F9F8F5" }}
      aria-labelledby="legal-insights-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <ScrollReveal direction="up" delay={0}>
            <span
              className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#C6A84B" }}
            >
              Knowledge Centre
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2
              id="legal-insights-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#0D1B2A" }}
            >
              Legal Insights
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <div className="mt-5 flex justify-center">
              <GoldLine width={60} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p
              className="mt-5 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#3A4A5C" }}
            >
              Expert perspectives on South African law
            </p>
          </ScrollReveal>
        </div>

        {/* Article Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          staggerDelay={0.12}
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              className="group relative bg-white rounded-sm overflow-hidden card-hover-lift gold-border-reveal cursor-pointer"
              variants={staggerChildVariants}
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Subtle dark overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span
                  className="inline-block font-body text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-sm mb-4"
                  style={{
                    backgroundColor: "#C6A84B",
                    color: "#0D1B2A",
                  }}
                >
                  {article.category}
                </span>

                {/* Title */}
                <h3
                  className="font-display text-lg sm:text-xl font-bold leading-snug mb-3 transition-colors duration-300 group-hover:text-brand-gold"
                  style={{ color: "#0D1B2A" }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="font-body text-sm leading-relaxed line-clamp-2"
                  style={{ color: "#5A6A7C" }}
                >
                  {article.excerpt}
                </p>

                {/* Footer: Date + Read Time */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-brand-border/40">
                  <span
                    className="font-body text-xs"
                    style={{ color: "#7A8A9C" }}
                  >
                    {article.date}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 font-body text-xs"
                    style={{ color: "#7A8A9C" }}
                  >
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-12 sm:mt-16 text-center">
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 border-2 font-body font-semibold text-sm rounded-sm transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: "#0D1B2A",
                color: "#0D1B2A",
              }}
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
