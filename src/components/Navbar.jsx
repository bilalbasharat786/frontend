import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll handle karne ke liye professional way
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Mobile menu band karne ke liye
    setIsMobileMenuOpen(false);
  };

  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
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
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-5 transition-all duration-500 flex items-center justify-between ${
          hasScrolled
            ? "bg-white shadow-lg py-3" // Scroll par height thori kam kar di
            : "bg-transparent text-white border-b border-white/10"
        }`}
      >
        {/* Logo Section */}
        <div
          className={`text-2xl font-bold tracking-tight cursor-pointer ${
            hasScrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={scrollToTop}
        >
          Banker<span className="text-orange-500">.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-8 text-[14px] font-medium uppercase tracking-widest items-center">
            <li onClick={scrollToTop} className="nav-link-style cursor-pointer hover:text-orange-500 transition">
              Home
            </li>

            {/* Dropdown Menu */}
            <li className="relative group py-2">
              <div
                onClick={() => scrollToSection("about-section")}
                className="cursor-pointer hover:text-orange-500 transition flex items-center gap-2"
              >
                About Us{" "}
                <FontAwesomeIcon icon={faChevronDown} className="text-[10px] group-hover:rotate-180 transition-transform" />
              </div>
              
              <ul className="absolute left-0 mt-4 w-52 bg-white text-gray-700 py-3 shadow-2xl rounded-sm border-t-4 border-orange-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-6 py-2.5 hover:bg-gray-50 hover:text-orange-500 cursor-pointer transition text-[13px] font-medium"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </li>

            <li onClick={() => scrollToSection("blog")} className="cursor-pointer hover:text-orange-500 transition">
              Blog
            </li>
            <li onClick={() => scrollToSection("contact-section")} className="cursor-pointer hover:text-orange-500 transition">
              Contact
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 border-l pl-6 border-gray-300">
            {[faFacebookF, faTwitter, faLinkedinIn].map((icon, index) => (
              <a
                key={index}
                href="#"
                className={`text-sm transition-all hover:-translate-y-1 ${
                  hasScrolled ? "text-gray-600 hover:text-orange-500" : "text-white hover:text-orange-300"
                }`}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`text-2xl ${hasScrolled ? "text-gray-900" : "text-white"}`}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[300px] bg-white p-10 transform transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl hover:rotate-90 transition-transform">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-[16px] font-semibold text-gray-800 uppercase tracking-tight">
            <li className="cursor-pointer hover:text-orange-500" onClick={scrollToTop}>Home</li>
            
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                About Us
                <FontAwesomeIcon icon={isAboutOpen ? faChevronUp : faChevronDown} className="text-xs" />
              </div>
              
              {/* Mobile Dropdown Inner */}
              <div className={`overflow-hidden transition-all duration-300 ${isAboutOpen ? "max-h-60 mt-4" : "max-h-0"}`}>
                <ul className="ml-4 flex flex-col gap-4 border-l-2 border-orange-500 pl-4">
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-500 hover:text-orange-500 text-[14px] normal-case font-normal"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection("blog")}>Blog</li>
            <li className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection("contact-section")}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
