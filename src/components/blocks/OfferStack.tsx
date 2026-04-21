import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const offerItems = [
  { item: "Full product scoping + wireframes — locked before we write a line of code", value: "($3,500 value)" },
  { item: "Custom codebase — React, Next.js, Node, Python — you own 100% of it", value: "($20,000+ value)" },
  { item: "Weekly Friday demos — working software, every week, no exceptions", value: "(priceless)" },
  { item: "Production deploy + domain setup + SSL + hosting config", value: "($1,500 value)" },
  { item: "Full technical documentation — README, API docs, deployment guide", value: "($2,000 value)" },
  { item: "30 days post-launch support — bugs fixed free, no tickets, just Slack", value: "($3,000 value)" },
  { item: "Founder-level access — you talk to the people building it, not a PM layer", value: "(the real unlock)" },
];

export function OfferStack() {
  return (
    <section className="py-16 md:py-32 bg-primary">
      <div className="w-full mx-auto px-5 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center">
        
        <h2 className="text-[28px] md:text-[40px] font-bold text-center mb-8 md:mb-10 leading-tight">
          Here&apos;s exactly what you get when we build your product:
        </h2>

        <ul className="flex flex-col gap-3 md:gap-5 w-full mb-8 md:mb-10">
          {offerItems.map((offer, idx) => (
            <li key={idx} className="flex items-start gap-3 py-3 border-b border-[#1F1F1F] last:border-0 md:p-4 md:border md:border-divider md:rounded-lg md:bg-elevated/40">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-0.5 leading-snug" />
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-[18px] font-medium text-white leading-snug">
                  {offer.item}
                </p>
                <p className="text-xs md:text-[14px] text-[#666] mt-0.5 italic">
                  {offer.value}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full sm:w-[90%] md:w-[80%] border-t border-dashed border-divider pt-6 md:pt-8 flex flex-col items-center text-center">
          <p className="text-base md:text-[20px] mb-2 line-through text-muted">
            Total real value: $30,000+
          </p>
          <p className="text-xl md:text-[32px] font-bold text-white mb-6 md:mb-8">
            Your fixed price: Starts at $4999.<br/>
            <span className="text-accent text-base md:text-[24px]">Custom-quoted in 48 hours.</span>
          </p>
          
          <Button variant="primary" className="w-full md:w-auto py-4 text-base font-bold rounded-xl md:px-12">
            Book a 20-min scoping call &rarr;
          </Button>
        </div>

      </div>
    </section>
  );
}
