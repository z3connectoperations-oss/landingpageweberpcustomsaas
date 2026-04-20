import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[60] hidden md:block"
        >
          <div className="w-full h-16 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 flex items-center justify-center shadow-2xl">
            <div className="w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-24 flex items-center justify-between">
              <span className="text-white font-bold text-[18px]">
                Get your product live in 4 weeks &rarr;
              </span>
              <Button variant="primary" className="h-10 px-8 text-sm">
                Claim your sprint slot &rarr;
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="md:hidden fixed bottom-6 left-4 right-4 z-50 pointer-events-auto"
        >
          <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-4 flex flex-col gap-3 text-center">
            <span className="text-white font-medium text-[15px]">
              Get your product live in 4 weeks &rarr;
            </span>
            <Button variant="primary" className="w-full py-3 text-[15px]">
              Claim your sprint slot &rarr;
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
