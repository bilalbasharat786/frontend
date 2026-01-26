import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../assets/hero_2.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Banking Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!",
    },
    {
      title: "Financing Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!",
    },
    {
      title: "Savings Accounts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!",
    },
  ];

  // Har 3 second baad auto-change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToFeatures = () => {
    const nextSection = document.getElementById("features-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="h-screen bg-cover bg-center relative font-sans overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-[#b8b2a6b3] flex flex-col items-center justify-center text-center px-4 text-white">
        {/* AnimatePresence slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 100, opacity: 0 }} // Right side se start
            animate={{ x: 0, opacity: 1 }} // Center mein aana
            exit={{ x: -100, opacity: 0 }} // Left side par nikal jana
            transition={{ duration: 0.8, ease: "easeOut" }} // Slow motion effect
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-[85px] font-bold tracking-[0.1em] leading-none mb-4 capitalize">
              {slides[currentSlide].title}
            </h1>

            <p className="max-w-3xl mt-4 text-lg md:text-xl font-normal opacity-90 leading-snug">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* --- 3 Dots Navigation --- */}
        <div className="flex gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-4" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Mouse Scroll Icon */}
        <div
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-all"
        >
          <div className="w-[24px] h-[40px] border-2 border-white rounded-full flex justify-center p-1 opacity-80">
            <div className="w-1 h-1.5 bg-white rounded-full animate-bounce mt-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
