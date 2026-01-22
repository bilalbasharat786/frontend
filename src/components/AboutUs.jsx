import React from 'react';
import { motion } from 'framer-motion'; // Animation library
import aboutUsImg from '../assets/aboutus.jpg';

const AboutUs = () => {
  // Animation Variants
  const textFadeIn = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } }
  };

  const imageFadeIn = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } }
  };

  return (
    <section id="about-section" className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading with Slow Fade Up */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold mb-6">
            About Us
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.
          </p>
        </motion.div>

        {/* Content Row: Stacked on Mobile, Side-by-Side on Desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          
          {/* Left Side: Image with Slide-in-Left Animation */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ repeat: true, amount: 0.3 }}
            variants={imageFadeIn}
          >
            {/* Background decorative circle - Hidden on very small screens */}
            <div className="hidden sm:block absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 bg-gray-50 rounded-full -z-10"></div>
            <img 
              src={aboutUsImg} 
              alt="Our Story" 
              className="w-full h-auto  shadow-xl object-cover" 
            />
          </motion.div>

          {/* Right Side: Text with Slide-in-Right Animation */}
          <motion.div 
            className="w-full lg:w-1/2 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ repeat: true, amount: 0.3 }}
            variants={textFadeIn}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-tight">
              We Solve Your Financial Problem
            </h3>
            <div className="space-y-6 text-gray-500 font-light leading-relaxed text-sm md:text-base">
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            
            {/* Action Link if needed */}
           
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;