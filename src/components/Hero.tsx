/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { usePortfolio } from "../PortfolioContext";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { data, setActiveSection } = usePortfolio();

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-50/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary-100 text-primary-700 rounded-full shadow-xs"
          >
            Researching for the future
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter text-gray-900">
            {data.name}
          </h1>
          <div className="h-1.5 w-24 bg-primary-600 mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-primary-600 font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-primary-200"></span>
            {data.highlightRole}
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveSection("projects")} 
              className="group relative px-8 py-4 bg-gray-900 text-white rounded-xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
            <button 
              onClick={() => setActiveSection("contact")}
              className="px-8 py-4 border-2 border-gray-200 text-gray-900 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-900 transition-all active:scale-95"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative"
        >
          <div className="relative z-10 aspect-square max-w-lg mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800")}
            />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-gray-50 hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-white font-black text-lg">MNU</div>
              <div>
                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">MSc Researcher</p>
                <p className="font-bold text-gray-900 whitespace-nowrap">Mokpo National Univ.</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </motion.div>
      </div>

      <style>{`
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
