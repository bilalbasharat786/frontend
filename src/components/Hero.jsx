import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../assets/hero_2.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Banking Solutions",
      subTitle: "Reliable & Secure", // Extra detail for human touch
      description:
        "Hamari banking solutions aapke business aur personal goals ko madde-nazar rakh kar banayi gayi hain taake aapka mustaqbil mehfooz rahay.",
    },
    {
      title: "Financing Solutions",
      subTitle: "Grow Your Business",
      description:
        "Asan iqsaat aur kam interest rates ke saath apne karobar ko nayi bulandiyon tak pohnchayen. Hum hain aapke har qadam ke saathi.",
    },
    {
      title: "Savings Accounts",
      subTitle: "Save for Future",
      description:
        "Aaj ki bachat kal ki khush-haali hai. Hamare savings accounts ke saath apne paisay ko barhtay hue dekhein aur sukoon payein.",
    },
  ];

  // Manual click par slide change aur timer reset karne ke liye
  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds is better for readability

    return () => clearInterval(slideInterval);
  }, [currentSlide, slides.length]); // Dependencies added properly

  const scrollToNext = () => {
    const nextSection = document.getElementById("features-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background with subtle Parallax Zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `scale(${1.1 + currentSlide * 0.02})` // Subtle movement on slide change
        }}
      />
      
      {/* Aesthetic Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} // Custom cubic-bezier for smooth feel
            className="flex flex-col items-center"
          >
            {/* Small Label above Title */}
            <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold mb-4">
              {slides[currentSlide].subTitle}
            </span>

            <h1 className="text-5xl md:text-[90px] font-extrabold text-white tracking-tight leading-tight mb-6">
              {slides[currentSlide].title}<span className="text-orange-500">.</span>
            </h1>

            <p className="max-w-2xl text-white/80 text-lg md:text-xl font-light leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* CTA Button - Human touch adds interaction */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-sm font-medium transition-colors"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Custom Pagination Dots */}
        <div className="absolute bottom-20 flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className="group relative p-2"
            >
              <div className={`h-1 transition-all duration-500 rounded-full ${
                currentSlide === index ? "w-10 bg-orange-500" : "w-6 bg-white/30 group-hover:bg-white/60"
              }`} />
            </button>
          ))}
        </div>

        {/* Scroll Mouse Icon */}
        <div
          onClick={scrollToNext}
          className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-2 group"
        >
          <span className="text-[10px] text-white/50 uppercase tracking-widest group-hover:text-white transition-colors">Scroll</span>
          <div className="w-[26px] h-[45px] border-2 border-white/30 rounded-full flex justify-center p-1.5 group-hover:border-white transition-colors">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-orange-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
