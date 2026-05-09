"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "im-attorneys-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay so the page loads before showing the banner
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ accepted: true, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ accepted: false, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="glass-dark mx-auto max-w-4xl rounded-2xl border border-brand-gold/20 p-5 sm:p-6 shadow-2xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              {/* Icon */}
              <div className="hidden shrink-0 sm:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10">
                  <Cookie className="h-5 w-5 text-brand-gold" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-brand-inverse/90">
                  We use cookies to improve your experience. By continuing to
                  browse, you agree to our use of cookies in accordance with{" "}
                  <span className="font-semibold text-brand-gold">
                    POPIA
                  </span>{" "}
                  regulations.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:gap-3">
                <button
                  onClick={handleAccept}
                  className="cursor-pointer rounded-lg bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-dark transition-all duration-300 hover:bg-brand-gold-light hover:shadow-lg"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="cursor-pointer rounded-lg border border-brand-gold/30 px-5 py-2.5 text-sm font-medium text-brand-inverse/70 transition-all duration-300 hover:border-brand-gold/60 hover:text-brand-gold"
                >
                  Decline Non-Essential
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
