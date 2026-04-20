import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-divider">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-24 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Z3Connect Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="flex items-center">
          <Button variant="primary" className="h-10 px-6 text-sm">
            Book a call &rarr;
          </Button>
        </div>
      </div>
    </nav>
  );
}
