import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Animation library
// Assets import
import p1 from '../assets/person_1.jpg';
import p2 from '../assets/person_2.jpg';
import p3 from '../assets/person_3.jpg';
import p4 from '../assets/person_4.jpg';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);

  const reviews = [
    {
      name: "Robert Spears",
      img: p1,
      text: "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”"
    },
    {
      name: "James Miller",
      img: p2,
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.”"
    },
    {
      name: "Sarah Jenkins",
      img: p3,
      text: "“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”"
    },
    {
      name: "Linda Adams",
      img: p4,
      text: "“The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.”"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Main Heading with Scroll Animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-orange-500 text-4xl md:text-5xl font-bold mb-12 md:mb-16"
        >
          Happy Customers
        </motion.h2>

        {/* Content Wrapper with AnimatePresence for smooth switching */}
        <div className="relative min-h-[300px] md:min-h-[250px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Review Text */}
              <p className="text-gray-400 text-lg md:text-xl italic font-light leading-relaxed mb-10 max-w-3xl mx-auto px-2">
                {reviews[activeTab].text}
              </p>

              {/* User Info (Image & Name) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <img 
                  src={reviews[activeTab].img} 
                  alt={reviews[activeTab].name} 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-4 shadow-lg border-2 border-orange-100"
                />
                <span className="text-gray-600 font-semibold tracking-wide">
                  {reviews[activeTab].name}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-4 mt-12 md:mt-16">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="relative p-2 group"
            >
              <span className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeTab === index ? 'bg-orange-500 scale-125' : 'bg-gray-200 group-hover:bg-gray-300'
              }`} />
              {/* Tooltip or Ring Effect on Active */}
              {activeTab === index && (
                <motion.span 
                  layoutId="activeDot"
                  className="absolute inset-0 border border-orange-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;