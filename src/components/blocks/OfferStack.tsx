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
    <section className="py-24 md:py-32 bg-primary">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center">
        
        <h2 className="text-[32px] md:text-[40px] font-bold text-center mb-10 leading-tight">
          Here&apos;s exactly what you get when we build your product:
        </h2>

        <ul className="flex flex-col gap-5 w-full mb-10">
          {offerItems.map((offer, idx) => (
            <li key={idx} className="flex items-start gap-4 p-4 border border-divider rounded-lg bg-elevated/40">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div className="flex-1 text-[16px] md:text-[18px] leading-relaxed flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                <span>{offer.item}</span>
                <span className="text-[14px] text-muted italic whitespace-nowrap">{offer.value}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full sm:w-[90%] md:w-[80%] border-t border-dashed border-divider pt-8 flex flex-col items-center text-center">
          <p className="text-[20px] mb-2 line-through text-muted">
            Total real value: $30,000+
          </p>
          <p className="text-[24px] md:text-[32px] font-bold text-white mb-8">
            Your fixed price: Starts at $5,000.<br/>
            <span className="text-accent text-[20px] md:text-[24px]">Custom-quoted in 48 hours.</span>
          </p>
          
          <Button variant="primary" className="w-full sm:w-auto px-12">
            Book a 20-min scoping call &rarr;
          </Button>
        </div>

      </div>
    </section>
  );
}
