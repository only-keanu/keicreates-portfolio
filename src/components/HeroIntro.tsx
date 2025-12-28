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
                      src="https://keane-portfolio.s3.ap-southeast-2.amazonaws.com/portfolio-avatar.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYG24RFJOBDCZMMNL%2F20251228%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T053831Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAP4Ae2LiHLqJAHxtuiBfg0dDs3qct6PW%2BsTljqSL1naGAiEAgn2FxloLVHGo00QNmaQHXZa1ZXyDSMV26mpMfrgkvS4qmQIIfxAAGgw1NjQ0NDUzOTE0NTIiDEH2FJawUx9%2F%2B40vkCr2Aa1LWYPnjzkZOnm%2FVoHVTLy99il2c1Ge1hAEj3S%2F2VkPVkKy9P%2Bwq7WpjxOKXA7CPFHRr6RUuqNEK1O%2FfHg5E8x7TrqxPCKrx8izOQwAkwO3HOfDfzEH1LEdDVFbF7MV0vnnwyK01LM%2BxPpvVll6u4z6waCcrgufJ9%2BYrY%2BSGWAJT5cdC9%2BOSaHjKbeHZYoqGU9Eik8m%2FFU7J%2FpMR19HzSSOTIzCc1ybp2eesfLf4B2%2BQiXuTYgzSde0C6uNPC0d%2FF4tTBQeSFCdy661rPpqlDPuUrIJurvoRDU1YXssJOr%2BaNlHHeh%2F5duIMzJNcafnbwFERNUbKTDn%2BsLKBjreAWY72sq%2FZsl3CTeTnP0dHfSfEw%2Fn1u2n0b%2FJ5VTY9C3pPw2%2Bnp7xbPIW5OofN2AegZzBsWuKZcGURwSdFRJyZ%2B2dF2q6tX7IIzIM0SdT3ydVCj2WXvMbDcIt4AWGCjc6D5CKmbNJRnlh6L6Fa2ELpL50i8lWz6Xo%2BbOrDI0VeiwwZ%2BnZmtL%2BlkwE4WsLkl1XlCWxiE0OptSV3IT%2F52m%2F5ZLjDRupzX5i4dWUxhN%2FC80CZLkBgzhWBR89GzBfAZdjRhucaXsbe2Tnhx3w%2FbgfS6OJIXCdaTC6%2FHthrIuXkw%3D%3D&X-Amz-Signature=256614c83c6b38fe8cff2e47708aafa08e474f48ff4d11a6e8a312a80d3e3e75&X-Amz-SignedHeaders=host&response-content-disposition=inline"
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