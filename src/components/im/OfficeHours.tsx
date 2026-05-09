"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, AlertTriangle } from "lucide-react";
import { ScrollReveal, GoldLine } from "@/components/im/ScrollReveal";

// ── Schedule definition ──────────────────────────────────────────────
type DaySchedule = {
  label: string;
  short: string;
  open: number; // hour (24h)
  close: number;
  closed: boolean;
};

const WEEK: DaySchedule[] = [
  { label: "Monday", short: "Mon", open: 8, close: 17, closed: false },
  { label: "Tuesday", short: "Tue", open: 8, close: 17, closed: false },
  { label: "Wednesday", short: "Wed", open: 8, close: 17, closed: false },
  { label: "Thursday", short: "Thu", open: 8, close: 17, closed: false },
  { label: "Friday", short: "Fri", open: 8, close: 17, closed: false },
  { label: "Saturday", short: "Sat", open: 9, close: 13, closed: false },
  { label: "Sunday", short: "Sun", open: 0, close: 0, closed: true },
];

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function getSASTNow(): { day: number; hour: number; minute: number; formatted: string } {
  const now = new Date();

  const day = parseInt(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Johannesburg",
      weekday: "numeric",
      calendar: "iso8601",
    }).format(now),
    10,
  );

  // iso8601 weekday: 1=Mon … 7=Sun. Convert to 0-based Mon=0 index.
  const dayIdx = day === 7 ? 6 : day - 1;

  const timeParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Johannesburg",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  const [hourStr, minuteStr] = timeParts.split(":");
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const formatted = `${pad2(hour)}:${pad2(minute)} SAST`;

  return { day: dayIdx, hour, minute, formatted };
}

function isOpenNow(sast: ReturnType<typeof getSASTNow>): boolean {
  const schedule = WEEK[sast.day];
  if (schedule.closed) return false;
  const current = sast.hour + sast.minute / 60;
  return current >= schedule.open && current < schedule.close;
}

function formatRange(schedule: DaySchedule): string {
  if (schedule.closed) return "Closed";
  return `${pad2(schedule.open)}:00 – ${pad2(schedule.close)}:00`;
}

// ── Component ────────────────────────────────────────────────────────
export function OfficeHours() {
  const [sast, setSast] = useState<ReturnType<typeof getSASTNow> | null>(null);

  useEffect(() => {
    const update = () => setSast(getSASTNow());

    // Defer initial setState to avoid synchronous set-state-in-effect
    const initId = setTimeout(update, 0);

    // Update every minute
    const intervalId = setInterval(update, 60_000);

    return () => {
      clearTimeout(initId);
      clearInterval(intervalId);
    };
  }, []);

  // Avoid hydration mismatch — render a static placeholder until client mounts
  const isReady = sast !== null;
  const open = isReady ? isOpenNow(sast) : false;
  const currentDayIdx = isReady ? sast.day : -1;

  return (
    <section className="bg-brand-parchment">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold sm:text-sm">
            Office Hours
          </span>
          <h2 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl md:text-5xl">
            When We&apos;re Available
          </h2>
          <div className="mt-4 flex justify-center">
            <GoldLine width={60} />
          </div>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-brand-body md:text-lg">
            Our offices follow South African Standard Time. Reach us during
            business hours or contact our emergency line anytime.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
              {/* ── Live status banner ── */}
              <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                {/* Status badge */}
                <div className="flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm"
                  style={{
                    borderColor: open ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)",
                    backgroundColor: open ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
                    color: open ? "#16a34a" : "#dc2626",
                  }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    {open && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    )}
                    <span
                      className="relative inline-flex h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: open ? "#22c55e" : "#ef4444" }}
                    />
                  </span>
                  {open ? "Open Now" : "Closed"}
                </div>

                {/* Current time */}
                {isReady && (
                  <div className="flex items-center gap-2 text-sm text-brand-body">
                    <Clock className="h-4 w-4 text-brand-gold" />
                    <span className="font-body">
                      Current Time: <span className="font-semibold text-brand-dark">{sast.formatted}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* ── Weekly schedule table ── */}
              <div className="overflow-hidden rounded-lg border border-brand-border/30">
                <table className="w-full text-left font-body text-sm">
                  <thead>
                    <tr className="border-b border-brand-border/20 bg-brand-dark/[0.02]">
                      <th className="px-4 py-3 font-semibold text-brand-dark sm:px-5">Day</th>
                      <th className="px-4 py-3 font-semibold text-brand-dark sm:px-5">Hours</th>
                      <th className="hidden px-4 py-3 text-right font-semibold text-brand-dark sm:table-cell sm:px-5">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WEEK.map((day, idx) => {
                      const isToday = idx === currentDayIdx;
                      const isCurrentlyOpen =
                        isToday && open;

                      return (
                        <tr
                          key={day.label}
                          className="border-b border-brand-border/10 transition-colors last:border-b-0"
                          style={{
                            backgroundColor: isToday
                              ? "rgba(198,168,75,0.08)"
                              : undefined,
                          }}
                        >
                          <td className="flex items-center gap-2 px-4 py-3 sm:px-5">
                            <span className="font-medium text-brand-dark">
                              {day.label}
                            </span>
                            {isToday && (
                              <span className="rounded bg-brand-gold/20 px-2 py-0.5 text-xs font-semibold text-brand-gold">
                                Today
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-brand-body sm:px-5">
                            {day.closed ? (
                              <span className="text-brand-body/60 italic">Closed</span>
                            ) : (
                              <span className="text-brand-dark">{formatRange(day)}</span>
                            )}
                          </td>
                          <td className="hidden px-4 py-3 text-right sm:table-cell sm:px-5">
                            {isCurrentlyOpen ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                Open
                              </span>
                            ) : isToday && !open ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-500">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                Closed
                              </span>
                            ) : !day.closed ? (
                              <span className="text-xs text-brand-body/50">
                                {formatRange(day)}
                              </span>
                            ) : (
                              <span className="text-xs text-brand-body/40 italic">
                                Closed
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* ── Emergency notice ── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                className="mt-6 rounded-lg border border-brand-gold/40 bg-brand-gold/5 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/15">
                    <AlertTriangle className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-lg font-bold text-brand-dark">
                      After Hours Emergency?
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-body">
                      For criminal matters and urgent bail applications, our
                      emergency line is available 24/7.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="tel:+27812488048"
                        className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-4 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-brand-dark/90"
                      >
                        <Phone className="h-4 w-4" />
                        081 248 8048
                      </a>
                      <a
                        href="https://wa.me/27812488048?text=Emergency%20-%20Urgent%20legal%20assistance%20required"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-brand-gold/30 bg-white px-4 py-2.5 font-body text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-gold/10"
                      >
                        <MessageCircle className="h-4 w-4 text-brand-gold" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
