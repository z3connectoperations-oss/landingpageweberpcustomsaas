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
    <section className="relative min-h-[80vh] flex items-center pt-12 pb-16 lg:pt-40 overflow-hidden px-5 md:px-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      <div className="w-full mx-auto px-0 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center text-center relative z-10">
        
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0 }}>
            <span className="inline-block px-3 md:px-4 py-1.5 rounded-full border border-accent text-accent text-xs md:text-sm font-bold uppercase tracking-wider bg-accent/5">
              For US founders &amp; operators who are done waiting
            </span>
          </motion.div>
          
          <motion.h1 {...motionProps} transition={{ duration: 0.5, delay: 0.1 }} className="text-[36px] md:text-[64px] lg:text-[80px] font-black leading-[1.1] tracking-tight max-w-[320px] md:max-w-none mx-auto">
            Custom Software, Shipped in Weeks — Not Quarters.
          </motion.h1>
          
          <motion.p {...motionProps} transition={{ duration: 0.5, delay: 0.2 }} className="text-base md:text-[24px] text-[#A3A3A3] max-w-[300px] md:max-w-3xl leading-relaxed mx-auto">
            We build SaaS, ERPs, and web apps for US companies at 1/3 the cost of a US agency, and ship a working product in 10 weeks — with a live preview by Day 10. <strong className="text-white">30+ businesses live. 50+ systems in production.</strong>
          </motion.p>

          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-2 md:gap-6 mt-2 text-xs md:text-base font-medium text-body">
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

          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-col items-center mt-2">
            <p className="text-xs md:text-[13px] font-medium text-accent">
              We take 2 sprints per month — currently booking for May 2026.
            </p>
          </motion.div>

          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col w-full md:w-auto md:flex-row items-center justify-center gap-3 md:gap-4 mt-4">
            <Button variant="primary" className="w-full md:w-auto text-base md:text-lg px-8 py-4 font-bold rounded-xl">
              Book a 20-min scoping call &rarr;
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
