"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/270812488048"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 no-underline"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2,
      }}
      whileHover="hover"
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Icon container */}
      <span className="relative flex items-center justify-center w-14 h-14 shrink-0">
        <MessageCircle className="w-7 h-7 fill-white" />
      </span>

      {/* Label pill — visible on hover (desktop) or always on mobile */}
      <motion.span
        className="hidden sm:block relative font-body font-semibold text-sm tracking-wide whitespace-nowrap pr-5 pl-0 overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        variants={{
          hover: {
            width: "auto",
            opacity: 1,
            transition: {
              width: { duration: 0.25, ease: "easeOut" },
              opacity: { duration: 0.2, delay: 0.1 },
            },
          },
        }}
      >
        Chat with Us on WhatsApp
      </motion.span>

      {/* Mobile label — always visible */}
      <span className="sm:hidden relative font-body font-semibold text-sm tracking-wide whitespace-nowrap pr-5">
        Chat with Us
      </span>
    </motion.a>
  );
}
