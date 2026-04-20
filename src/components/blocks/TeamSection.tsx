import React from "react";
import { motion } from "framer-motion";

const founder = {
  name: "Ahamed Shafeek",
  role: "VISIONARY FOUNDER",
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
  { name: "Thanu", image: "/team/thanusiva.jpeg" },
  { name: "Balamurali", image: "/team/balamurali_black.png" },
  { name: "Jenishlin", image: "/team/Jenishlin_solid.png" },
  { name: "Naveed", image: "/team/naveed.jpeg" },
  { name: "John", image: "/team/john_Abishek_solid.png" },
  { name: "Srinish", image: "/team/srinish.png" },
  { name: "Akshan", image: "/team/akshan_black_solid.png" },
  { name: "Raiyan", image: "/team/raiyan_black_solid.png" },
  { name: "Jerimoth", image: "/team/jerimoth_black_solid.png" },
  { name: "Joshan", image: "/team/joshan_black_solid.png" },
  { name: "Ajay", image: null },
  { name: "Arwin", image: null },
  { name: "Vino", image: null },
  { name: "Ifthikar", image: null },
];

export function TeamSection() {
  const marqueeItems = [...rawTeamStrip, ...rawTeamStrip, ...rawTeamStrip];

  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Block: Founder Spotlight (2 Column) */}
        <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-16 mb-12">
          
          {/* Left Side: Tall Portrait Photo (45%) */}
          <div className="w-full md:w-[45%]">
            <div className="w-full h-[260px] md:h-[420px] rounded-[12px] overflow-hidden">
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>
          
          {/* Right Side: Text Stack (55%), Vertically Centered */}
          <div className="w-full md:w-[55%] flex flex-col justify-center text-left">
            <p className="text-accent font-bold uppercase tracking-widest text-[12px] mb-2">
              {founder.role}
            </p>
            
            <div className="flex items-center gap-3">
              <h3 className="text-[32px] md:text-[42px] font-bold text-white leading-tight">
                {founder.name}
              </h3>
              <a 
                href={founder.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="text-[#0A66C2] hover:scale-110 transition-transform mt-2"
              >
                <svg className="w-[18px] h-[18px] bg-white rounded-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <div className="w-[48px] h-[2px] bg-accent my-4" />

            <ul className="mb-6 space-y-2">
              {founder.stats.map((stat, idx) => (
                <li key={idx} className="flex items-start text-white/90 text-[16px]">
                  <span className="text-accent mr-2 font-medium">—</span>
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
            
            <p className="max-w-xl text-[15px] text-muted italic">
              &quot;{founder.quote}&quot;
            </p>
          </div>
        </div>

        {/* Bottom Block: Team Strip with Static Pill inside container */}
        <div className="flex items-center gap-6 py-2">
          {/* Animated Marquee Flex Child */}
          <div className="flex-1 overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] pl-4">
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
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-primary text-[14px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    {item.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-6 border-x-transparent border-t-6 border-t-white" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Static Unscrolled Pill */}
          <div className="shrink-0 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-[15px] font-bold text-white/50 tracking-tight flex items-center max-h-[112px]">
            + 5 more builders
          </div>
        </div>

      </div>
    </section>
  );
}
