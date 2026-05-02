/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { usePortfolio } from "../PortfolioContext";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { data } = usePortfolio();

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-600 font-bold tracking-wider mb-2"
          >
            {data.role}
          </motion.p>
          <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight mb-6">
            I'm <span className="text-accent">{data.highlightRole.split('|')[1]?.trim() || "AI ML Enthusiast"}</span>
            <br />
            <span className="text-gray-900">{data.highlightRole.split('|')[0]?.trim() || "Research Assistant"}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Animated Blob Background for Image */}
          <div className="absolute inset-0 bg-primary-200 rounded-full filter blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative z-10 aspect-square max-w-md mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-primary-500 to-accent opacity-20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-morph"></div>
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl relative z-10 border-8 border-white"
            />
          </div>
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
