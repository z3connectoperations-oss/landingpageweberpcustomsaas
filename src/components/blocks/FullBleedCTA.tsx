import { Button } from "@/components/ui/Button";

export function FullBleedCTA() {
  return (
    <section className="min-h-[60vh] py-24 md:py-32 w-full bg-gradient-to-br from-accent to-accent-hover text-[#0A0A0A] flex flex-col items-center justify-center text-center px-6">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center">
        
        <h2 className="text-[40px] md:text-[56px] font-black leading-tight tracking-tight mb-4">
          Your competitor shipped last month.
        </h2>
        
        <p className="text-[20px] font-bold text-black/80 mb-6">
          You can have a working preview in 7 days.
        </p>

        <p className="text-[16px] text-black/70 mb-10 leading-relaxed font-medium">
          Book a 20-min scoping call. No sales pitch — we&apos;ll map your product, quote a fixed price, and tell you if we&apos;re the wrong fit. Zero friction.
        </p>

        <Button variant="inverted" className="mb-4 px-10 h-16 w-full sm:w-auto text-[18px]">
          Let's build your product &rarr;
        </Button>

        <p className="text-[13px] text-black/60 flex items-center justify-center gap-1.5 mt-1">
          <span>🛡</span>
          If we don't hit the agreed scope, you don't pay the final milestone. No fine print.
        </p>

      </div>
    </section>
  );
}
