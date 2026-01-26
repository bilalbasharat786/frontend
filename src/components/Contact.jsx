import React from "react";
import { motion } from "framer-motion"; // Animation library
// Icons import
import iconAddress from "../assets/icons3.jpeg";
import iconPhone from "../assets/icons4.jpeg";
import iconEmail from "../assets/icons5.jpeg";

const Contact = () => {
  // Animation Variants for top info cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact-section"
      className="py-16 md:py-24 bg-gray-50 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-orange-500 text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20"
        >
          Contact Us
        </motion.h2>

        {/* --- Top Part: Contact Info (3 Columns Responsive) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-20 md:mb-24"
        >
          {/* Address */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center  rounded-full shadow-sm mb-6 ">
              <img
                src={iconAddress}
                alt="Address"
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
            </div>
            <p className="text-gray-400 font-light max-w-[250px] leading-relaxed text-sm md:text-base">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-sm mb-6 ">
              <img
                src={iconPhone}
                alt="Phone"
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
            </div>
            <p className="text-orange-500 font-medium text-lg">
              +1 232 3235 324
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center group sm:col-span-2 md:col-span-1"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center  rounded-full shadow-sm mb-6 ">
              <img
                src={iconEmail}
                alt="Email"
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
            </div>
            <p className="text-orange-500 font-medium text-lg">
              youremail@domain.com
            </p>
          </motion.div>
        </motion.div>

        {/* --- Bottom Part: Contact Form Box (Slide Up Animation) --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto bg-white p-8 md:p-16 shadow-xl rounded-xl border border-gray-100"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-left border-b border-gray-100 pb-4">
            Contact Form
          </h3>

          <form className="space-y-6 md:space-y-8">
            {/* Name Row (1 col on mobile, 2 on md) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col items-start w-full">
                <label className="text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full h-10 border border-stone-300 bg-white p-4 rounded-full focus:outline-none focus:border-orange-500 focus:bg-white transition-all "
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full h-10 border border-stone-300 bg-white p-4 rounded-full focus:outline-none focus:border-orange-500 focus:bg-white transition-all "
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col items-start w-full">
              <label className="text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                className="w-full h-10 border border-stone-300 bg-white p-4 rounded-full focus:outline-none focus:border-orange-500 focus:bg-white transition-all "
              />
            </div>

            {/* Subject Field */}
            <div className="flex flex-col items-start w-full">
              <label className="text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                className="w-full h-10 border border-stone-300 bg-white p-4 rounded-full focus:outline-none focus:border-orange-500 focus:bg-white transition-all "
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col items-start w-full">
              <label className="text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wide">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your notes or questions here..."
                className="w-full border border-stone-300 bg-white p-6 rounded-3xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all "
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-left"
            >
              <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg uppercase text-xs tracking-widest">
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
