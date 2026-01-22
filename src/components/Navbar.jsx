import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const dropdownLinks = [
    { name: "Team", id: "team-section" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQ", id: "faq" },
    { name: "Gallery", id: "gallery" },
    { name: "Services", id: "services-section" },
    { name: "Testimonials", id: "testimonials" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-4 transition-all duration-300 flex items-center justify-between ${
          scrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent text-white border-b border-white/20'
        }`}
      >
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-tight cursor-pointer ${scrolled ? 'text-orange-500' : 'text-white'}`} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          Banker<span className="text-orange-500">.</span>
        </div>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-[13px] font-medium tracking-[0.1em] uppercase items-center">
            <li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer hover:text-orange-500 transition">Home</li>
            
            <li className="relative group py-2">
              <div onClick={() => handleScroll('about-section')} className="cursor-pointer hover:text-orange-500 transition flex items-center gap-1">
                About Us <span className="text-[10px]">▼</span>
              </div>
              <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 py-4 shadow-xl rounded-sm border-t-2 border-orange-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {dropdownLinks.map((link, index) => (
                  <li key={index} onClick={() => handleScroll(link.id)} className="px-6 py-2 hover:text-orange-500 cursor-pointer transition text-[14px]">
                    {link.name}
                  </li>
                ))}
              </ul>
            </li>

            <li onClick={() => handleScroll('blog')} className="cursor-pointer hover:text-orange-500 transition">Blog</li>
            <li onClick={() => handleScroll('contact-section')} className="cursor-pointer hover:text-orange-500 transition">Contact</li>
          </ul>
          {/* ADDED: Desktop Social Icons */}
          <div className="flex gap-5 text-sm ml-4 ">
            <a href="#" className={`transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={`transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className={`transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-orange-500' : 'text-white hover:text-orange-400'}`}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        {/* --- Mobile Hamburger --- */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`text-2xl focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar (Right Side - Half Width) --- */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-8 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()} // Click box ke andar rokne ke liye
        >
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-gray-800 hover:text-orange-500">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <ul className="flex flex-col gap-5 text-[15px] font-semibold text-gray-800 uppercase tracking-wider">
            <li className="cursor-pointer hover:text-orange-500" onClick={() => { window.scrollTo({top:0, behavior:'smooth'}); setIsMobileMenuOpen(false); }}>Home</li>
            
            {/* Mobile Dropdown Logic */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-orange-500" onClick={() => setIsAboutOpen(!isAboutOpen)}>
                About Us <FontAwesomeIcon icon={isAboutOpen ? faChevronUp : faChevronDown} className="text-xs" />
              </div>
              {isAboutOpen && (
                <ul className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-orange-500 pl-4">
                  {dropdownLinks.map((link, index) => (
                    <li key={index} onClick={() => handleScroll(link.id)} className="text-gray-500 hover:text-orange-500 cursor-pointer text-sm normal-case">
                      {link.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="cursor-pointer hover:text-orange-500" onClick={() => handleScroll('blog')}>Blog</li>
            <li className="cursor-pointer hover:text-orange-500" onClick={() => handleScroll('contact-section')}>Contact</li>
          </ul>

          <div className="mt-12 flex gap-6 text-lg text-gray-600">
            <FontAwesomeIcon icon={faFacebookF} className="hover:text-orange-500 cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} className="hover:text-orange-500 cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
