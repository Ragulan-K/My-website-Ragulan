/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Settings } from "lucide-react";
import { usePortfolio } from "../PortfolioContext";

export default function Navbar() {
  const { data, setIsAdmin, activeSection, setActiveSection } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold gradient-text"
        >
          {data.name}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveSection(link.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id ? "text-primary-600 font-bold" : "text-gray-600 hover:text-primary-600"
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => setIsAdmin(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-primary-600"
            title="Admin Dashboard"
          >
            <Settings size={18} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsAdmin(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
          >
            <Settings size={18} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white overflow-hidden"
      >
        <div className="flex flex-col space-y-4 px-6 py-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActiveSection(link.id);
                setIsOpen(false);
              }}
              className={`text-lg font-medium text-left ${
                activeSection === link.id ? "text-primary-600 font-bold" : "text-gray-600 hover:text-primary-600"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
