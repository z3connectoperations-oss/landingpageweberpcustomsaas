import { Button } from "@/components/ui/Button";

export function FullBleedCTA() {
  return (
    <section className="min-h-[70vh] md:min-h-[60vh] py-20 md:py-32 w-full bg-gradient-to-br from-accent to-accent-hover text-[#0A0A0A] flex flex-col items-center justify-center text-center px-5 md:px-6">
      <div className="w-full mx-auto px-0 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center">
        
        <h2 className="text-[32px] md:text-[56px] font-black leading-[1.1] tracking-tight mb-3 md:mb-4 text-center">
          Your competitor shipped last month.
        </h2>
        
        <p className="text-sm md:text-[20px] font-bold text-black/80 mb-4 md:mb-6 text-center px-2">
          You can have a working preview in 7 days.
        </p>

        <p className="text-sm md:text-[16px] text-black/70 mb-8 md:mb-10 leading-relaxed font-medium text-center px-2">
          Book a 20-min scoping call. No sales pitch — we&apos;ll map your product, quote a fixed price, and tell you if we&apos;re the wrong fit. Zero friction.
        </p>

        <Button variant="inverted" className="mb-4 w-full max-w-[340px] md:w-auto md:max-w-none py-5 md:h-16 text-lg font-black rounded-xl md:px-10 mx-auto block">
          Let's build your product &rarr;
        </Button>

        <p className="text-xs md:text-[13px] text-black/60 flex items-center justify-center gap-1.5 mt-1 text-center">
          <span>🛡</span>
          If we don't hit the agreed scope, you don't pay the final milestone. No fine print.
        </p>

      </div>
    </section>
  );
}
