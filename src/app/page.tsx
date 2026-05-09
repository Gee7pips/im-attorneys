"use client";

import { BannerProvider } from "@/components/im/BannerContext";
import { ScrollProgress } from "@/components/im/ScrollProgress";
import { LoadingScreen } from "@/components/im/LoadingScreen";
import { OnboardingBanner } from "@/components/im/OnboardingBanner";
import { Navigation } from "@/components/im/Navigation";
import { Hero } from "@/components/im/Hero";
import { StatsBar } from "@/components/im/StatsBar";
import { TheFirm } from "@/components/im/TheFirm";
import { ServicesGrid } from "@/components/im/ServicesGrid";
import { EmergencyCTA } from "@/components/im/EmergencyCTA";
import { Founder } from "@/components/im/Founder";
import { TeamSection } from "@/components/im/TeamSection";
import { VacationProgramme } from "@/components/im/VacationProgramme";
import { ParallaxQuote } from "@/components/im/ParallaxQuote";
import { Testimonials } from "@/components/im/Testimonials";
import { FAQSection } from "@/components/im/FAQSection";
import { LegalInsights } from "@/components/im/LegalInsights";
import { ContactForm } from "@/components/im/ContactForm";
import { LocationMap } from "@/components/im/LocationMap";
import { Footer } from "@/components/im/Footer";
import { WhatsAppButton } from "@/components/im/WhatsAppButton";
import { BackToTop } from "@/components/im/BackToTop";
import { NewsletterSection } from "@/components/im/NewsletterSection";
import { CookieConsent } from "@/components/im/CookieConsent";
import { TrustBadges } from "@/components/im/TrustBadges";
import { TrackRecord } from "@/components/im/TrackRecord";
import { QuickConsultation } from "@/components/im/QuickConsultation";
import { OurProcess } from "@/components/im/OurProcess";
import { CursorGlow } from "@/components/im/CursorGlow";
import { PageTransition } from "@/components/im/PageTransition";

export default function Home() {
  return (
    <BannerProvider>
      <CursorGlow />
      <ScrollProgress />
      <LoadingScreen />
      <OnboardingBanner />
      <Navigation />

      <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Stats Bar */}
        <StatsBar />

        {/* Trust & Certifications */}
        <TrustBadges />

        {/* About / The Firm Section */}
        <section id="about">
          <TheFirm />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesGrid />
        </section>

        {/* Our Process */}
        <OurProcess />

        {/* 24/7 Emergency CTA */}
        <EmergencyCTA />

        {/* Founder Spotlight */}
        <Founder />

        {/* Team Section */}
        <section id="team">
          <TeamSection />
        </section>

        {/* Vacation Programme */}
        <VacationProgramme />

        {/* Parallax Quote */}
        <ParallaxQuote />

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Track Record */}
        <TrackRecord />

        {/* Legal Insights */}
        <LegalInsights />

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* Contact Section */}
        <ContactForm />

        {/* Location & Map */}
        <LocationMap />

        {/* Newsletter */}
        <NewsletterSection />
      </main>
      </PageTransition>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <QuickConsultation />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </BannerProvider>
  );
}
