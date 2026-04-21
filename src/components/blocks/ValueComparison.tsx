import React from "react";
import { Check, X } from "lucide-react";

const z3Bullets = [
  "Working code shipped in 7 days",
  "Fixed timelines and total predictability",
  "Top 5% senior talent from day one",
  "Instant velocity, zero onboarding",
];

const agencyBullets = [
  "6-month Gantt charts before writing code",
  "Layers of account managers block developers",
  "Unpredictable hourly billing",
  "Rigid contracts that punish iteration",
];

const hiringBullets = [
  "9+ weeks interviewing and filtering candidates",
  "High risk and cost of a bad hire",
  "Onboarding tax delays actual product work",
  "No guarantees on delivery speed",
];

export function ValueComparison() {
  return (
    <section className="py-16 md:py-24 bg-primary border-y border-divider">
      <div className="w-full mx-auto px-5 md:px-12 lg:px-20 xl:px-24 relative z-10">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[48px] font-black text-white leading-tight">
            Why founders choose Z3 over the alternatives
          </h2>
        </div>

        {/* Mobile: 2-card stack (Z3 vs Agency only) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {/* Z3 card — highlighted */}
          <div className="border-2 border-[#00FF88] rounded-xl p-5">
            <p className="text-[#00FF88] text-xs font-bold uppercase tracking-wider mb-3">Z3 Sprint System™</p>
            {z3Bullets.map(b => (
              <div key={b} className="flex items-start gap-2 mb-2">
                <span className="text-[#00FF88] text-sm mt-0.5">✓</span>
                <p className="text-sm text-white">{b}</p>
              </div>
            ))}
          </div>
          {/* Agency card */}
          <div className="border border-[#1F1F1F] rounded-xl p-5 opacity-60">
            <p className="text-[#666] text-xs font-bold uppercase tracking-wider mb-3">US Agency / Freelancer</p>
            {agencyBullets.map(b => (
              <div key={b} className="flex items-start gap-2 mb-2">
                <span className="text-red-400 text-sm mt-0.5">✗</span>
                <p className="text-sm text-[#A3A3A3]">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: existing 3-column grid */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:items-center xl:max-w-6xl xl:mx-auto">
          
          {/* Column 1: In House */}
          <div className="bg-primary border border-divider rounded-2xl p-8 lg:p-10 z-0">
            <h3 className="text-[20px] font-bold text-white mb-2">Hiring in-house</h3>
            <p className="text-[14px] text-muted mb-8">Building a team from scratch</p>
            
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
          <div className="bg-elevated border-2 border-accent rounded-2xl p-8 lg:p-12 z-10 shadow-[0_0_40px_rgba(34,197,94,0.1)] relative transform lg:-translate-y-4 my-4 lg:my-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider">
              Z3 Sprint System™
            </div>
            <h3 className="text-[24px] font-black text-white mb-2">Z3 Sprint System</h3>
            <p className="text-[14px] text-muted mb-8">Your product. Shipped fast.</p>
            
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
          <div className="bg-primary border border-divider rounded-2xl p-8 lg:p-10 z-0">
            <h3 className="text-[20px] font-bold text-white mb-2">Traditional agency / US dev shop</h3>
            <p className="text-[14px] text-muted mb-8">The standard high-cost model</p>
            
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
      </div>
    </section>
  );
}
