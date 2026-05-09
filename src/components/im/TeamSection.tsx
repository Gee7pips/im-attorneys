"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import {
  ScrollReveal,
  GoldLine,
  StaggerContainer,
  staggerChildVariants,
} from "./ScrollReveal";

interface TeamMember {
  name: string;
  title: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  badge?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ingrid Mtsweni",
    title: "Founder & Director",
    email: "attorneys@iminc.co.za",
    phone: "081 248 8048",
    image:
      "https://img1.wsimg.com/isteam/ip/53d9d56f-19db-4b48-b7c6-ba9bb2b6070c/Content-Creator-Project.png",
    bio: "Ingrid acquired her LLB degree from the University of Johannesburg in 2018. After completing her articles and being admitted as an Attorney, she was appointed to join the legal department of one of South Africa\u2019s leading banking institutions. During that time, she gained a vast wealth of valuable experience and expanded her skills across different areas of law \u2014 which subsequently led her to found IM Attorneys Inc.",
    badge: "Founder",
  },
  {
    name: "Katlego Seitisho",
    title: "Litigation Attorney",
    email: "katlego@iminc.co.za",
    phone: "071 234 1767",
    image:
      "https://img1.wsimg.com/isteam/ip/53d9d56f-19db-4b48-b7c6-ba9bb2b6070c/IMG_0047.JPG",
    bio: "Katlego is a skilled litigation attorney with a focus on delivering strategic and effective legal solutions. With extensive courtroom experience, Katlego represents clients in civil and commercial disputes, ensuring the best possible outcomes through meticulous preparation and aggressive advocacy.",
  },
  {
    name: "Mmabatho Moncha",
    title: "Legal Secretary",
    email: "info@iminc.co.za",
    phone: "064 510 9707",
    image:
      "https://img1.wsimg.com/isteam/ip/53d9d56f-19db-4b48-b7c6-ba9bb2b6070c/FCA82DF0-0325-4635-AA2D-DA83D31697D0.PNG",
    bio: "Mmabatho is the backbone of the firm\u2019s administrative operations. With exceptional organisational skills and a warm, professional demeanour, she ensures every client interaction is seamless and that the firm runs efficiently behind the scenes.",
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.article
      variants={staggerChildVariants}
      className="group relative bg-white rounded-xl shadow-sm border border-brand-border/60 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-shadow/20 hover:border-brand-gold/30"
    >
      {/* Subtle top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/0 to-transparent group-hover:via-brand-gold/60 transition-all duration-500" />

      <div className="p-6 sm:p-8 flex flex-col items-center text-center">
        {/* Portrait */}
        <div className="relative mb-6">
          {/* Outer glow ring on hover */}
          <div className="absolute -inset-1 rounded-full bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-all duration-500" />

          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-brand-gold p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-brand-parchment">
              <Image
                src={member.image}
                alt={`${member.name} \u2014 ${member.title}`}
                width={144}
                height={144}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                unoptimized
                loading="lazy"
              />
            </div>
          </div>

          {/* Optional badge */}
          {member.badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold text-white font-body text-[10px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm">
                {member.badge}
              </span>
            </motion.div>
          )}
        </div>

        {/* Name */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-dark leading-tight">
          {member.name}
        </h3>

        {/* Title */}
        <p className="mt-2 font-body text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-brand-gold">
          {member.title}
        </p>

        {/* Divider */}
        <div className="my-5 w-10 h-px bg-brand-gold/40 group-hover:w-16 transition-all duration-500" />

        {/* Bio */}
        <p className="font-body text-sm text-brand-body leading-relaxed font-light">
          {member.bio}
        </p>

        {/* Contact row */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={`mailto:${member.email}`}
            aria-label={`Email ${member.name}`}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-cream border border-brand-border/60 text-brand-muted hover:text-brand-gold hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${member.phone.replace(/\s/g, "")}`}
            aria-label={`Call ${member.name}`}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-cream border border-brand-border/60 text-brand-muted hover:text-brand-gold hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative w-full bg-brand-cream overflow-hidden"
      aria-label="Our team"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <circle cx="0" cy="0" r="300" fill="#C6A84B" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <circle cx="400" cy="400" r="400" fill="#0D1B2A" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <ScrollReveal delay={0}>
            <span className="font-body text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-brand-gold">
              Our Team
            </span>
          </ScrollReveal>

          <div className="mt-4 flex justify-center">
            <GoldLine width={50} />
          </div>

          <ScrollReveal delay={0.15}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mt-6">
              The People Behind
              <br className="hidden sm:block" /> IM Attorneys
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="font-body text-sm sm:text-base text-brand-body leading-relaxed mt-5">
              Led by founder Ingrid Mtsweni, our dedicated team brings expertise,
              passion, and a commitment to Ubuntu in every matter.
            </p>
          </ScrollReveal>
        </div>

        {/* Team grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          staggerDelay={0.15}
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 sm:mt-20 text-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2.5 font-body text-sm font-semibold text-brand-gold hover:text-brand-dark transition-colors duration-300"
            >
              <span className="border-b border-current pb-0.5">
                Get in Touch with Our Team
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
