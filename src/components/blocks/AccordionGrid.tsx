import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "What if I don't know exactly what I want built?",
    answer: "That's literally Phase 1. We sit with you, map your workflow, build wireframes, and define every feature — before we write a single line of code. You don't need a spec doc. You need a problem worth solving. We handle the rest."
  },
  {
    question: "How is this different from a traditional freelancer?",
    answer: "Your friend's freelancer is one person. If they get sick, get a better offer, or just lose interest — your entire product dies. We're a full senior engineering team with established playbooks, rigorous QA, and a 3–4 week delivery guarantee. We don't disappear. We ship."
  },
  {
    question: "Why not just hire an in-house developer?",
    answer: "When you hire in-house, you face months of recruitment, onboarding, and the risk of attrition. We provide a full senior engineering team that ships a production-ready system in 3–4 weeks for a predictable fixed cost. No hiring friction, no management overhead."
  },
  {
    question: "Who actually builds my product?",
    answer: "Senior engineers who've shipped 50+ production systems. You meet them on the kickoff call. No account manager layer. No PM playing telephone. You talk directly to the people writing your code."
  },
  {
    question: "What happens after launch?",
    answer: "Every project includes 30 days of post-launch support. We handle bugs, server configurations, scaling, and deployment issues. After that, you can retain us for ongoing work or hand the codebase to your own team — it's yours, fully documented, on your GitHub."
  },
  {
    question: "What tech stack do you use?",
    answer: "React, Next.js, Node.js, Python, Firebase, Supabase, PostgreSQL, React Native. We pick what's right for your scale and your budget — not what's trendy. Every stack decision is justified in the scoping phase."
  },
  {
    question: "How do I get started?",
    answer: "Book a 20-minute scoping call. No sales deck. No \"let me loop in my manager.\" We'll map your problem live, tell you if we're the right fit, and send a customized proposal within 24 hours."
  }
];

export function AccordionGrid() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggleFAQ = (index: number) => {
    setOpenIndices(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <section className="py-20 md:py-28 bg-primary" aria-label="Frequently asked questions">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 xl:px-24">
        
        <div className="text-center mb-10 md:mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-[28px] md:text-[48px] font-black leading-tight text-white mb-3 md:mb-4">
            Frequently asked questions
          </h2>
          <p className="text-sm md:text-[16px] text-muted max-w-xl mx-auto">
            Everything you need to know before you book.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.has(idx);
            
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-elevated border-white/20' : 'bg-transparent border-divider hover:border-white/10'}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-4 md:p-8 text-left focus:outline-none min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base md:text-[18px] font-bold pr-4 md:pr-8 transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-accent text-primary' : 'bg-white/5 text-white/50'}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 md:px-8 md:pb-8 md:pt-0 text-sm md:text-[15px] text-[#A3A3A3] leading-relaxed max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Final CTA Node */}
          <div className="mt-6 md:mt-8 p-5 md:p-10 rounded-2xl border-2 border-accent bg-accent/5 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-base md:text-[20px] font-bold text-white mb-1 md:mb-2">Still have questions?</h3>
              <p className="text-xs md:text-[14px] text-body">We&apos;ll walk through your specific use case. No pressure.</p>
            </div>
            <Button variant="primary" className="w-full sm:w-auto shrink-0 px-8">
              Book a 20-min scoping call &rarr;
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
