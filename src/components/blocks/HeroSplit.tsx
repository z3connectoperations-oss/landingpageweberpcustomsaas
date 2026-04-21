import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function HeroSplit() {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center pt-8 pb-24 lg:pt-20 lg:pb-32 overflow-hidden px-5 md:px-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      <div className="w-full mx-auto px-0 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center text-center relative z-10">
        
        <div className="flex flex-col items-center w-full">
          {/* Top Section: Badge and H1 */}
          <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 lg:mb-16">
            <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0 }}>
              <span className="inline-block px-3 md:px-4 py-1.5 rounded-full border border-accent text-accent text-xs md:text-sm font-bold uppercase tracking-wider bg-accent/5">
                For US founders &amp; operators who are done waiting
              </span>
            </motion.div>
            
            <motion.h1 {...motionProps} transition={{ duration: 0.5, delay: 0.1 }} className="text-[36px] md:text-[64px] lg:text-[80px] font-black leading-[1.1] tracking-tight max-w-[320px] md:max-w-none mx-auto text-center flex flex-col md:block items-center justify-center">
              <span>Custom Software, Shipped in <span className="text-green-500">Weeks</span></span>{" "}
              <span className="whitespace-nowrap inline-block">— <span className="line-through italic text-white/90">Not Quarters.</span></span>
            </motion.h1>
          </div>

          {/* Bottom Section: Split Layout on Desktop */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
            
            {/* Left Column */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-6 md:gap-8">
              <motion.p {...motionProps} transition={{ duration: 0.5, delay: 0.2 }} className="text-base md:text-[24px] text-[#A3A3A3] max-w-[300px] md:max-w-3xl leading-relaxed mx-auto lg:mx-0">
                We build SaaS, ERPs, and web apps for US companies at 1/3 the cost of a US agency, and ship a working product in 3-4 weeks — with a live preview in 7 days. <strong className="text-white">30+ businesses live. 50+ systems in production.</strong>
              </motion.p>

              <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-6 text-xs md:text-base font-medium text-body">
                <span className="flex items-center gap-1.5 px-3 py-1 md:px-0 md:py-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" /> 50+ shipped
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 md:px-0 md:py-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" /> First demo in 7 days
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 md:px-0 md:py-0">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" /> Fixed-price, fixed-scope
                </span>
              </motion.div>

              <div className="flex flex-col items-center lg:items-start gap-4 mt-2 w-full">
                <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.35 }}>
                  <p className="text-xs md:text-[13px] font-medium text-accent">
                    We take 2 sprints per month — currently booking for May 2026.
                  </p>
                </motion.div>

                <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col w-full md:w-auto mt-4">
                  <Button variant="primary" className="w-full md:w-auto text-base md:text-lg px-8 py-4 font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transition-shadow duration-300">
                    Book a 20-min scoping call &rarr;
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Right Column: VSL Placeholder */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/20 blur-[100px] rounded-full pointer-events-none z-0" />
              
              <motion.div 
                {...motionProps} 
                transition={{ duration: 0.5, delay: 0.5 }} 
                className="w-full max-w-[600px] aspect-video bg-[#1A1A1A]/50 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group cursor-pointer z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1" />
                  </div>
                  <span className="text-white/70 font-medium text-sm">Watch Video (VSL Placeholder)</span>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
