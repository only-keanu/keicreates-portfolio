import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Cpu, ExternalLink } from 'lucide-react';
const abilities = [{
  name: 'E-Commerce Engine',
  description: 'A powerful passive ability that processes transactions with 99.9% uptime. Increases gold generation over time.',
  tech: 'Next.js, Stripe, PostgreSQL',
  icon: Globe,
  color: 'gold',
  link: '#'
}, {
  name: 'Neural Network',
  description: 'Active: Scans large datasets to identify patterns. Cooldown: 2s. Mana Cost: 150.',
  tech: 'Python, TensorFlow, AWS',
  icon: Cpu,
  color: 'blue',
  link: '#'
}, {
  name: 'Legacy Refactor',
  description: 'Ultimate: Transforms spaghetti code into clean, maintainable architecture. Pierces spell immunity.',
  tech: 'TypeScript, React, Redux',
  icon: Code,
  color: 'crimson',
  link: '#'
}, {
  name: 'Data Fortress',
  description: 'Passive: Grants 40% magic resistance against security vulnerabilities and SQL injections.',
  tech: 'Node.js, Redis, Docker',
  icon: Database,
  color: 'gold',
  link: '#'
}];
export function AbilitiesSection() {
  return <section className="py-24 px-4 bg-dota-dark-900 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-hero text-dota-silver-100 mb-4 drop-shadow-lg">
            Abilities
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-dota-gold-500 to-transparent mx-auto" />
          <p className="mt-4 text-dota-silver-500 font-lore text-lg italic">
            "A master of the digital arts, wielding code like arcane magic."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {abilities.map((ability, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -8,
          scale: 1.02
        }} className="group relative bg-dota-dark-800 border border-dota-dark-700 p-1 hover:border-dota-gold-500 transition-colors duration-300">
              {/* Ability Icon Container */}
              <div className={`aspect-square w-full bg-dota-dark-900 relative overflow-hidden mb-4 border-2 border-${ability.color === 'gold' ? 'dota-gold-600' : ability.color === 'blue' ? 'dota-blue-600' : 'dota-crimson-700'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ability.icon className={`w-16 h-16 text-${ability.color === 'gold' ? 'dota-gold-400' : ability.color === 'blue' ? 'dota-blue-400' : 'dota-crimson-500'}`} />
                </div>

                {/* Hotkey Indicator */}
                <div className="absolute top-1 left-2 text-xs font-bold text-white/70 bg-black/50 px-1 rounded border border-white/20">
                  {['Q', 'W', 'E', 'R'][index]}
                </div>
              </div>

              {/* Ability Details */}
              <div className="p-4 bg-gradient-to-b from-dota-dark-800 to-dota-dark-900 min-h-[200px] flex flex-col">
                <h3 className={`text-xl font-hero font-bold mb-2 text-${ability.color === 'gold' ? 'dota-gold-400' : ability.color === 'blue' ? 'dota-blue-400' : 'dota-crimson-500'}`}>
                  {ability.name}
                </h3>
                <p className="text-dota-silver-500 font-lore text-sm mb-4 flex-grow leading-relaxed">
                  {ability.description}
                </p>

                <div className="mt-auto">
                  <div className="text-xs text-dota-silver-500 font-ui uppercase tracking-wider mb-2">
                    Mana Cost:{' '}
                    <span className="text-dota-blue-400">{ability.tech}</span>
                  </div>
                  <a href={ability.link} className="flex items-center justify-center gap-2 w-full py-2 bg-dota-dark-700 hover:bg-dota-gold-600 text-dota-silver-300 hover:text-white font-ui text-xs font-bold uppercase tracking-widest transition-colors duration-200 border border-dota-dark-700 hover:border-dota-gold-400">
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}