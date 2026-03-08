import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import projectPreview from '../assets/img.png';
const projects = [{
  title: 'Example 1',
  description: 'Test.',
  tech: ['React', 'D3.js', 'WebSocket'],
  link: '#',
  github: '#',
  color: 'blue',
  image: projectPreview,
  imageAlt: 'Test'
}, {
  title: 'Example 2',
  description: 'Test.',
  tech: ['Next.js', 'Solidity', 'IPFS'],
  link: '#',
  github: '#',
  color: 'gold',
  image: projectPreview,
  imageAlt: 'Golden Marketplace preview'
}, {
  title: 'Example 3',
  description: 'Test.',
  tech: ['Node.js', 'Redis', 'PostgreSQL'],
  link: '#',
  github: '#',
  color: 'crimson',
  image: projectPreview,
  imageAlt: 'Crimson Auth preview'
}, {
  title: 'Example 3',
  description: 'Test.',
  tech: ['TypeScript', 'GraphQL', 'MongoDB'],
  link: '#',
  github: '#',
  color: 'blue',
  image: projectPreview,
  imageAlt: 'Ethereal CMS preview'
}];
export function ProjectsSection() {
  return <section className="py-24 px-4 bg-dota-dark-800 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-dota-gold-500 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 5
      }} />)}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-dota-gold-500 to-transparent mx-auto" />
          <p className="mt-4 text-dota-silver-500 font-lore text-lg italic">
            "A few projects that I've come to create since the start of my career."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
        </div>
      </div>
    </section>;
}
function ProjectCard({
  project,
  index
}: {
  project: any;
  index: number;
}) {
  const colorClasses = {
    gold: {
      border: 'border-dota-gold-600',
      glow: 'shadow-glow-gold',
      text: 'text-dota-gold-400',
      bg: 'bg-dota-gold-500/10'
    },
    blue: {
      border: 'border-dota-blue-600',
      glow: 'shadow-glow-blue',
      text: 'text-dota-blue-400',
      bg: 'bg-dota-blue-500/10'
    },
    crimson: {
      border: 'border-dota-crimson-700',
      glow: 'shadow-glow-crimson',
      text: 'text-dota-crimson-500',
      bg: 'bg-dota-crimson-500/10'
    }
  };
  const colors = colorClasses[project.color as keyof typeof colorClasses];
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: index * 0.1
  }} className="group relative">
      {/* Animated glow effect */}
      <motion.div className={`absolute -inset-1 ${colors.bg} rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} animate={{
      scale: [1, 1.05, 1]
    }} transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse'
    }} />

      <div className={`relative bg-dota-dark-900 border-2 ${colors.border} rounded-lg overflow-hidden transition-all duration-300 group-hover:${colors.glow}`}>
        {/* Card Header with animated sparkles */}
        <div className={`${colors.bg} p-6 border-b-2 ${colors.border} relative overflow-hidden`}>
          <motion.div className="absolute top-0 right-0 opacity-20" animate={{
          rotate: 360
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}>
            <Sparkles className={`w-24 h-24 ${colors.text}`} />
          </motion.div>

          <h3 className={`text-2xl font-hero font-bold ${colors.text} mb-2 relative z-10`}>
            {project.title}
          </h3>
          <p className="text-dota-silver-400 font-lore text-sm relative z-10">
            {project.description}
          </p>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="mb-6 overflow-hidden rounded-md border border-dota-dark-700 bg-dota-dark-900">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string, i: number) => <motion.span key={i} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.1 * i
          }} className="px-3 py-1 bg-dota-dark-800 border border-dota-dark-700 rounded text-xs font-ui text-dota-silver-300 group-hover:border-dota-gold-600 transition-colors">
                {tech}
              </motion.span>)}
          </div>

          {/* Action Buttons with hover animations */}
          <div className="flex gap-3">
            <motion.a href={project.link} whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className={`flex-1 flex items-center justify-center gap-2 py-3 ${colors.bg} border-2 ${colors.border} ${colors.text} font-ui text-sm font-bold uppercase tracking-wider hover:bg-opacity-20 transition-all duration-200`}>
              <ExternalLink className="w-4 h-4" />
              View Live
            </motion.a>

            <motion.a href={project.github} whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center justify-center gap-2 px-4 py-3 bg-dota-dark-800 border-2 border-dota-dark-700 text-dota-silver-300 hover:border-dota-gold-500 hover:text-dota-gold-400 transition-all duration-200">
              <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Animated corner accents */}
        <motion.div className={`absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity`} initial={{
        x: -10,
        y: -10
      }} whileHover={{
        x: 0,
        y: 0
      }} />
        <motion.div className={`absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity`} initial={{
        x: 10,
        y: 10
      }} whileHover={{
        x: 0,
        y: 0
      }} />
      </div>
    </motion.div>;
}
