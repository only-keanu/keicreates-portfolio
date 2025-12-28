import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
const galleryProjects = [{
  name: 'Portfolio Redesign',
  category: 'Web Design',
  tech: 'Figma, React, Tailwind',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  link: '#'
}, {
  name: 'Mobile Banking App',
  category: 'Mobile Development',
  tech: 'React Native, Firebase',
  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
  link: '#'
}, {
  name: 'AI Chat Interface',
  category: 'Machine Learning',
  tech: 'Python, TensorFlow, Flask',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  link: '#'
}, {
  name: 'Crypto Trading Bot',
  category: 'Blockchain',
  tech: 'Node.js, Web3, Redis',
  image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
  link: '#'
}, {
  name: 'Social Media Dashboard',
  category: 'Analytics',
  tech: 'Vue.js, Chart.js, Express',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  link: '#'
}, {
  name: 'E-Learning Platform',
  category: 'Education',
  tech: 'Next.js, Prisma, Stripe',
  image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
  link: '#'
}];
export function ProjectGallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return <section className="py-24 px-4 bg-dota-dark-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-hero text-dota-silver-100 mb-4">
            Project Gallery
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-dota-gold-500 to-transparent mx-auto" />
          <p className="mt-4 text-dota-silver-500 font-lore text-lg italic">
            "A collection of battles won and challenges conquered."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryProjects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)} className="group relative aspect-[4/3] bg-dota-dark-800 border-2 border-dota-dark-700 overflow-hidden cursor-pointer">
              {/* Project Image - Hidden by default, shown on hover */}
              <AnimatePresence>
                {hoveredIndex === index && <motion.div initial={{
              opacity: 0,
              scale: 1.1
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 1.1
            }} transition={{
              duration: 0.3
            }} className="absolute inset-0 z-10">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </motion.div>}
              </AnimatePresence>

              {/* Default State - Project Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                <div>
                  <motion.div animate={{
                opacity: hoveredIndex === index ? 0 : 1
              }} transition={{
                duration: 0.2
              }}>
                    <div className="inline-block px-3 py-1 bg-dota-gold-500/20 border border-dota-gold-600 rounded mb-3">
                      <span className="text-xs font-ui text-dota-gold-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-hero text-dota-silver-100 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-dota-silver-500 font-ui">
                      {project.tech}
                    </p>
                  </motion.div>
                </div>

                {/* Hover State - Action Button */}
                <AnimatePresence>
                  {hoveredIndex === index && <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: 20
              }} transition={{
                delay: 0.1
              }} className="space-y-3">
                      <h3 className="text-2xl font-hero text-white drop-shadow-lg">
                        {project.name}
                      </h3>
                      <a href={project.link} className="inline-flex items-center gap-2 px-6 py-3 bg-dota-gold-600 hover:bg-dota-gold-500 text-white font-ui text-sm font-bold uppercase tracking-wider transition-colors duration-200">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    </motion.div>}
                </AnimatePresence>

                {/* Decorative Code Icon (visible when not hovering) */}
                <motion.div animate={{
              opacity: hoveredIndex === index ? 0 : 0.1,
              scale: hoveredIndex === index ? 1.2 : 1
            }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <Code2 className="w-32 h-32 text-dota-gold-600" />
                </motion.div>
              </div>

              {/* Border glow effect on hover */}
              <motion.div animate={{
            opacity: hoveredIndex === index ? 1 : 0
          }} className="absolute inset-0 border-2 border-dota-gold-500 pointer-events-none z-30" />

              {/* Corner accents */}
              <motion.div animate={{
            opacity: hoveredIndex === index ? 1 : 0
          }} className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-dota-gold-400 z-30" />
              <motion.div animate={{
            opacity: hoveredIndex === index ? 1 : 0
          }} className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-dota-gold-400 z-30" />
            </motion.div>)}
        </div>
      </div>
    </section>;
}