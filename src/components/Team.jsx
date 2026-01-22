import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Assets import
import p1 from '../assets/person_1.jpg';
import p2 from '../assets/person_2.jpg';
import p3 from '../assets/person_3.jpg';
import p4 from '../assets/person_4.jpg';
import p5 from '../assets/person_5.jpg';
import p6 from '../assets/person_6.jpg';
import p7 from '../assets/person_7.jpg';
import p8 from '../assets/person_8.jpg';

const Team = () => {
  const teamMembers = [
    { name: "Kaiara Spencer", role: "FINANCE MANAGER", img: p1 },
    { name: "Dave Simpson", role: "MARKETING MANAGER", img: p2 },
    { name: "Ben Thompson", role: "ACCOUNTANT", img: p3 },
    { name: "Kyla Stewart", role: "ACCOUNTANT", img: p4 },
    { name: "Kaiara Spencer", role: "ACCOUNTANT", img: p5 },
    { name: "Dave Simpson", role: "BANK TELLER", img: p6 },
    { name: "Ben Thompson", role: "BANK TELLER", img: p7 },
    { name: "Chris Stewart", role: "BANK TELLER", img: p8 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="team-section" className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ repeat: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-orange-500 text-4xl md:text-5xl font-bold mb-6">
            Meet Team
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg font-light leading-relaxed">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ repeat: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col group"
            >
              {/* Image Container with Social Icons Overlay */}
              <div className="relative overflow-hidden mb-5 rounded-sm shadow-sm transition-all duration-300">
                
                {/* Main Image */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-auto object-cover aspect-[4/5]" 
                />

                {/* Orange Social Bar (Image wali logic) */}
                <div className="absolute top-0 left-0 h-full w-12 bg-orange-500 flex flex-col items-center justify-start pt-8 gap-6 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                  <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              
              {/* Name & Role */}
              <div className="text-left">
                <h3 className="text-xl font-medium text-gray-800 tracking-tight group-hover:text-orange-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] text-gray-300 font-bold mt-1 tracking-widest uppercase">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;