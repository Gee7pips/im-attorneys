"use client";

import { useState, useCallback } from "react";
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Family Law",
  "Wills & Estates",
  "Criminal Law",
  "Commercial Law",
  "Claims vs State",
  "Litigation",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/mtsweniinc",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/IMAttorneysInc",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/im-attorneys-inc",
    icon: Linkedin,
  },
];

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="bg-brand-dark text-brand-inverse text-premium-body wave-divider-top">
      {/* Decorative top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="inline-flex items-center gap-3 group mb-6"
            >
              <div className="w-14 h-14 rounded-full border-2 border-brand-gold flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-300">
                <span className="font-display font-bold text-brand-gold text-2xl tracking-wide">
                  IM
                </span>
              </div>
              <div>
                <span className="font-body font-semibold text-brand-inverse text-sm tracking-[0.15em] uppercase block">
                  IM Attorneys
                </span>
                <span className="font-body text-brand-gold text-xs tracking-wider">
                  Inc.
                </span>
              </div>
            </a>
            <p className="font-body text-brand-muted text-sm leading-relaxed max-w-xs">
              Legal service curated for your personal and business needs
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  onMouseEnter={() => setHoveredSocial(social.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    hoveredSocial === social.label
                      ? "border-brand-gold bg-brand-gold/15 text-brand-gold"
                      : "border-brand-navy-light bg-brand-navy/40 text-brand-muted hover:border-brand-gold/50 hover:text-brand-gold/80"
                  }`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-xs tracking-[0.2em] uppercase text-brand-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="font-body text-sm text-brand-muted hover:text-brand-gold transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-body font-semibold text-xs tracking-[0.2em] uppercase text-brand-gold mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "#services")}
                    className="font-body text-sm text-brand-muted hover:text-brand-gold transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-body font-semibold text-xs tracking-[0.2em] uppercase text-brand-gold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+27812488048"
                  className="inline-flex items-start gap-3 text-sm text-brand-muted hover:text-brand-gold transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-brand-gold/60 group-hover:text-brand-gold transition-colors shrink-0" />
                  <span className="font-body">081 248 8048</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:attorneys@iminc.co.za"
                  className="inline-flex items-start gap-3 text-sm text-brand-muted hover:text-brand-gold transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-brand-gold/60 group-hover:text-brand-gold transition-colors shrink-0" />
                  <span className="font-body">attorneys@iminc.co.za</span>
                </a>
              </li>
              <li>
                <div className="inline-flex items-start gap-3 text-sm text-brand-muted">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-gold/60 shrink-0" />
                  <span className="font-body leading-relaxed">
                    Pegasus Building, 210 Amarand Ave,
                    <br />
                    Menlyn Maine, Pretoria
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            {/* Copyright */}
            <p className="font-body text-xs text-brand-muted/70">
              &copy; 2026 IM Attorneys Inc. All Rights Reserved.
            </p>

            {/* Regulatory Compliance — SA Law Requirements */}
            <p className="font-body text-xs text-brand-muted/50 max-w-lg text-center">
              Registered with the Legal Practice Council of South Africa &middot; 
              Compliant with the Protection of Personal Information Act (POPIA), 2013
            </p>

            {/* Social Icons (Desktop Bottom) */}
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-brand-muted/40 hover:text-brand-gold/70 transition-colors duration-200"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
