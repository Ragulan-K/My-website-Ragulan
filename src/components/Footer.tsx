/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { usePortfolio } from "../PortfolioContext";
import { Heart } from "lucide-react";

export default function Footer() {
  const { data } = usePortfolio();

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
          <span>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-gray-400 text-sm">
          <span>Made with</span>
          <Heart size={14} className="text-accent fill-accent" />
          <span>by Ragulan</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="#home" className="hover:text-primary-600 transition-colors">Home</a>
          <a href="#projects" className="hover:text-primary-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
