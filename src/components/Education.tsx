/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { usePortfolio } from "../PortfolioContext";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  const { data } = usePortfolio();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education</h2>

        <div className="max-w-4xl mx-auto">
          {data.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-10 pb-12 last:pb-0 group"
            >
              {/* Timeline Connector */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 group-last:bg-transparent">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-accent ring-4 ring-pink-50"></div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-accent/40 hover:bg-pink-50/10 hover:shadow-xl transition-all duration-300 w-full">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <GraduationCap size={14} className="text-accent" /> {edu.institution}
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1 bg-gray-50 border border-gray-100 text-xs font-bold rounded-full text-accent">
                    {edu.date}
                  </span>
                </div>

                {edu.gpa && (
                  <div className="flex justify-start mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-bold uppercase tracking-widest">
                      <Award size={14} /> GPA: {edu.gpa}
                    </span>
                  </div>
                )}

                {edu.details && (
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {edu.details}
                  </p>
                )}

                {edu.skills && (
                  <div className="flex flex-wrap gap-2 justify-start">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
