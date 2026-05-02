/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { usePortfolio } from "../PortfolioContext";
import { Download, CheckCircle2 } from "lucide-react";

export default function About() {
  const { data } = usePortfolio();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 inline-flex items-center gap-2">
                Who I Am
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.about.whoIAm}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.about.whatIDo}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Objectives</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic">
                "{data.about.careerObjectives}"
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={18} /> View / Download CV
              </a>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full opacity-50"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Skills</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {data.skills.map((skillGroup, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-primary-600 font-bold uppercase tracking-wider text-xs">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 size={16} className="text-primary-500" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
