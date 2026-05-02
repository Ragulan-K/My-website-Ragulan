/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { usePortfolio } from "../PortfolioContext";
import { MapPin, Building2, Briefcase } from "lucide-react";

export default function Experience() {
  const { data } = usePortfolio();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-4xl mx-auto">
          {data.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-10 pb-12 last:pb-0 group"
            >
              {/* Timeline Connector */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 group-last:bg-transparent">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary-600 ring-4 ring-primary-50"></div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} className="text-primary-500" /> {exp.organization}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary-500" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1 bg-white border border-gray-200 text-xs font-bold rounded-full text-primary-600">
                    {exp.date}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {exp.imageUrl && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-gray-100 max-w-md">
                    <img 
                      src={exp.imageUrl} 
                      alt={exp.role} 
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-gray-100 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
