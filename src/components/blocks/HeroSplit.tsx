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
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-16 lg:pt-40 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col items-center text-center relative z-10">
        
        <div className="flex flex-col items-center gap-8">
          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent text-accent text-sm font-bold uppercase tracking-wider bg-accent/5">
              For US founders & operators who are done waiting
            </span>
          </motion.div>
          
          <motion.h1 {...motionProps} transition={{ duration: 0.5, delay: 0.1 }} className="text-[48px] md:text-[64px] lg:text-[80px] font-black leading-[1.1] tracking-tight">
            Custom Software, Shipped in Weeks — Not Quarters.
          </motion.h1>
          
          <motion.p {...motionProps} transition={{ duration: 0.5, delay: 0.2 }} className="text-[20px] md:text-[24px] text-muted max-w-3xl leading-relaxed mx-auto">
            We build SaaS, ERPs, and web apps for US companies at 1/3 the cost of a US agency, and ship working software every Friday. <strong className="text-white">30+ businesses live. 50+ systems in production.</strong>
          </motion.p>
          
          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-6 mt-2 text-sm md:text-base font-medium text-body">
            <span className="flex items-center gap-1.5">
              <Check className="w-5 h-5 text-accent" /> 50+ shipped
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-5 h-5 text-accent" /> First demo in 7 days
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-5 h-5 text-accent" /> Fixed-price, fixed-scope
            </span>
          </motion.div>

          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-6">
            <Button variant="primary" className="text-lg px-8 py-4">
              See if Z3 is right for you &rarr;
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4" href="#proof">
              See what we&apos;ve shipped &darr;
            </Button>
          </motion.div>

          <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col items-center mt-4">
            <p className="text-[13px] font-medium text-accent">
              We take 2 sprints per month — currently booking for May 2026.
            </p>
            <p className="text-xs text-muted/70 mt-1">
              Typical response: under 2 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
