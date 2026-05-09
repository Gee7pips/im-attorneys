"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal, GoldLine } from "@/components/im/ScrollReveal";

const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function NewsletterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      toast({
        title: "Successfully Subscribed",
        description:
          "Thank you for subscribing. You will receive legal updates and insights from our team.",
        variant: "default",
      });

      reset();
    } catch {
      toast({
        title: "Subscription Failed",
        description:
          "We couldn't process your subscription. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden noise-overlay bg-radial-glow"
      style={{ backgroundColor: "#EEE8DC" }}
      aria-labelledby="newsletter-heading"
    >
      {/* ─── Decorative gold corner accents ─── */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
        <div className="absolute top-6 left-6 w-16 h-[2px] bg-gradient-to-r from-brand-gold to-transparent" />
        <div className="absolute top-6 left-6 w-[2px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
        <div className="absolute top-6 right-6 w-16 h-[2px] bg-gradient-to-l from-brand-gold to-transparent" />
        <div className="absolute top-6 right-6 w-[2px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none">
        <div className="absolute bottom-6 left-6 w-16 h-[2px] bg-gradient-to-r from-brand-gold to-transparent" />
        <div className="absolute bottom-6 left-6 w-[2px] h-16 bg-gradient-to-t from-brand-gold to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
        <div className="absolute bottom-6 right-6 w-16 h-[2px] bg-gradient-to-l from-brand-gold to-transparent" />
        <div className="absolute bottom-6 right-6 w-[2px] h-16 bg-gradient-to-t from-brand-gold to-transparent" />
      </div>

      {/* ─── Subtle gold gradient line at top ─── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      {/* ─── Content ─── */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/60 mb-6">
            <Mail className="w-6 h-6 text-brand-gold" strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <h2
            id="newsletter-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-brand-dark mb-3"
          >
            Stay Informed
          </h2>

          {/* Gold separator */}
          <div className="flex justify-center mb-4">
            <GoldLine width={48} />
          </div>

          {/* Subtext */}
          <p className="font-body text-brand-body text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8">
            Receive legal updates and insights from our team
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3 max-w-lg mx-auto"
            noValidate
          >
            {/* Email input */}
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-12 w-full border-brand-border/70 bg-white/70 font-body text-brand-dark placeholder:text-brand-muted/60 focus-visible:border-brand-gold focus-visible:ring-brand-gold/20 rounded-sm"
                {...register("email")}
                aria-label="Email address"
              />
              {errors.email && (
                <p className="absolute -bottom-5 left-0 font-body text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subscribe button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-6 sm:px-8 bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-body font-semibold text-sm rounded-sm transition-all duration-300 hover:shadow-[0_4px_16px_rgba(198,168,75,0.3)] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap hover-ripple"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="ml-1.5">Subscribing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span className="ml-1.5">Subscribe</span>
                </>
              )}
            </Button>
          </form>

          {/* POPIA notice */}
          <p className="mt-6 font-body text-xs text-brand-muted leading-relaxed max-w-md mx-auto">
            We respect your privacy. You may unsubscribe at any time. Your data
            is handled in compliance with the Protection of Personal Information
            Act (POPIA).
          </p>
        </ScrollReveal>
      </div>

      {/* ─── Subtle gold gradient line at bottom ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
    </section>
  );
}
