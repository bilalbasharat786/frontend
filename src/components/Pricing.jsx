import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "47",
      features: [
        { text: "Officia quaerat eaque neque", active: true },
        { text: "Possimus aut consequuntur incidunt", active: true },
        { text: "Lorem ipsum dolor sit amet", active: false },
        { text: "Consectetur adipisicing elit", active: false },
        { text: "Dolorum esse odio quas architecto sint", active: false },
      ],
      buttonClass: "bg-slate-600 hover:bg-slate-700",
    },
    {
      name: "Premium",
      price: "200",
      features: [
        { text: "Officia quaerat eaque neque", active: true },
        { text: "Possimus aut consequuntur incidunt", active: true },
        { text: "Lorem ipsum dolor sit amet", active: true },
        { text: "Consectetur adipisicing elit", active: true },
        { text: "Dolorum esse odio quas architecto sint", active: false },
      ],
      buttonClass: "bg-orange-500 hover:bg-orange-600",
      featured: true, 
    },
    {
      name: "Professional",
      price: "750",
      features: [
        { text: "Officia quaerat eaque neque", active: true },
        { text: "Possimus aut consequuntur incidunt", active: true },
        { text: "Lorem ipsum dolor sit amet", active: true },
        { text: "Consectetur adipisicing elit", active: true },
        { text: "Dolorum esse odio quas architecto sint", active: true },
      ],
      buttonClass: "bg-slate-600 hover:bg-slate-700",
    },
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ repeat: true }}
          transition={{ duration: 0.6 }}
          className="text-orange-500 text-4xl md:text-5xl font-bold text-center mb-16 md:mb-24"
        >
          Pricing
        </motion.h2>

        {/* Pricing Cards Grid - Responsive columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ repeat: true, amount: 0.2 }}
              whileHover={{ scale: plan.featured ? 1.05 : 1.03, zIndex: 20 }}
              className={`bg-white p-8 md:p-12 text-center transition-all relative ${
                plan.featured 
                ? 'shadow-2xl z-10 py-16 md:py-24 border-t-8 border-orange-500 rounded-lg lg:rounded-none lg:scale-110' 
                : 'border border-gray-100 shadow-sm rounded-lg lg:rounded-none'
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 uppercase tracking-widest">{plan.name}</h3>
              
              <div className="flex justify-center items-baseline mb-10">
                <span className="text-orange-500 text-3xl md:text-4xl font-bold">$</span>
                <span className="text-orange-500 text-5xl md:text-7xl font-bold mx-1">{plan.price}</span>
                <span className="text-gray-400 text-sm md:text-base font-light">/ year</span>
              </div>

              {/* Features List */}
              <ul className="space-y-5 mb-12 text-left inline-block w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-4 text-[14px] md:text-[15px] ${feature.active ? 'text-gray-600' : 'text-gray-300'}`}>
                    <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full text-[10px] ${feature.active ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {feature.active ? '✓' : '✕'}
                    </span>
                    <span className={!feature.active ? 'line-through opacity-50' : ''}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buy Now Button */}
              <motion.div whileTap={{ scale: 0.95 }}>
                <button className={`w-full ${plan.buttonClass} text-white px-8 py-4 rounded-full font-bold uppercase text-[12px] tracking-widest transition-all shadow-lg`}>
                  Buy Now
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;