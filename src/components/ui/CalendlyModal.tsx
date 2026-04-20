import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

export const openCalendly = () => {
  window.dispatchEvent(new CustomEvent("open-calendly"));
};

export function CalendlyProvider() {
  const [isOpen, setIsOpen] = useState(false);
  // Optional: Update this with the real URL when the user provides it
  const calendlyUrl = "https://calendly.com/z3connect-operations/consultationcall?month=2026-04"; 

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-calendly", handleOpen);
    return () => window.removeEventListener("open-calendly", handleOpen);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const rootElement = document.getElementById("root");
  if (!rootElement) return null;

  return (
    <PopupModal
      url={calendlyUrl}
      onModalClose={() => setIsOpen(false)}
      open={isOpen}
      rootElement={rootElement}
    />
  );
}
