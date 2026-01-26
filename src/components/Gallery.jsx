import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";
import img5 from "../assets/img_5.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("ALL");
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const allImages = [
    { id: 1, src: img1, category: ["ALL", "EVENTS", "PARTY", "HOLIDAYS"] },
    { id: 2, src: img2, category: ["ALL", "EVENTS", "PARTY", "HOLIDAYS"] },
    { id: 3, src: img3, category: ["ALL", "EVENTS", "PARTY", "HOLIDAYS"] },
    { id: 4, src: img4, category: ["ALL", "EVENTS", "PARTY"] },
    { id: 5, src: img5, category: ["ALL", "EVENTS"] },
    { id: 6, src: img1, category: ["ALL"] },
    { id: 7, src: img2, category: ["ALL"] },
    { id: 8, src: img3, category: ["ALL"] },
  ];

  const slides = [
    {
      id: "01.",
      title: "Online Applications",
      img: img1,
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: "02.",
      title: "Get Approval",
      img: img2,
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: "03.",
      title: "Receive Your Funding",
      img: img3,
      desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const filteredImages = allImages.filter((img) =>
    img.category.includes(filter),
  );

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 bg-white font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ repeat: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold mb-8 text-center">
            Gallery
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {["ALL", "EVENTS", "PARTY", "HOLIDAYS"].map((btn) => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-6 md:px-8 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest transition-all ${
                  filter === btn
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onClick={() => setSelectedImg(image.src)}
                className="overflow-hidden rounded-sm group cursor-pointer relative"
              >
                <img
                  src={image.src}
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  alt="Gallery"
                />
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ repeat: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-sm md:text-base">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[450px]">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <img
                src={slides[activeSlide].img}
                alt="Step"
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>

      
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 flex bg-orange-500 shadow-xl z-10">
              <button
                onClick={() =>
                  setActiveSlide(
                    (activeSlide - 1 + slides.length) % slides.length,
                  )
                }
                className="p-4 md:p-5 text-white hover:bg-orange-600 transition border-r border-orange-400"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setActiveSlide((activeSlide + 1) % slides.length)
                }
                className="p-4 md:p-5 text-white hover:bg-orange-600 transition"
              >
                →
              </button>
            </div>
          </motion.div>

        
          <motion.div
            key={`text-${activeSlide}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-left"
          >
            <h3 className="text-orange-500 text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              <span className="block text-3xl md:text-4xl opacity-50 mb-2">
                {slides[activeSlide].id}
              </span>
              {slides[activeSlide].title}
            </h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light mb-8 max-w-lg">
              {slides[activeSlide].desc}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-orange-600 transition shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

    
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={selectedImg}
              className="max-w-full max-h-full object-contain shadow-2xl"
              alt="Large View"
            />
            <button className="absolute top-10 right-10 text-white text-3xl hover:text-orange-500 transition">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
