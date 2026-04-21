import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-[max(16px,env(safe-area-inset-bottom))] bg-black/95 backdrop-blur-sm border-t border-[#1F1F1F] md:hidden">
      <Button variant="primary" className="w-full py-4 text-base font-black rounded-xl active:scale-95 transition-transform duration-100">
        Book a 20-min scoping call &rarr;
      </Button>
      <p className="text-[11px] text-[#666] text-center mt-2">
        Free call · No sales pitch · Fixed-price quote in 24hrs
      </p>
    </div>
  );
}
