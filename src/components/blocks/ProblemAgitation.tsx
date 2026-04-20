import { X } from "lucide-react";
import { openCalendly } from "@/components/ui/CalendlyModal";

export function ProblemAgitation() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-24 flex justify-center">
        <div className="max-w-[800px] w-full text-left flex flex-col items-start">
        
          <h2 className="text-[32px] md:text-[48px] font-bold leading-tight mb-6">
            You didn&apos;t start this company to chase developers.
          </h2>
          
          <p className="text-[18px] text-muted mb-10 w-full">
            You&apos;ve probably been here already:
          </p>

          <ul className="flex flex-col gap-6 w-full text-left mb-12">
            <li className="flex items-start gap-4">
              <X className="w-6 h-6 text-danger flex-shrink-0 mt-0.5" />
              <span className="text-[20px] leading-relaxed">
                <strong className="text-white">The $80K quote</strong> from a US agency that comes with a 6-month Gantt chart and an account manager you&apos;ll never speak to.
              </span>
            </li>
            
            <li className="flex items-start gap-4">
              <X className="w-6 h-6 text-danger flex-shrink-0 mt-0.5" />
              <span className="text-[20px] leading-relaxed">
                <strong className="text-white">The Upwork spiral</strong> — 4 freelancers, 3 rebuilds, and an app that still breaks on login.
              </span>
            </li>

            <li className="flex items-start gap-4">
              <X className="w-6 h-6 text-danger flex-shrink-0 mt-0.5" />
              <span className="text-[20px] leading-relaxed">
                <strong className="text-white">The no-code wall</strong> — Bubble was great until you hit 500 users and the whole thing froze.
              </span>
            </li>

            <li className="flex items-start gap-4">
              <X className="w-6 h-6 text-danger flex-shrink-0 mt-0.5" />
              <span className="text-[20px] leading-relaxed">
                <strong className="text-white">The &quot;I&apos;ll just hire someone&quot;</strong> — 9 weeks of interviews, 2 bad hires, and your product still isn&apos;t shipped.
              </span>
            </li>
          </ul>

          <p className="text-[24px] font-bold text-white w-full">
            Meanwhile your competitor launched.
          </p>

          <button
            onClick={openCalendly}
            className="text-white text-[14px] mt-4 cursor-pointer bg-transparent border-0 p-0 hover:underline underline-offset-2"
          >
            Book a call before your next sprint fills &rarr;
          </button>
          
        </div>
      </div>
    </section>
  );
}
