import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "Scope & Strategy",
    duration: "Days 1–10",
    description: "We don't guess. We map your exact workflow before writing a single line of code.",
    points: [
      "Deep-dive workflow audit",
      "Full interactive wireframes",
      "Fixed-price proposal lock",
      "Architecture & DB design"
    ]
  },
  {
    phase: "Phase 2",
    title: "First Live Build",
    duration: "Days 11–40",
    description: "You see actual working software on staging. No more mockups.",
    points: [
      "Core infrastructure deployed",
      "Authentication & Security setup",
      "Primary database hooked up",
      "First clickable functional preview"
    ]
  },
  {
    phase: "Phase 3",
    title: "Weekly Shipping",
    duration: "Days 41–70",
    description: "Every Friday, we demo a new live build. You test with real data.",
    points: [
      "Weekly live staging demos",
      "Immediate feedback integration",
      "Complex logic & API connections",
      "End-to-end user workflows"
    ]
  },
  {
    phase: "Phase 4",
    title: "Launch & Scale",
    duration: "Day 70+",
    description: "Production deployment and handover. The code is 100% yours.",
    points: [
      "Production server configuration",
      "Domain & SSL mapping",
      "Performance and load testing",
      "30-day post-launch support"
    ]
  }
];

export function VerticalTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // On mobile, expand all cards by default since hover doesn't work
  const [expandedMobile, setExpandedMobile] = useState<Set<number>>(new Set([0]));

  const toggleMobile = (idx: number) => {
    setExpandedMobile(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <section className="py-16 md:py-32 bg-elevated border-y border-divider overflow-hidden">
      <div className="w-full mx-auto px-5 md:px-12 lg:px-20 xl:px-24">
        
        <div className="text-center mb-12 md:mb-24">
          <p className="text-[12px] md:text-[14px] uppercase tracking-wider text-accent font-bold mb-2">The Z3 Sprint System</p>
          <h2 className="text-[28px] md:text-[48px] font-black leading-tight text-white">
            How we ship in 10 weeks.
          </h2>
        </div>

        {/* Mobile: vertical card stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {phases.map((phase, i) => (
            <div 
              key={i} 
              className="bg-primary border border-[#1F1F1F] rounded-xl p-5 cursor-pointer"
              onClick={() => toggleMobile(i)}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#00FF88] text-xs font-bold uppercase tracking-wider">{phase.phase}</span>
                <span className="text-[#666] text-xs">{phase.duration}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {phase.title}
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                {phase.description}
              </p>
              <AnimatePresence initial={false}>
                {expandedMobile.has(i) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 pt-3 border-t border-[#1F1F1F] space-y-2">
                      {phase.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span className="text-xs text-white/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop: existing timeline */}
        <div className="hidden md:block relative">
          
          {/* Progress Line (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-6 w-full h-[2px] bg-white/10 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-gradient-to-r from-accent via-blue-500 to-accent h-full"
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {phases.map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex flex-col items-center w-full"
              >
                
                {/* Node Dot */}
                <div className="absolute left-1/2 -ml-3 top-2 w-6 h-6 rounded-full bg-primary ring-4 ring-accent flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)] z-20">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="mt-12 bg-primary border border-divider hover:border-accent hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 rounded-[20px] p-8 w-full group cursor-default">
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-muted group-hover:text-white transition-colors">{phase.phase}</span>
                    <span className="text-[12px] font-bold bg-accent/10 text-accent px-2 py-1 rounded-md">{phase.duration}</span>
                  </div>
                  
                  <h3 className="text-[20px] lg:text-[24px] font-black text-white leading-tight mb-3">
                    {phase.title}
                  </h3>
                  
                  <p className="text-[14px] text-body mb-0">
                    {phase.description}
                  </p>

                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-divider pt-4"
                      >
                        <ul className="space-y-3">
                          {phase.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              <span className="text-[13px] text-white/80">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
