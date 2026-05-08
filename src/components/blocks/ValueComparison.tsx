import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const z3Bullets = [
  "Working code on staging in 7 days — not mockups",
  "Fixed timeline, fixed scope — no monthly bleed",
  "Full senior team from Day 1 — no hiring, no onboarding",
  "You own 100% of the code. Walk away whenever you want.",
];

const agencyBullets = [
  "Layers of account managers between you and the people writing code",
  "Change requests billed hourly on top of the original scope",
  "Timeline slips every month — \"we're almost there\" becomes their tagline",
  "You pay for their office rent, not your product velocity",
];

const hiringBullets = [
  "3+ months to find and hire a decent full-stack developer",
  "Attrition kills you — they leave for a 40% bump every 8 months",
  "You become the project manager, the QA team, and the CTO you don't have",
  "High annual burn before a single feature ships",
];

export function ValueComparison() {
  return (
    <section className="py-20 md:py-28 bg-primary border-y border-divider">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 xl:px-24 relative z-10">
        
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Compare Your Options</p>
          <h2 className="text-[28px] md:text-[48px] font-black text-white leading-tight">
            Why Indian founders pick Z3 over the usual options
          </h2>
        </div>

        {/* Mobile: 2-card stack (Z3 vs Agency only) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {/* Z3 card — highlighted */}
          <div className="border-2 border-accent rounded-2xl p-5">
            <p className="text-accent text-xs font-bold uppercase tracking-wider mb-3">Z3 Sprint System™</p>
            {z3Bullets.map(b => (
              <div key={b} className="flex items-start gap-2 mb-2">
                <span className="text-accent text-sm mt-0.5">✓</span>
                <p className="text-sm text-white">{b}</p>
              </div>
            ))}
          </div>
          {/* Agency card */}
          <div className="border border-divider rounded-2xl p-5 opacity-60">
            <p className="text-muted text-xs font-bold uppercase tracking-wider mb-3">Traditional Agency / Dev Shop</p>
            {agencyBullets.map(b => (
              <div key={b} className="flex items-start gap-2 mb-2">
                <span className="text-red-400 text-sm mt-0.5">✗</span>
                <p className="text-sm text-[#A3A3A3]">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:items-stretch xl:max-w-6xl xl:mx-auto">
          
          {/* Column 1: In House */}
          <div className="bg-primary border border-divider rounded-2xl p-8 lg:p-10 flex flex-col">
            <h3 className="text-[20px] font-bold text-white mb-2">Hiring in-house</h3>
            <p className="text-[14px] text-muted mb-8 pb-4 border-b border-divider">Building a team from scratch</p>
            
            <ul className="space-y-6">
              {hiringBullets.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-body">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Z3 Sprint System (Highlighted) */}
          <div className="bg-elevated border-2 border-accent rounded-2xl p-8 lg:p-12 z-10 shadow-[0_0_40px_rgba(34,197,94,0.1)] relative scale-[1.03] flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider">
              Z3 Sprint System™
            </div>
            <h3 className="text-[24px] font-black text-white mb-2">Z3 Sprint System</h3>
            <p className="text-[14px] text-muted mb-8 pb-4 border-b border-accent/20">Your product. Shipped in 3 weeks.</p>
            
            <ul className="space-y-6">
              {z3Bullets.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary stroke-[4]" />
                  </div>
                  <span className="text-[16px] text-white font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Traditional Agency */}
          <div className="bg-primary border border-divider rounded-2xl p-8 lg:p-10 flex flex-col">
            <h3 className="text-[20px] font-bold text-white mb-2">Traditional agency / dev shop</h3>
            <p className="text-[14px] text-muted mb-8 pb-4 border-b border-divider">The typical agency quote with an 8-month timeline</p>
            
            <ul className="space-y-6">
              {agencyBullets.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-body">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* CTA after comparison — visitor is convinced, give them action */}
        <div className="text-center mt-12">
          <Button variant="primary" className="text-base md:text-lg px-10">
            Book a 20-min scoping call &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
