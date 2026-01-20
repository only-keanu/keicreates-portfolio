import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap } from 'lucide-react';
const words = ['games', 'web apps', 'dashboards', 'automations'];
export function HeroIntro() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsScrambling(true);
      // Scramble effect
      let scrambleCount = 0;
      const scrambleInterval = setInterval(() => {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        const scrambled = Array.from({
          length: words[currentWordIndex].length
        }).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
        setDisplayText(scrambled);
        scrambleCount++;
        if (scrambleCount > 8) {
          clearInterval(scrambleInterval);
          const nextIndex = (currentWordIndex + 1) % words.length;
          setDisplayText(words[nextIndex]);
          setCurrentWordIndex(nextIndex);
          setIsScrambling(false);
        }
      }, 50);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentWordIndex]);
  return <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dota-dark-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-dota-dark-800 to-dota-dark-900 opacity-80" />
      <div className="fog-layer" />
      <div className="fog-layer-2" />

      {/* Snow Layers */}
      <div className="snow-layer snow-layer-slow">
        {[...Array(20)].map((_, i) => <div key={`snow-slow-${i}`} className="snowflake" />)}
      </div>
      <div className="snow-layer">
        {[...Array(20)].map((_, i) => <div key={`snow-fast-${i}`} className="snowflake" />)}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center min-h-screen flex flex-col items-center justify-center gap-12">

      {/* Character Image */}
          <motion.div
              className="relative"
              animate={{
                  y: [0, -10, 0],
              }}
              transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
              }}
          >
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  <img
                      src="src/assets/img.png"
                      alt="Character"
                      className="w-full h-full object-contain rounded-lg"
                  />

                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full" />
              </div>

          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
              className=" absolute bottom-20 left-0.9 -translate-x-1/2 flex flex-col items-center gap-8 md:gap-16 text-dota-gold-600"
          >
              <div className="text-xs uppercase tracking-[0.3em] mb-2 font-ui">
                  Scroll
              </div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-dota-gold-600 to-transparent" />
          </motion.div>

          {/* Intro Text */}
          <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
              Hey, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Kei
            </span>
          </motion.h1>

          <motion.p
              className="text-2xl md:text-3xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
              and I like to make{' '}
              <span className="inline-block min-w-[200px] text-left font-mono text-cyan-400">
              {displayText}
            </span>
          </motion.p>


          {/* Stats / Roles */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 0.8
      }} className="flex justify-center gap-8 md:gap-16 text-dota-silver-500 font-ui text-sm tracking-widest uppercase">
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="p-2 rounded-full border border-dota-blue-600 bg-dota-dark-800 group-hover:shadow-glow-blue transition-all duration-300">
              <Zap className="w-5 h-5 text-dota-blue-400" />
            </div>
            <span>Creator</span>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="p-2 rounded-full border border-dota-gold-600 bg-dota-dark-800 group-hover:shadow-glow-gold transition-all duration-300">
              <Shield className="w-5 h-5 text-dota-gold-400" />
            </div>
            <span>Builder</span>
          </div>
        </motion.div>


      </div>
    </section>;
}