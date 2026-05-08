import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

const offerItems = [
  { item: "Full product scoping + interactive wireframes — locked before we touch code" },
  { item: "Custom codebase — React, Next.js, Node, Python — you own 100% of the IP" },
  { item: "Weekly Friday demos — working software, every week, no exceptions" },
  { item: "Production deployment + domain + SSL + hosting configuration" },
  { item: "Full technical documentation — README, API docs, deployment guide, architecture diagram" },
  { item: "30 days post-launch support — bugs fixed free, no tickets, just WhatsApp/Slack" },
  { item: "Founder-level access — you talk directly to the engineers building your product, not a PM layer" },
];

export function OfferStack() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center">
        
        <div className="text-center mb-10 md:mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">The Grand Slam Offer</p>
          <h2 className="text-[28px] md:text-[40px] font-bold leading-tight">
            Here&apos;s exactly what you get when we build your product:
          </h2>
        </div>

        <ul className="flex flex-col gap-0 w-full max-w-4xl mb-8 md:mb-10">
          {offerItems.map((offer, idx) => (
            <li key={idx} className="flex items-start gap-3 md:gap-4 py-4 md:py-5 border-b border-white/5 last:border-0">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-[18px] font-medium text-white leading-snug">
                  {offer.item}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Call to Action Card — contained, visual anchor */}
        <div className="w-full max-w-xl mx-auto bg-white/5 border-2 border-accent/30 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center">
          <p className="text-3xl md:text-5xl font-black text-accent mb-2">
            Fixed-scope. Rapid delivery.
          </p>
          <p className="text-accent/80 text-base md:text-lg font-semibold mb-8">
            Get a custom quote for your product in 24 hours.
          </p>
          
          <Button variant="primary" className="w-full py-4 text-base md:text-lg font-bold">
            Book a 20-min scoping call &rarr;
          </Button>
          
          {/* Guarantee Badge */}
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mt-6 flex items-center gap-3 text-sm text-left w-full">
            <Shield className="w-6 h-6 text-accent flex-shrink-0" />
            <span className="text-white/80">If we don&apos;t hit the agreed scope, you don&apos;t pay the final milestone. No fine print. No &quot;terms and conditions apply.&quot;</span>
          </div>
        </div>

      </div>
    </section>
  );
}
