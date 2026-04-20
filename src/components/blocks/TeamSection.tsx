import React from "react";
import { motion } from "framer-motion";

const founder = {
  name: "Ahamed Shafeek",
  role: "Founder & CEO",
  image: "/team/shafeek.jpeg",
  quote: "We don't farm out work. You work directly with the people writing your code.",
  linkedin: "https://www.linkedin.com/in/ahamedshafeek/",
  stats: [
    "50+ products shipped",
    "8 years building software",
    "Directly involved in every sprint"
  ]
};

const rawTeamStrip = [
  { name: "Thanu", role: "Backend", image: "/team/thanusiva.jpeg" },
  { name: "Balamurali", role: "Frontend", image: "/team/balamurali_black.png" },
  { name: "Jenishlin", role: "Full Stack", image: "/team/Jenishlin_solid.png" },
  { name: "Naveed", role: "Backend", image: "/team/naveed.jpeg" },
  { name: "John", role: "Frontend", image: "/team/john_Abishek_solid.png" },
  { name: "Srinish", role: "Full Stack", image: "/team/srinish.png" },
  { name: "Akshan", role: "DevOps", image: "/team/akshan_black_solid.png" },
  { name: "Raiyan", role: "UI/UX", image: "/team/raiyan_black_solid.png" },
  { name: "Ajay", role: "Backend", image: null },
  { name: "Arwin", role: "Frontend", image: null },
  { name: "Vino", role: "QA", image: null },
  { name: "Ifthikar", role: "Full Stack", image: null },
];

export function TeamSection() {
  const marqueeItems = [...rawTeamStrip, ...rawTeamStrip, ...rawTeamStrip];

  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        
        {/* Top Block: Founder Spotlight (2 Column) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-20 bg-elevated/30 border border-white/5 p-8 md:p-12 lg:p-16 rounded-[32px] max-w-6xl mx-auto shadow-2xl">
          
          {/* Left Side: Tall Portrait Photo (Reduced Size) */}
          <div className="w-full md:w-[35%] flex justify-center md:justify-end">
            <div className="w-full max-w-[280px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.15)] border border-white/10 ring-4 ring-white/5">
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          {/* Right Side: Text Stack */}
          <div className="w-full md:w-[65%] flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <p className="text-accent font-bold uppercase tracking-widest text-[13px] mb-3">
              {founder.role}
            </p>
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <h3 className="text-[32px] md:text-[42px] font-black text-white leading-tight">
                {founder.name}
              </h3>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Ahamed Shafeek on LinkedIn"
                className="text-[#0A66C2] hover:scale-110 transition-transform mt-2 bg-white rounded-sm w-[20px] h-[20px] flex items-center justify-center p-[2px]"
              >
                <svg className="w-full h-full bg-white rounded-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <div className="w-[48px] h-[3px] bg-accent my-6 rounded-full" />

            <ul className="mb-8 space-y-3">
              {founder.stats.map((stat, idx) => (
                <li key={idx} className="flex items-center justify-center md:justify-start text-white/90 text-[16px] md:text-[18px]">
                  <span className="text-accent mr-3 font-bold">—</span>
                  <span className="font-medium">{stat}</span>
                </li>
              ))}
            </ul>
            
            <p className="max-w-xl text-[16px] md:text-[18px] text-muted italic leading-relaxed">
              &quot;{founder.quote}&quot;
            </p>
          </div>
        </div>

        {/* Bottom Block: Team Strip and Full Team Button */}
        <div className="flex flex-col gap-8 py-2">
          {/* Animated Marquee Flex Child */}
          <div className="w-full overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] pl-4">
            <motion.div 
              className="flex w-max items-center gap-8"
              animate={{ x: ["0%", "-33.333333%"] }}
              transition={{ 
                duration: 70, // 2x slower
                ease: "linear",
                repeat: Infinity
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="relative group shrink-0 flex items-center">
                  <div className="w-[112px] h-[112px] rounded-full overflow-hidden opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center">
                        <span className="text-white/40 font-bold text-lg tracking-widest">{item.name?.substring(0, 2).toUpperCase()}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-primary text-[14px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    <span>{item.name}</span>
                    <span className="text-primary/50 font-normal"> · {item.role}</span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-6 border-x-transparent border-t-6 border-t-white" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
