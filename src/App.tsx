import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSplit } from "@/components/blocks/HeroSplit";
import { ProblemAgitation } from "@/components/blocks/ProblemAgitation";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { OfferStack } from "@/components/blocks/OfferStack";
import { ProofStack } from "@/components/blocks/ProofStack";
import { ClientMarquee } from "@/components/blocks/ClientMarquee";
import { VerticalTimeline } from "@/components/blocks/VerticalTimeline";
import { AccordionGrid } from "@/components/blocks/AccordionGrid";
import { FullBleedCTA } from "@/components/blocks/FullBleedCTA";
import { CalendlyProvider } from "@/components/ui/CalendlyModal";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { SEOSchema } from "@/components/SEOSchema";


import { TeamSection } from "@/components/blocks/TeamSection";
import { TestimonialCarousel } from "@/components/blocks/TestimonialCarousel";
import { ValueComparison } from "@/components/blocks/ValueComparison";

// Split testimonials for the two separate carousels
const testimonialsSetA = [
  { context: "Handling high-traffic financial infrastructure —", quote: "Z3Connect built our entire dashboard. 100k+ users and not a single glitch.", author: "DeFi Ecosystem", role: "Lead Developer", logo: "/clients/safulogo.png", alt: "Safuu" },
  { context: "Scaling internal operations seamlessly —", quote: "Finally, a payroll system that actually works for our 500+ employees.", author: "Meta Giants", role: "HR Operations", logo: "/clients/Metagiants_logo.png", alt: "Meta Giants" },
  { context: "Reducing quoting errors safely —", quote: "The AR quoting system reduced our estimation error by 90%.", author: "Atom Infra", role: "Chief Architect", logo: "/clients/atominfra_logo.png", alt: "Atom Infra" },
];

const testimonialsSetB = [
  { context: "Revamping the sales pipeline in weeks —", quote: "Our lead conversion went up by 40% after the new automated CRM.", author: "Right Choice", role: "Founding Partner", logo: "/clients/RIGHT CHOICElogo.png", alt: "Right Choice" },
  { context: "Delivering reliable logistics software —", quote: "Professional, reliable, and incredibly fast at shipping updates.", author: "MWI Groups", role: "Tech Operations", logo: "/clients/mwilogo.svg", alt: "MWI Groups" },
  { context: "Tracking teams with zero latency —", quote: "Real-time tracking for 100+ riders — flawlessly executed.", author: "Pocket Delivery", role: "Logistics Head", logo: "/clients/pocketdeliverywordlogo.svg", alt: "Pocket Delivery" },
];

export default function App() {
  return (
    <>
      <SEOSchema />
      <Navbar />
      <main role="main" className="flex-1 mt-20"> 
        <HeroSplit />
        <ProblemAgitation />
        <ValueComparison />
        <FeatureGrid />
        <OfferStack />
        <ProofStack />
        <TestimonialCarousel testimonials={testimonialsSetA} />
        <ClientMarquee />
        <TeamSection />
        <VerticalTimeline />
        <TestimonialCarousel testimonials={testimonialsSetB} />
        <AccordionGrid />
        <FullBleedCTA />
      </main>
      <Footer />
      <CalendlyProvider />
      <MobileCTA />
    </>
  );
}
