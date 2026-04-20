import React from "react";

const stats = [
  { value: "92%", label: "Reduction in Admin Time" },
  { value: "2.4x", label: "Booking Volume Increase" },
  { value: "Zero", label: "Estimation Errors" },
];



const projects = [
  {
    badge: "FLAGSHIP",
    badgeColor: "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent",
    title: "ZAssist",
    desc: "Your AI-powered business assistant. Handles customer queries, manages appointments, and automates repetitive tasks — so you can focus on growing.",
    tags: ["AI Chat", "Appointments", "Analytics", "Multi-language"],
    size: "large"
  },
  {
    badge: "AI AUTOMATION",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    title: "Content Flow",
    desc: "Automate your entire content strategy. One prompt generates optimized posts for all your social channels, handled by AI agents that understand your brand voice.",
    tags: ["Multi-platform", "AI Scheduling", "Brand Voice", "Analytics"],
    size: "large"
  },
  {
    badge: "POS",
    badgeColor: "bg-white/5 text-white/80 border-white/10",
    title: "ZPOS",
    desc: "Mobile-first billing system. Works offline, syncs when connected. Built for speed.",
    tags: ["Offline", "Fast billing", "Reports"],
    size: "medium"
  },
  {
    badge: "CRM",
    badgeColor: "bg-white/5 text-white/80 border-white/10",
    title: "ZCRM",
    desc: "Track leads, follow-ups, and customer relationships. Simple but powerful.",
    tags: ["Leads", "Pipeline", "Reminders"],
    size: "medium"
  },
  {
    badge: "LOGISTICS",
    badgeColor: "bg-white/5 text-white/80 border-white/10",
    title: "Route 66",
    desc: "AI-Powered Fleet Management System. Real-time tracking and logistics.",
    tags: ["Tracking", "Routing", "Fleet"],
    size: "medium"
  },
  {
    badge: "WEB3",
    badgeColor: "bg-white/5 text-white/80 border-white/10",
    title: "Safuu Dashboard",
    desc: "High-traffic DeFi monitoring infrastructure for 100k+ concurrent users.",
    tags: ["Crypto", "Scale", "Live Data"],
    size: "medium"
  }
];

export function ProofStack() {
  return (
    <section id="proof" className="py-24 md:py-32 bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-24">
        
        {/* Top: Stat bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-divider py-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <span className="text-[48px] md:text-[56px] font-mono font-bold text-accent mb-2">{stat.value}</span>
              <span className="text-[14px] uppercase tracking-wider text-muted font-bold">{stat.label}</span>
            </div>
          ))}
        </div>



        {/* Bottom: Bento Grid Featured Products */}
        <div>
          <div className="text-center mb-16">
            <p className="text-[14px] uppercase tracking-wider text-muted font-bold mb-2">Featured Products</p>
            <h3 className="text-[40px] md:text-[48px] font-black text-white leading-tight">Tools we've built and shipped.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p, idx) => (
              <div key={idx} className={`p-8 rounded-[24px] flex flex-col gap-4 border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-md hover:border-white/20 transition-all duration-300 ${p.size === 'large' ? 'lg:col-span-2 shadow-xl' : 'lg:col-span-1 shadow-lg'}`}>
                <div>
                  <span className={`inline-block px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <h4 className={`font-black text-white ${p.size === 'large' ? 'text-[32px] mt-2' : 'text-[24px]'}`}>{p.title}</h4>
                <p className={`text-white/60 leading-relaxed mb-auto ${p.size === 'large' ? 'text-[16px]' : 'text-[15px]'}`}>{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white/5 rounded-md text-[12px] font-medium text-white/70 border border-white/5">
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
