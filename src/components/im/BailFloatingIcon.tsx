"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Phone } from "lucide-react";

export function BailFloatingIcon() {
  return (
    <motion.a
      href="tel:+27812488048"
      aria-label="24/7 Bail Application — Call Now"
      className="fixed left-4 sm:left-6 bottom-[50%] -translate-y-1/2 z-[55] flex flex-col items-center gap-2 group no-underline"
      initial={{ opacity: 0, x: -60, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 2.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Outer glow ring - expanding pulse */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <span
          className="absolute inset-0 rounded-full border-2 border-red-500/40"
          style={{ animation: "ringExpand 3s ease-out infinite" }}
        />
        <span
          className="absolute inset-0 rounded-full border-2 border-brand-gold/30"
          style={{ animation: "ringExpand 3s ease-out infinite 1.5s" }}
        />
      </div>

      {/* Main icon container — 3D glass card */}
      <motion.div
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center cursor-pointer"
        style={{
          perspective: "800px",
        }}
        animate={{
          y: [0, -10, -4, -12, 0],
          rotateX: [0, 3, -2, 2, 0],
          rotateY: [0, -3, 2, -2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.12,
          rotateX: 0,
          rotateY: 0,
          y: -4,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glass background */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(220,38,38,0.85) 0%, rgba(198,168,75,0.7) 50%, rgba(220,38,38,0.85) 100%)",
            backdropFilter: "blur(20px) saturate(1.8)",
            WebkitBackdropFilter: "blur(20px) saturate(1.8)",
            border: "1px solid rgba(198,168,75,0.5)",
            boxShadow: `
              0 10px 40px rgba(220,38,38,0.35),
              0 4px 16px rgba(198,168,75,0.3),
              0 0 60px rgba(198,168,75,0.1),
              inset 0 1px 0 rgba(255,255,255,0.4),
              inset 0 -1px 0 rgba(0,0,0,0.2)
            `,
          }}
        />

        {/* Glossy shine overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%)",
          }}
        />

        {/* Animated shine sweep */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        >
          <motion.div
            className="absolute -inset-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 55%, transparent 100%)",
              transform: "skewX(-20deg)",
            }}
            animate={{ left: ["-100%", "200%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Icon content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" strokeWidth={2} />
          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 absolute -bottom-0.5 -right-0.5 drop-shadow" strokeWidth={2.5} />
        </div>
      </motion.div>

      {/* Label tooltip */}
      <motion.div
        className="glass-glossy rounded-lg px-2.5 py-1.5 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8, y: 4 }}
        animate={{ opacity: 0, scale: 0.8, y: 4 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 3.5 }}
        style={{ marginBottom: "-4px" }}
      >
        <span className="font-body text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-dark whitespace-nowrap flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          24/7 Bail
        </span>
      </motion.div>
    </motion.a>
  );
}
