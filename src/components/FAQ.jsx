import React from "react";
import { motion } from "framer-motion";
import aboutUsImg from "../assets/aboutus.jpg";
import icon1Img from "../assets/icons1.jpeg"; 
import icon2Img from "../assets/icons2.jpeg"; 

const FAQ = () => {
  const faqData = [
    {
      question: "Can I accept both Paypal and Stripe?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "Where are you from?",
      answer:
        "Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.",
    },
    {
      question: "What available is refund period?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "What is your opening time?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "Can I accept both Paypal and Stripe?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "Can I accept both Paypal and Stripe?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "What available is refund period?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "What available is refund period?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="faq" className="font-sans overflow-hidden">
      {/* --- Part 1: 8 FAQ Questions --- */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 text-3xl md:text-5xl font-bold text-center mb-16 md:mb-24"
          >
            Frequently Ask Questions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-16"
          >
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 hover:text-orange-500 transition-colors cursor-default">
                  {item.question}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm md:text-[15px]">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Part 2: Bank Loan Section --- */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left side: Image with Slide Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <img
                src={aboutUsImg}
                alt="About Us"
                className="w-full rounded-lg shadow-xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            {/* Right side: Features with Staggered Slide */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-12"
            >
              {/* Feature 1: Bank Loan */}
              <div className="flex flex-col sm:flex-row gap-6 items-start group">
                <div className="w-16 h-16 flex-shrink-0  p-2 rounded-xl group-hover:bg-orange-100 transition-colors">
                  <img
                    src={icon1Img}
                    alt="Bank Loan Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-left group-hover:text-orange-500 transition-colors">
                    Bank Loan
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light mb-4 text-left text-sm md:text-base">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a
                    href="#"
                    className="text-orange-500 font-bold hover:underline text-xs tracking-widest uppercase block text-left"
                  >
                    Learn More →
                  </a>
                </div>
              </div>

              {/* Feature 2: Banking Consultation */}
              <div className="flex flex-col sm:flex-row gap-6 items-start group">
                <div className="w-16 h-16 flex-shrink-0 p-2 rounded-xl group-hover:bg-orange-100 transition-colors">
                  <img
                    src={icon2Img}
                    alt="Consultation Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-left group-hover:text-orange-500 transition-colors">
                    Banking Consultation
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light mb-4 text-left text-sm md:text-base">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                  <a
                    href="#"
                    className="text-orange-500 font-bold hover:underline text-xs tracking-widest uppercase block text-left"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
