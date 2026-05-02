/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { usePortfolio } from "../PortfolioContext";
import { Heart, Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const { data, setActiveSection } = usePortfolio();

  const socialLinks = [
    { icon: <Github size={20} />, url: data.contact.social.github, name: "GitHub" },
    { icon: <Linkedin size={20} />, url: data.contact.social.linkedin, name: "LinkedIn" },
    { icon: <Instagram size={20} />, url: data.contact.social.instagram, name: "Instagram" },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-100 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-display font-black tracking-tighter">
              <span className="bg-linear-to-r from-primary-600 to-accent bg-clip-text text-transparent">Ragulan</span>
              <span className="text-gray-900">.</span>
            </h2>
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 border-l border-gray-200 pl-6 hidden sm:block">
              &copy; {new Date().getFullYear()}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-all transform hover:scale-110"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Compact Nav */}
          <div className="flex items-center gap-6">
            {["Home", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-[10px] uppercase tracking-widest font-black text-gray-400 hover:text-gray-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Colorful Accent */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="h-[2px] w-12 bg-linear-to-r from-primary-600 to-accent rounded-full"></div>
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] font-black text-gray-300">
            <span>Made with</span>
            <Heart size={10} className="text-accent fill-accent" />
            <span>by Ragulan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
