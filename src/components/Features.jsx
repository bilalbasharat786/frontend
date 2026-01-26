import React from "react";
import { motion } from "framer-motion";
import walletIcon from "../assets/001-wallet.svg";
import cartIcon from "../assets/004-cart.svg";
import cardIcon from "../assets/006-credit-card.svg";
import aboutImg from "../assets/about_2.jpg";

const Features = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const features = [
    {
      title: "Money Savings",
      icon: walletIcon,
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      title: "Online Shoppings",
      icon: cartIcon,
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      title: "Credit / Debit Cards",
      icon: cardIcon,
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <section
      id="features-section"
      className="py-16 md:py-24 bg-white font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Features Grid - Mobile (1 col), Tablet (2 col), Laptop (3 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 text-center mb-24 md:mb-32">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ repeat: true, amount: 0.2 }}
              variants={fadeInUp}
              className="flex flex-col items-center group"
            >
              <div className="mb-6 md:mb-8 transform transition duration-500 group-hover:-translate-y-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Amortization Section - Responsive Flex */}
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* Left: Image with Slow Motion Fade In */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ repeat: true }}
            transition={{ duration: 2 }}
          >
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Right: Content with Slow Motion Fade In */}
          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ repeat: true }}
            transition={{ duration: 2, delay: 1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight leading-tight">
              Amortization Computation
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-base md:text-lg font-light">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Officia quaerat eaque neque",
                "Lorem ipsum dolor sit amet",
                "Consectetur adipisicing elit",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-gray-500 font-light"
                >
                  <span className="text-green-500 text-lg md:text-xl font-bold">
                    ✓
                  </span>
                  <span className="text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>

            {/* Responsive Form */}
            <form className="flex flex-col sm:flex-row gap-4 items-center w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 md:px-10 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-md active:scale-95 uppercase text-xs tracking-widest"
              >
                Submit Email
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
