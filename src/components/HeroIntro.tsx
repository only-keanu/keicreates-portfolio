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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Waving Character Animation */}
        <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 1,
        ease: 'easeOut'
      }} className="mb-12 relative inline-block">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-dota-gold-500 shadow-glow-gold bg-gradient-to-br from-dota-blue-600 to-dota-blue-400 flex items-center justify-center overflow-hidden relative group">
            {/* Character Illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Head */}
              <div className="absolute top-12 w-16 h-16 rounded-full bg-dota-silver-300 border-2 border-dota-dark-800" />

              {/* Blue Jacket Body */}
              <div className="absolute top-24 w-24 h-20 bg-dota-blue-600 rounded-t-3xl border-2 border-dota-blue-400" />

              {/* Waving Arm */}
              <motion.div animate={{
              rotate: [0, -20, 10, -20, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1
            }} className="absolute top-28 -right-2 w-6 h-12 bg-dota-blue-600 rounded-full origin-top border-2 border-dota-blue-400" style={{
              transformOrigin: 'top center'
            }}>
                {/* Hand */}
                <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-dota-silver-300 border-2 border-dota-dark-800" />
              </motion.div>

              {/* Static Arm */}
              <div className="absolute top-28 -left-2 w-6 h-12 bg-dota-blue-600 rounded-full border-2 border-dota-blue-400">
                <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-dota-silver-300 border-2 border-dota-dark-800" />
              </div>

              {/* Smile */}
              <div className="absolute top-20 w-8 h-3 border-b-2 border-dota-dark-800 rounded-b-full" />
            </div>

            {/* Ornate details */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-dota-gold-500 rotate-45 -mt-2" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-dota-gold-500 rotate-45 -mb-2" />
          </div>
        </motion.div>

        {/* Hero Name & Title with Word Jumble */}
        <motion.div initial={{
        y: 50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.3,
        duration: 0.8
      }}>
          <h1 className="text-4xl md:text-6xl font-hero font-bold text-dota-silver-100 mb-4 tracking-wide">
            Hey, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-dota-gold-400 to-dota-gold-600">
              Kei
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <span className="text-xl md:text-2xl font-lore text-dota-silver-300">
              and I like to make
            </span>
            <div className="relative inline-block min-w-[200px]">
              <motion.span key={displayText} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} className={`text-xl md:text-2xl font-lore font-bold text-transparent bg-clip-text bg-gradient-to-r from-dota-blue-400 to-dota-gold-400 ${isScrambling ? 'blur-[1px]' : ''}`}>
                {displayText}
              </motion.span>
            </div>
          </div>
        </motion.div>

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

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        y: [0, 10, 0]
      }} transition={{
        delay: 1.5,
        duration: 2,
        repeat: Infinity
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dota-gold-600">
          <div className="text-xs uppercase tracking-[0.3em] mb-2 font-ui">
            Scroll
          </div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-dota-gold-600 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>;
}