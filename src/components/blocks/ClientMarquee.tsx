import React from "react";

const clientLogos = [
  { src: "/clients/atominfra_logo.png", alt: "Atom Infra", subtitle: "Infrastructure development" },
  { src: "/clients/Metagiants_logo.png", alt: "Meta Giants", subtitle: "Hyperlocal hiring platform" },
  { src: "/clients/RIGHT CHOICElogo.png", alt: "Right Choice", subtitle: "Sales CRM & automation" },
  { src: "/clients/safulogo.png", alt: "Safuu", subtitle: "DeFi ecosystem dashboard" },
  { src: "/clients/mwilogo.svg", alt: "MWI Groups", subtitle: "Software operations" },
  { src: "/clients/faam_logo.png", alt: "FAAM Design", subtitle: "Design & engineering" },
  { src: "/clients/Lamstacks-logo.svg", alt: "Lamstacks", subtitle: "Tech infrastructure" },
  { src: "/clients/pocketdeliverywordlogo.svg", alt: "Pocket Delivery", subtitle: "Last-mile delivery platform" },
];

export function ClientMarquee() {
  return (
    <section className="py-16 md:py-20 bg-primary border-y border-divider flex flex-col items-center">
      <p className="text-[14px] uppercase tracking-wider text-muted font-bold mb-10 text-center">
        Trusted by high-growth companies
      </p>

      {/* Marquee Track Container */}
      <div className="relative w-full max-w-[1500px] flex overflow-hidden mask-horizontal-gradient">
        
        {/* Scrolling Inner */}
        <div className="flex animate-marquee min-w-full w-max">
          {clientLogos.map((logo, idx) => (
             <div key={idx} className="flex-shrink-0 mx-8 md:mx-16 flex flex-col items-center justify-center gap-3 w-[160px] md:w-[200px]">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain filter invert mix-blend-screen opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
              <span className="text-[12px] text-muted/60 text-center leading-tight max-w-full truncate">{logo.subtitle}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex-shrink-0 mx-8 md:mx-16 flex flex-col items-center justify-center gap-3 w-[160px] md:w-[200px]">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain filter invert mix-blend-screen opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
              <span className="text-[12px] text-muted/60 text-center leading-tight max-w-full truncate">{logo.subtitle}</span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .mask-horizontal-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
