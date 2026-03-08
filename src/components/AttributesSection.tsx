import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Sword } from 'lucide-react';
export function AttributesSection() {
  return <section className="py-24 bg-dota-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Hero Portrait / Bio */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="w-full bg-gradient-to-b from-dota-dark-700 to-dota-dark-900 p-1 border border-dota-gold-600/30 mb-8">
              <div className="aspect-[3/4] bg-dota-dark-900 relative overflow-hidden group">
                <img
                  src="https://keane-portfolio.s3.ap-southeast-2.amazonaws.com/2.jpg"
                  alt="Portrait of Kei"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-hero text-dota-gold-400">
                    Keane Hernandez
                  </h3>
                  <p className="text-dota-silver-500 font-ui text-sm">
                    Java Full Stack Developer
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="prose prose-invert">
              <h3 className="text-xl font-hero text-dota-silver-100 mb-4">
                Biography
              </h3>
              <p className="font-lore text-dota-silver-300 text-lg leading-relaxed italic">
                "Hey, you can call me Kei. I'm a fullstack developer that's eager to build awesome systems.
                I'm passionate about tech and how it helps people with their businesses. I like to play
                games, watch anime and read books in my freetime.
                "
              </p>
            </motion.div>
          </div>

          {/* Attributes Stats */}
          <div className="lg:col-span-8 grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Strength */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="bg-dota-dark-900/50 p-6 border border-dota-crimson-700/30 hover:border-dota-crimson-500 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-dota-crimson-700 to-black border border-dota-crimson-500">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-hero text-dota-silver-100 text-lg">
                      Frontend
                    </h4>
                    <p className="text-xs text-dota-silver-500 uppercase tracking-wider">
                      Development
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <StatBar label="React" value={85} color="bg-dota-crimson-500" />
                  <StatBar label="Angular" value={70} color="bg-dota-crimson-500" />
                  <StatBar label="HTML" value={60} color="bg-dota-crimson-500" />
                  <StatBar label="CSS" value={45} color="bg-dota-crimson-500" />
                  <StatBar label="JavaScript" value={50} color="bg-dota-crimson-500" />
                </div>
              </motion.div>

              {/* Agility */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="bg-dota-dark-900/50 p-6 border border-dota-gold-600/30 hover:border-dota-gold-500 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-dota-gold-600 to-black border border-dota-gold-500">
                    <Sword className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-hero text-dota-silver-100 text-lg">
                      Backend
                    </h4>
                    <p className="text-xs text-dota-silver-500 uppercase tracking-wider">
                      Development
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <StatBar label="Java" value={75} color="bg-dota-gold-500" />
                  <StatBar label="SpringBoot" value={60} color="bg-dota-gold-500" />
                  <StatBar label="Python" value={85} color="bg-dota-gold-500" />
                  <StatBar label="Postgres" value={90} color="bg-dota-gold-500" />
                  <StatBar label="TypeScript" value={50} color="bg-dota-gold-500" />
                </div>
              </motion.div>

              {/* Intelligence */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} className="bg-dota-dark-900/50 p-6 border border-dota-blue-600/30 hover:border-dota-blue-400 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-dota-blue-600 to-black border border-dota-blue-400">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-hero text-dota-silver-100 text-lg">
                      Others
                    </h4>
                    <p className="text-xs text-dota-silver-500 uppercase tracking-wider">
                      Etc...
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <StatBar label="System Design" value={90} color="bg-dota-blue-400" />
                  <StatBar label="Problem Solving" value={95} color="bg-dota-blue-400" />
                  <StatBar label="Learning Rate" value={100} color="bg-dota-blue-400" />
                </div>
              </motion.div>
            </div>

            {/* Additional Stats Panel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <StatBox label="WPM" value="75" icon="⚔️" />
              <StatBox label="Debugged Lines" value="1000+" icon="🛡️" />
              <StatBox label="Tickets Resolved" value="50+" icon="🦶" />
              <StatBox label="Github Contributions" value="400+" icon="🏹" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}
function StatBar({
  label,
  value,
  color
}: {
  label: string;
  value: number;
  color: string;
}) {
  return <div>
      <div className="flex justify-between text-xs font-ui text-dota-silver-500 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-dota-dark-700 w-full rounded-sm overflow-hidden">
        <motion.div initial={{
        width: 0
      }} whileInView={{
        width: `${value}%`
      }} transition={{
        duration: 1,
        ease: 'easeOut'
      }} className={`h-full ${color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
      </div>
    </div>;
}
function StatBox({
  label,
  value,
  icon
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return <div className="bg-dota-dark-900 border border-dota-dark-700 p-3 flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <div className="text-xs text-dota-silver-500 uppercase">{label}</div>
        <div className="font-bold text-dota-silver-100">{value}</div>
      </div>
    </div>;
}
