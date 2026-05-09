import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function StickyDesktopCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after hero section scrolls out of view (~700px)
      setIsVisible(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 hidden md:block transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
    >
      <div className="bg-primary/95 backdrop-blur-md border-t border-divider py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-sm text-white/70">
              <strong className="text-white">June 2026 sprints</strong> — 2 slots available. Fixed-scope, rapid delivery.
            </p>
          </div>
          <Button variant="primary" className="h-10 px-6 text-sm font-bold">
            Book Free Demo &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}
