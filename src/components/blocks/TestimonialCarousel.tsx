import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  context: string;
  quote: string;
  author: string;
  role: string;
  logo: string;
  alt: string;
}

interface Props {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const slideRight = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideLeft = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative w-full mx-auto px-6 md:px-12 lg:px-20 xl:px-24 py-16">
      
      {/* Container */}
      <div className="relative bg-[#0A0A0A]/50 border border-white/10 rounded-[32px] p-8 md:p-16 backdrop-blur-md overflow-hidden min-h-[400px] flex flex-col justify-center">
        
        {/* Giant Quote Background */}
        <Quote className="absolute top-8 left-8 w-24 h-24 sm:w-48 sm:h-48 text-white/5 rotate-180 pointer-events-none" />

        <div className="relative z-10 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-accent text-[12px] md:text-[14px] font-bold uppercase tracking-widest mb-6">
                {current.context}
              </span>
              
              <blockquote className="text-[24px] sm:text-[32px] md:text-[40px] font-medium text-white/90 leading-tight mb-12 max-w-4xl font-serif italic">
                "{current.quote}"
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                  <img 
                    src={current.logo} 
                    alt={current.alt} 
                    className="w-[80%] h-[80%] object-contain filter invert opacity-80"
                  />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white">{current.author}</h4>
                  <p className="text-[15px] text-white/50">{current.role}</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-6 md:right-6 flex justify-between z-20 pointer-events-none">
          <button 
            onClick={slideLeft}
            className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black transition-all pointer-events-auto backdrop-blur-md hover:scale-110"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={slideRight}
            className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black transition-all pointer-events-auto backdrop-blur-md hover:scale-110"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Index Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-accent w-6" : "bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
