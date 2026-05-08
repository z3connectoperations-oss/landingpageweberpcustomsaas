import { LeadForm } from "@/components/ui/LeadForm";
import { Shield } from "lucide-react";

export function FullBleedCTA() {
  return (
    <section className="min-h-[60vh] py-20 md:py-28 w-full bg-gradient-to-br from-accent to-accent-hover text-[#0A0A0A] flex flex-col items-center justify-center text-center px-5 md:px-6">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        
        <h2 className="text-[32px] md:text-[56px] font-black leading-[1.1] tracking-tight mb-3 md:mb-4 text-center text-black">
          Your competitor shipped last quarter. You&apos;re still interviewing developers.
        </h2>
        
        <p className="text-lg md:text-xl font-bold text-black/80 mb-4 md:mb-6 text-center">
          You can have working software in 7 days.
        </p>

        <p className="text-sm md:text-base text-black/60 mb-8 md:mb-10 leading-relaxed font-medium text-center max-w-xl">
          Book a 20-minute scoping call. No sales pitch. We&apos;ll map your product, provide a fixed quote, and tell you honestly if we&apos;re the wrong fit.
        </p>

        <div className="w-full max-w-md mb-6">
          <LeadForm variant="compact" onGreenBg={true} />
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-black/80 mt-2">
          <Shield className="w-4 h-4" />
          <span>If we don&apos;t hit the agreed scope, you don&apos;t pay the final milestone.</span>
        </div>

      </div>
    </section>
  );
}
