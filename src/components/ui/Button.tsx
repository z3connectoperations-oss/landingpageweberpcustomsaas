import * as React from "react";
import { cn } from "@/lib/utils";
import { openCalendly } from "./CalendlyModal";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverted";
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", onClick, href, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold px-8 h-14 rounded-lg transition-all duration-200 text-lg cursor-pointer";

    const variants = {
      primary:
        "bg-accent text-[#0A0A0A] border hover:bg-accent-hover hover:-translate-y-[2px] shadow-[0_8px_20px_rgba(34,197,94,0.15)] border-transparent",
      secondary:
        "bg-transparent text-white border border-white hover:bg-white/5",
      inverted:
        "bg-[#0A0A0A] border border-accent text-white hover:bg-white/10",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      } else {
        // Default action: open Calendly
        openCalendly();
      }
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], className)}
        >
          {props.children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
