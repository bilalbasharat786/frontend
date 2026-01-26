import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-20">
          
          <div>
            <h3 className="text-lg font-medium mb-8">About Us</h3>
            <p className="text-gray-400 leading-relaxed font-light text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Ammet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-8">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 font-light text-[15px]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-8">Follow Us</h3>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-orange-400 transition">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-8">Subscribe Newsletter</h3>
            <div className="relative flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-transparent border border-gray-600 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-gray-400"
              />
              <button className="absolute right-0 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-12 text-center text-gray-500 text-[14px]">
          <p>
            Copyright ©2026 All rights reserved | This template is made with{" "}
            <span className="text-red-500">❤</span> by{" "}
            <a href="#" className="hover:text-white border-b border-gray-500">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
