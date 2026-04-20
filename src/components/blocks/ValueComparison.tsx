import React from "react";
import { Check, X } from "lucide-react";

export function ValueComparison() {
  return (
    <section className="py-24 bg-primary border-y border-divider">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-[14px] uppercase tracking-wider text-muted font-bold mb-2">The Market Reality</p>
          <h2 className="text-[32px] md:text-[48px] font-black text-white leading-tight">
            Why founders choose Z3 over the alternatives
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 lg:items-center">
          
          {/* Column 1: In House */}
          <div className="bg-primary border border-divider rounded-2xl lg:rounded-r-none p-8 lg:p-10 z-0">
            <h3 className="text-[20px] font-bold text-white mb-2">Hiring in-house</h3>
            <p className="text-[14px] text-muted mb-8">Building a team from scratch</p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-body">9+ weeks interviewing and filtering candidates</span>
              </li>
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-body">High risk and cost of a bad hire</span>
              </li>
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-body">Onboarding tax delays actual product work</span>
              </li>
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-body">No guarantees on delivery speed</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Z3 Sprint System (Highlighted) */}
          <div className="bg-elevated border-2 border-accent rounded-2xl p-8 lg:p-12 z-10 shadow-2xl relative lg:scale-110 lg:-mx-4 my-4 lg:my-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider">
              The Faster Path
            </div>
            <h3 className="text-[24px] font-black text-white mb-2">Z3 Sprint System</h3>
            <p className="text-[14px] text-muted mb-8">Your product. Shipped fast.</p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary stroke-[4]" />
                </div>
                <span className="text-[16px] text-white font-medium">Working code shipped in 7 days</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary stroke-[4]" />
                </div>
                <span className="text-[16px] text-white font-medium">Fixed timelines and total predictability</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary stroke-[4]" />
                </div>
                <span className="text-[16px] text-white font-medium">Top 5% senior talent from day one</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary stroke-[4]" />
                </div>
                <span className="text-[16px] text-white font-medium">Instant velocity, zero onboarding</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Traditional Agency */}
          <div className="bg-primary border border-divider rounded-2xl lg:rounded-l-none p-8 lg:p-10 z-0">
            <h3 className="text-[20px] font-bold text-white mb-2">Traditional agency</h3>
            <p className="text-[14px] text-muted mb-8">The standard offshore model</p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-body">6-month Gantt charts before writing code</span>
              </li>
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-body">Layers of account managers block developers</span>
              </li>
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-body">Unpredictable hourly billing</span>
              </li>
              <li className="flex items-start gap-4">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-body">Rigid contracts that punish iteration</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
