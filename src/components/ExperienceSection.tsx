import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';

const experiences = [
  {
    role: 'Java Full Stack Developer',
    company: 'Seven Seven Global Services Inc.',
    period: '2025 - Present',
    location: 'Remote',
    summary:
      'Created scalable and maintainable full stack web applications .',
    highlights: [
        'Refactored code that increased readability and maintainability',
        'Redesigned frontend pages using Figma designs with pixel perfect conversions',
      'Built full-stack applications using Java (Spring Boot), REST APIs, and modern frontend frameworks',
        'Designed scalable backend services with clean architecture and modular design'
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'SpringBoot','Angular']
  },
  {
    role: 'Executive Assistant',
    company: 'Home Care Book',
    period: '2024-2025',
    location: 'Remote',
    summary:
      'Highly organized and detail-oriented Executive Assistant with experience supporting leadership through calendar management, operational coordination, documentation, and workflow optimization. Skilled in managing multiple priorities, improving administrative processes, and facilitating clear communication between stakeholders to ensure smooth day-to-day operations.',
    highlights: [
      'Designed a subscription system processing 120K+ monthly invoices.',
      'Partnered with design to launch a new checkout flow in 6 weeks.',
      'Improved order reconciliation accuracy from 92% to 99.6%.'
    ],
    stack: ['Microsoft Excel', 'Zoho CRM', 'Monday.com', 'Google Workspace']
  },
  {
    role: 'Machine Learning Intern',
    company: 'Project Pasyente',
    period: '2023 - 2023',
    location: 'Remote',
    summary:
      'Delivered data-driven dashboards and automation tools for enterprise operations teams.',
    highlights: [
      'Cleaned, preprocessed, and analyzed datasets for dengue diagnosis models.',
        'Evaluated machine learning models, optimizing performance to 93% accuracy.',
        'Presented key findings through reports and data visualizations to stakeholders.',
    ],
    stack: ['Python', 'Microsoft Excel', 'TensorFlow']
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 px-4 bg-dota-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-hero text-dota-silver-100 mb-4 drop-shadow-lg">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-dota-gold-500 to-transparent mx-auto" />
          <p className="mt-4 text-dota-silver-500 font-lore text-lg italic">
            "Veteran of many campaigns, forged in high-stakes deployments."
          </p>
        </motion.div>

        <div className="relative border-l border-dota-dark-600/70 pl-6 md:pl-10 space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[15px] top-8 h-7 w-7 rounded-full border-2 border-dota-gold-500 bg-dota-dark-900 flex items-center justify-center">
                <Star className="w-3 h-3 text-dota-gold-400" />
              </div>

              <div className="bg-dota-dark-900/70 border border-dota-dark-700 hover:border-dota-gold-500/60 transition-colors duration-300 p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-hero text-dota-silver-100">
                      {experience.role}
                    </h3>
                    <p className="text-dota-gold-400 font-ui uppercase tracking-widest text-xs mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-dota-silver-500 font-ui uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-dota-blue-400" />
                      {experience.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-dota-crimson-500" />
                      {experience.location}
                    </span>
                  </div>
                </div>

                <p className="text-dota-silver-400 font-lore text-sm leading-relaxed mb-5">
                  {experience.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-dota-silver-500 font-ui uppercase tracking-widest">
                      <Briefcase className="w-3 h-3 text-dota-gold-400" />
                      Key Wins
                    </div>
                    <div className="space-y-2">
                      {experience.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-dota-silver-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dota-gold-400" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-dota-silver-500 font-ui uppercase tracking-widest mb-3">
                      Loadout
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-ui uppercase tracking-wider bg-dota-dark-800 border border-dota-dark-700 text-dota-silver-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
