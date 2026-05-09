"use client";

import { BannerProvider } from "@/components/im/BannerContext";
import { LoadingScreen } from "@/components/im/LoadingScreen";
import { OnboardingBanner } from "@/components/im/OnboardingBanner";
import { Navigation } from "@/components/im/Navigation";
import { Hero } from "@/components/im/Hero";
import { StatsBar } from "@/components/im/StatsBar";
import { TheFirm } from "@/components/im/TheFirm";
import { ServicesGrid } from "@/components/im/ServicesGrid";
import { EmergencyCTA } from "@/components/im/EmergencyCTA";
import { Founder } from "@/components/im/Founder";
import { ParallaxQuote } from "@/components/im/ParallaxQuote";
import { Testimonials } from "@/components/im/Testimonials";
import { ContactForm } from "@/components/im/ContactForm";
import { LocationMap } from "@/components/im/LocationMap";
import { Footer } from "@/components/im/Footer";
import { WhatsAppButton } from "@/components/im/WhatsAppButton";

export default function Home() {
  return (
    <BannerProvider>
      <LoadingScreen />
      <OnboardingBanner />
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Stats Bar */}
        <StatsBar />

        {/* About / The Firm Section */}
        <section id="about">
          <TheFirm />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesGrid />
        </section>

        {/* 24/7 Emergency CTA */}
        <EmergencyCTA />

        {/* Founder Section */}
        <section id="team">
          <Founder />
        </section>

        {/* Parallax Quote */}
        <ParallaxQuote />

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Contact Section */}
        <ContactForm />

        {/* Location & Map */}
        <LocationMap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </BannerProvider>
  );
}
