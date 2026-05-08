import { LeadForm } from "@/components/ui/LeadForm";

export function MidPageCTA() {
  return (
    <section className="py-20 md:py-28 bg-primary border-y border-divider">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-[28px] md:text-[40px] font-black leading-tight">
            Let&apos;s show you what we&apos;ll build for you
          </h2>
          <p className="text-white/60 text-base md:text-lg mt-3 max-w-xl mx-auto">
            Tell us about your business and we&apos;ll send a custom proposal within 24 hours.
          </p>
        </div>
        <div className="w-full max-w-lg">
          <LeadForm variant="full" />
        </div>
      </div>
    </section>
  );
}
