import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-primary/95 backdrop-blur-md border-t border-divider z-40 md:hidden flex justify-center animate-in slide-in-from-bottom-full duration-300">
      <Button variant="primary" className="w-full h-14 text-lg">
        Book a 20-min scoping call &rarr;
      </Button>
    </div>
  );
}
