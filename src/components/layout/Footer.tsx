import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-divider bg-primary py-8 md:py-12">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 lg:px-20 xl:px-24 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
          <img
            src="/logo.png"
            alt="Z3Connect Logo"
            className="h-6 md:h-8 w-auto object-contain opacity-80"
          />
          <p className="text-xs md:text-sm text-muted">Building software that ships</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-xs md:text-sm text-muted">
          <span>Nagercoil, 629002</span>
          <a href="mailto:support@z3connect.com" className="hover:text-white transition-colors">
            support@z3connect.com
          </a>
          <span>&copy; {currentYear} Z3Connect. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
