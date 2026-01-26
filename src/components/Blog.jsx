import React from "react";
import { motion } from "framer-motion";
import blogImg1 from "../assets/img_1.jpg";
import blogImg2 from "../assets/img_4.jpg";
import blogImg3 from "../assets/img_3.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: blogImg1,
      title: "A Basic Guide to Starting a Franchise in the Philippines",
      author: "Ham Brook",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    },
    {
      id: 2,
      image: blogImg2,
      title: "A Basic Guide to Starting a Franchise in the Philippines",
      author: "James Phelps",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    },
    {
      id: 3,
      image: blogImg3,
      title: "A Basic Guide to Starting a Franchise in the Philippines",
      author: "James Phelps",
      date: "Jan 18, 2019",
      category: "News",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    },
  ];

  // Animation Variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const postVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="blog"
      className="py-16 md:py-24 bg-white font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading with Slow Fade In */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-orange-500 text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20"
        >
          Our Blog
        </motion.h2>

        {/* Blog Grid: 1 Col on Mobile, 2 on Tablet, 3 on Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={postVariants}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Section with Hover Zoom */}
              <div className="overflow-hidden mb-8 rounded-sm shadow-sm">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-56 lg:h-64 object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-snug group-hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Meta Data */}
                <div className="flex items-center text-[12px] md:text-[13px] text-gray-400 mb-5 space-x-2 font-medium tracking-wide">
                  <span className="hover:text-gray-600 transition-colors">
                    {post.author}
                  </span>
                  <span className="text-gray-200">•</span>
                  <span>{post.date}</span>
                  <span className="text-gray-200">•</span>
                  <span className="text-orange-500 uppercase">
                    {post.category}
                  </span>
                </div>

                <p className="text-gray-500 leading-relaxed font-light text-[14px] md:text-[15px] mb-6 line-clamp-3 group-hover:text-gray-600 transition-colors">
                  {post.description}
                </p>

                {/* Continue Reading Link with Animated Arrow */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-orange-500 font-bold text-[13px] md:text-[14px] uppercase tracking-widest flex items-center gap-2"
                >
                  Continue Reading <span className="text-lg">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
