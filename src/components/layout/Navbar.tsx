import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-[#1F1F1F] h-14 md:h-20">
      <div className="w-full mx-auto px-5 md:px-12 lg:px-20 xl:px-24 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Z3Connect Logo"
            className="h-7 md:h-10 w-auto object-contain"
          />
        </div>
        <div className="flex items-center">
          <Button variant="primary" className="h-10 px-4 md:px-6 text-sm font-bold rounded-lg">
            Book a call &rarr;
          </Button>
        </div>
      </div>
    </nav>
  );
}
