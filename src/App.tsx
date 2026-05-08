import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSplit } from "@/components/blocks/HeroSplit";
import { ProblemAgitation } from "@/components/blocks/ProblemAgitation";
import { OfferStack } from "@/components/blocks/OfferStack";
import { MidPageCTA } from "@/components/blocks/MidPageCTA";
import { ProofStack } from "@/components/blocks/ProofStack";
import { ClientMarquee } from "@/components/blocks/ClientMarquee";
import { VerticalTimeline } from "@/components/blocks/VerticalTimeline";
import { AccordionGrid } from "@/components/blocks/AccordionGrid";
import { FullBleedCTA } from "@/components/blocks/FullBleedCTA";
import { CalendlyProvider } from "@/components/ui/CalendlyModal";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { SEOSchema } from "@/components/SEOSchema";
import { StickyDesktopCTA } from "@/components/layout/StickyDesktopCTA";
import { TestimonialCarousel } from "@/components/blocks/TestimonialCarousel";
import { ValueComparison } from "@/components/blocks/ValueComparison";

// All testimonials consolidated into one high-impact section
const allTestimonials = [
  { context: "Handling high-traffic financial infrastructure —", quote: "Z3Connect built our entire dashboard. 100k+ users and not a single glitch.", author: "DeFi Ecosystem", role: "Lead Developer", logo: "/clients/safulogo.png", alt: "Safuu" },
  { context: "Revamping the sales pipeline in weeks —", quote: "Our lead conversion went up by 40% after the new automated CRM. Shipped in 19 days.", author: "Right Choice", role: "Founding Partner", logo: "/clients/RIGHT CHOICElogo.png", alt: "Right Choice" },
  { context: "Scaling internal operations seamlessly —", quote: "Finally, a payroll system that actually works for our 500+ employees. Saved us months of development time vs agency quotes.", author: "Meta Giants", role: "HR Operations", logo: "/clients/Metagiants_logo.png", alt: "Meta Giants" },
  { context: "Reducing quoting errors safely —", quote: "The AR quoting system reduced our estimation error by 90%. ROI in the first month.", author: "Atom Infra", role: "Chief Architect", logo: "/clients/atominfra_logo.png", alt: "Atom Infra" },
  { context: "Delivering reliable logistics software —", quote: "Real-time tracking for 100+ riders — flawlessly executed. Shipped in 3 weeks flat.", author: "MWI Groups", role: "Tech Operations", logo: "/clients/mwilogo.svg", alt: "MWI Groups" },
  { context: "Tracking teams with zero latency —", quote: "From kickoff call to production in 22 days. No other team comes close.", author: "Pocket Delivery", role: "Logistics Head", logo: "/clients/pocketdeliverywordlogo.svg", alt: "Pocket Delivery" },
];

export default function App() {
  return (
    <>
      <SEOSchema />
      <Navbar />
      <main role="main" className="flex-1 mt-14 md:mt-20 pb-24 md:pb-0"> 
        <HeroSplit />
        <ProblemAgitation />
        <ValueComparison />
        <VerticalTimeline />
        <OfferStack />
        <MidPageCTA />
        <ProofStack />
        <ClientMarquee />
        <TestimonialCarousel testimonials={allTestimonials} />
        <AccordionGrid />
        <FullBleedCTA />
      </main>
      <Footer />
      <CalendlyProvider />
      <MobileCTA />
      <StickyDesktopCTA />
    </>
  );
}
