import React from "react";

const stats = [
  { value: "30+", label: "Businesses shipped" },
  { value: "50+", label: "Production systems live" },
  { value: "5 yrs", label: "Building software" },
];



const projects = [
  {
    title: "ZAssist",
    desc: "Your AI-powered business assistant. Handles customer queries, manages appointments, and automates repetitive tasks — so you can focus on growing.",
    meta: "Client: [Name] · Stack: React, Node, Firebase",
    tags: ["AI Chat", "Appointments", "Analytics", "Multi-language"],
    size: "large"
  },
  {
    title: "ContentFlow",
    desc: "Automate your entire content strategy. One prompt generates optimized posts for all your social channels, handled by AI agents that understand your brand voice.",
    meta: "Stack: Next.js, FastAPI · Internal product",
    tags: ["Multi-platform", "AI Scheduling", "Brand Voice", "Analytics"],
    size: "large"
  },
  {
    title: "ZPOS",
    desc: "Mobile-first billing system. Works offline, syncs when connected. Built for speed.",
    meta: "Stack: React Native · 5+ clients live",
    tags: ["Offline", "Fast billing", "Reports"],
    size: "medium"
  },
  {
    title: "ZCRM",
    desc: "Track leads, follow-ups, and customer relationships. Simple but powerful.",
    meta: "Stack: React, Supabase · Deployed",
    tags: ["Leads", "Pipeline", "Reminders"],
    size: "medium"
  },
  {
    title: "ZLMS",
    desc: "Complete Learning Management System. Create courses, track student progress, and distribute content seamlessly.",
    meta: "Stack: React, Supabase · Education",
    tags: ["Courses", "Analytics", "Education"],
    size: "medium"
  },
  {
    title: "ZHMS",
    desc: "Modern Hospital Management System. Streamline patient records, appointments, and hospital operations.",
    meta: "Stack: Next.js, Node · Healthcare",
    tags: ["Healthcare", "Records", "Booking"],
    size: "medium"
  }
];

export function ProofStack() {
  return (
    <section id="proof" className="py-16 md:py-32 bg-primary">
      <div className="w-full mx-auto px-5 md:px-12 lg:px-20 xl:px-24 flex flex-col gap-16 md:gap-24">
        
        {/* Top: Stat bar */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 border-y border-divider py-8 md:py-12 divide-x divide-[#1F1F1F]">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <span className="text-[36px] md:text-[56px] font-mono font-bold text-accent mb-1 md:mb-2">{stat.value}</span>
              <span className="text-[10px] md:text-[14px] uppercase tracking-wider text-muted font-bold">{stat.label}</span>
            </div>
          ))}
        </div>



        {/* Bottom: Bento Grid Featured Products */}
        <div>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-[12px] md:text-[14px] uppercase tracking-wider text-muted font-bold mb-2">Featured Products</p>
            <h2 className="text-[28px] md:text-[48px] font-black text-white leading-tight">Work we've shipped.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {projects.map((p, idx) => (
              <div key={idx} className={`p-5 md:p-8 rounded-[24px] flex flex-col gap-3 md:gap-4 border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-md hover:border-white/20 transition-all duration-300 ${p.size === 'large' ? 'lg:col-span-2 shadow-xl' : 'lg:col-span-1 shadow-lg'}`}>
                <h4 className={`font-black text-white ${p.size === 'large' ? 'text-[24px] md:text-[32px]' : 'text-[20px] md:text-[24px]'}`}>{p.title}</h4>
                <p className={`text-white/60 leading-relaxed ${p.size === 'large' ? 'text-sm md:text-[16px]' : 'text-sm md:text-[15px]'}`}>{p.desc}</p>
                <p className="text-[11px] md:text-[12px] text-white/40 font-mono">{p.meta}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto pt-3 md:pt-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 md:px-3 md:py-1.5 bg-white/5 rounded-md text-xs md:text-[12px] font-medium text-white/70 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
