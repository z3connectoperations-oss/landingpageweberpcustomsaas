import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProblemAgitation() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 xl:px-24 flex justify-center">
        <div className="max-w-[800px] w-full text-left flex flex-col items-start">
        
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">The Reality Check</p>

          <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.2] md:leading-tight mb-6">
            You didn&apos;t start this company to babysit developers.
          </h2>
          
          <p className="text-base md:text-[18px] text-muted mb-8 md:mb-10 w-full">
            You&apos;ve already been through at least two of these:
          </p>

          <ul className="flex flex-col gap-5 md:gap-7 w-full text-left mb-10 md:mb-12">
            <li className="flex items-start gap-3 md:gap-4">
              <X className="w-4 h-4 md:w-6 md:h-6 text-danger flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-[20px] leading-relaxed">
                <strong className="text-white">The massive agency quote</strong> — 8-month timeline, a &quot;project manager&quot; who copies you on emails but never writes code, and a demo that looks nothing like what you asked for.
              </span>
            </li>
            
            <li className="flex items-start gap-3 md:gap-4">
              <X className="w-4 h-4 md:w-6 md:h-6 text-danger flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-[20px] leading-relaxed">
                <strong className="text-white">The freelancer roulette</strong> — You hired 3 developers from Upwork. One ghosted after the advance. One delivered spaghetti code. The third one&apos;s &quot;almost done&quot; — for the fourth month straight.
              </span>
            </li>

            <li className="flex items-start gap-3 md:gap-4">
              <X className="w-4 h-4 md:w-6 md:h-6 text-danger flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-[20px] leading-relaxed">
                <strong className="text-white">The jugaad trap</strong> — Bubble was fine for 200 users. Then it froze. Then you duct-taped Zapier to Airtable to Google Sheets and called it a &quot;system.&quot; It isn&apos;t. It&apos;s a house of cards.
              </span>
            </li>

            <li className="flex items-start gap-3 md:gap-4">
              <X className="w-4 h-4 md:w-6 md:h-6 text-danger flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-[20px] leading-relaxed">
                <strong className="text-white">The &quot;let me hire in-house&quot; math</strong> — Salary for a decent full-stack dev. 3 months to find one. 2 months before they&apos;re productive. Month 6: they quit for a 40% hike. Product still isn&apos;t shipped.
              </span>
            </li>
          </ul>

          <p className="text-2xl md:text-[32px] font-black text-accent w-full mt-2 pt-8 border-t border-divider">
            Meanwhile, your competitor raised their next round. With a product that works.
          </p>

          <div className="mt-6">
            <Button variant="secondary" className="text-sm md:text-base px-6 h-12">
              Book a call before your next sprint slot fills &rarr;
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
