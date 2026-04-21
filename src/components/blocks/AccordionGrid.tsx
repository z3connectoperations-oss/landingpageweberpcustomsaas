import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "What if I don't know exactly what I want to build yet?",
    answer: "That's exactly why we start with a deep-dive workflow audit in Phase 1. We don't write a single line of code until we've fully mapped your operations and delivered interactive wireframes that solve the core business problem."
  },
  {
    question: "What does working with you actually look like week by week?",
    answer: "It's highly structured and fiercely predictable. You get actual working software pushed to a live staging server every single Friday. We hop on a quick review async video or call, integrate your feedback, and immediately deploy the next iteration."
  },
  {
    question: "Who builds the product — is it outsourced?",
    answer: "No PM layers. No outsourcing to cheap talent mills. You work directly with our execution-obsessed, highly senior core engineering unit. We own the codebase natively and ship at a completely different velocity because of it."
  },
  {
    question: "What happens after launch — are we on our own?",
    answer: "No. Every sprint includes 30 days of post-launch support. We handle all server configurations, domains, automated scaling rules, and any unexpected bugs while you focus on onboarding your users."
  },
  {
    question: "How is this different from hiring a freelancer?",
    answer: "Freelancers are a single point of failure with massive key-person risk. If they get sick or ghost you, your product dies. We are a unified full-stack engineering factory with established playbooks, rigorous QA, and an ironclad 10-week delivery timeline."
  },
  {
    question: "What if I need changes after the sprint ends?",
    answer: "We build using extremely clean, modern tech stacks (React, Node, Python) and hand over 100% of the IP, documentation, and code to you. You can retain us on an expansion contract, or seamlessly hand it off to any internal engineering team."
  },
  {
    question: "How do I get started?",
    answer: "Book a 20-minute scoping call. No sales pressure or account executives. We'll map your problem in real-time and tell you immediately if our sprint system is the right fit for your velocity."
  }
];

export function AccordionGrid() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0, 1]));

  const toggleFAQ = (index: number) => {
    setOpenIndices(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <section className="py-16 md:py-32 bg-primary" aria-label="Frequently asked questions">
      <div className="w-full mx-auto px-5 md:px-12 lg:px-20 xl:px-24">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[48px] font-black leading-tight text-white mb-3 md:mb-4">
            Frequently asked questions
          </h2>
          <p className="text-sm md:text-[16px] text-muted">
            Everything you need to know about how we ship.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.has(idx);
            
            return (
              <div 
                key={idx} 
                className={`border rounded-xl md:rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-elevated border-white/20' : 'bg-transparent border-divider hover:border-white/10'}`}
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
                      <div className="px-4 pb-4 md:p-8 md:pt-0 text-sm md:text-[15px] text-[#A3A3A3] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Final Terminal Custom CTA Node */}
          <div className="mt-6 md:mt-8 p-5 md:p-10 rounded-xl md:rounded-2xl border-2 border-accent border-dashed bg-accent/5 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-base md:text-[20px] font-bold text-white mb-1 md:mb-2">Still have questions?</h3>
              <p className="text-xs md:text-[14px] text-body">We're happy to walk through your specific use case.</p>
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
