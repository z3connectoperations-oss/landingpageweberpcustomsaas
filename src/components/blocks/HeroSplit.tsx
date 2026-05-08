import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { LeadForm } from "@/components/ui/LeadForm";

export function HeroSplit() {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden px-5 md:px-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      <div className="w-full max-w-7xl mx-auto px-0 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center text-center relative z-10">
        
        <div className="flex flex-col items-center w-full">
          {/* Top Section: Badge and H1 */}
          <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 lg:mb-12">
            <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0 }}>
              <span className="inline-block px-3 md:px-4 py-1.5 rounded-full border border-accent text-accent text-xs md:text-sm font-bold uppercase tracking-wider bg-accent/5">
                For Indian founders who are done juggling freelancers
              </span>
            </motion.div>
            
            <motion.h1 {...motionProps} transition={{ duration: 0.5, delay: 0.1 }} className="text-[36px] md:text-[64px] lg:text-[80px] font-black leading-[1.1] tracking-tight max-w-[320px] md:max-w-none mx-auto text-center flex flex-col md:block items-center justify-center">
              <span>Your Product. Built by Seniors. Live in <span className="text-green-500">3 Weeks</span></span>{" "}
              <span className="whitespace-nowrap inline-block">— <span className="line-through italic text-white/90">Not 3 Quarters.</span></span>
            </motion.h1>
          </div>

          {/* Bottom Section: Split Layout on Desktop */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12">
            
            {/* Left Column — 55% */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[55%] gap-5 md:gap-6">
              <motion.p {...motionProps} transition={{ duration: 0.5, delay: 0.2 }} className="text-base md:text-xl text-[#A3A3A3] max-w-[300px] md:max-w-xl leading-relaxed mx-auto lg:mx-0">
                We build custom SaaS, ERPs, and web apps for Indian startups and SMEs. Fixed-scope. Full senior team. Working preview on staging in 7 days — not a Figma link, working software. <strong className="text-white">30+ businesses shipped. 50+ systems in production.</strong>
              </motion.p>

              <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center lg:justify-start gap-x-1 gap-y-2 text-xs md:text-sm font-medium text-body">
                <span className="flex items-center gap-1.5 px-3 py-1 md:px-0 md:py-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" /> 50+ systems shipped
                </span>
                <span className="hidden md:inline text-white/30 mx-2">|</span>
                <span className="flex items-center gap-1.5 px-3 py-1 md:px-0 md:py-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" /> Working preview in 7 days
                </span>
                <span className="hidden md:inline text-white/30 mx-2">|</span>
                <span className="flex items-center gap-1.5 px-3 py-1 md:px-0 md:py-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" /> Fixed-scope — no hourly surprises
                </span>
              </motion.div>

              <div className="flex flex-col items-center lg:items-start gap-3 mt-2 w-full">
                <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-col w-full md:w-auto">
                  <Button variant="primary" className="w-full md:w-auto text-base md:text-lg px-8 py-4 font-bold rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transition-shadow duration-300">
                    Book a 20-min scoping call &rarr;
                  </Button>
                </motion.div>

                <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.4 }}>
                  <p className="text-xs md:text-[13px] font-medium text-accent/80">
                    We run 2 sprints per month. Currently booking for June 2026. Once both slots lock, the next opening is 5 weeks out.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Lead Form — 45% */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-4 lg:mt-0">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/30 blur-[80px] rounded-full pointer-events-none z-0" />
              
              <motion.div 
                {...motionProps} 
                transition={{ duration: 0.5, delay: 0.5 }} 
                className="w-full max-w-[480px] relative z-10"
              >
                <LeadForm variant="compact" />
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
