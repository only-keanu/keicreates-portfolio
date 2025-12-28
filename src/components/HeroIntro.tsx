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
                      src="https://keane-portfolio.s3.ap-southeast-2.amazonaws.com/portfolio-avatar.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYG24RFJOES6WIXQZ%2F20251228%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T052812Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgeM5emSYyGOMeTszM1bTh%2FLvGhTMLcuGarhyhJQlyIo8CIFpw9oVNg6VWhsnr%2FuG3kxcZSHzz3uzDFMbLM8Pv%2FW1HKpkCCH8QABoMNTY0NDQ1MzkxNDUyIgwtq%2BYNrxupUbF8sqcq9gEKjasofuiXZbuTvOJettzgpsEnCKwRlTaibSOl2OCdJLHrztmTjR%2B%2B9BY1ZSP9GXB9xzbNUUppCTYBpUDyW4esp9Q74ZmtqJM5fASPMr%2BPmsOrftEXoDv0ajl5ksTMi6rl2tey7MvjZBefCp4vAGSn96vrgwUEnl2OutvdsTJLkfDIu9kKK0QZu8OL5xWu5s8wRBQOSRNA11%2Fsih0WLb%2BG%2FIBhC0F6JS%2BrXTxlyGuKNLjE3LjlPouDW3W2YWwW6wazeZhN8Fp75EySDcldIuSArF8O1LhWmlgWtTuH6SVCogyRaiclfH28fePSyCPs13MiIEgnRHkw5%2FrCygY64AEMb6xH%2Fc%2FSWOJoMOf%2FBB8e5dsHs71Inp64mOPslbrmNy5wW2Moc9B16QEQrxapfy9nA7qJFCWFFle%2Bxo%2BiNq8clMWzevWd4jHfhPLa07cYnmovtirRooqyyNjtqtdoLsRLLPgneM8epmbus7TSRGoNJABrwKKtKmPHdTz%2BtomXpDAhIgzniYfyTCjuA%2Fuv%2BN23va9yRvYvyYTibkhW2mewyjtIdsN%2FfCIdE8Qu4y5%2FyuExG6v2WOoKyUQz7Dc%2FaAVvQ3RNBuP2itiPlw9Tz%2BF%2Bvw3mryAS4%2BkqCx1WPFprAg%3D%3D&X-Amz-Signature=fa2fd522d71236343f498e097a001cb4efddbac8c2b8442c38a21d43b6354bec&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                      alt="Character"
                      className="w-full h-full object-contain rounded-lg"
                  />

                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full" />
              </div>

          </motion.div>
        {/* Waving Character Animation */}
      {/*  <motion.div initial={{*/}
      {/*  scale: 0.8,*/}
      {/*  opacity: 0*/}
      {/*}} animate={{*/}
      {/*  scale: 1,*/}
      {/*  opacity: 1*/}
      {/*}} transition={{*/}
      {/*  duration: 1,*/}
      {/*  ease: 'easeOut'*/}
      {/*}} className="mb-12 relative inline-block">*/}
      {/*    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-dota-gold-500 shadow-glow-gold bg-gradient-to-br from-dota-blue-600 to-dota-blue-400 flex items-center justify-center overflow-hidden relative group">*/}
      {/*      /!* Character Illustration *!/*/}
      {/*      <div className="absolute inset-0 flex items-center justify-center">*/}
      {/*        /!* Head *!/*/}
      {/*        <div className="absolute top-12 w-16 h-16 rounded-full bg-dota-silver-300 border-2 border-dota-dark-800" />*/}

      {/*        /!* Blue Jacket Body *!/*/}
      {/*        <div className="absolute top-24 w-24 h-20 bg-dota-blue-600 rounded-t-3xl border-2 border-dota-blue-400" />*/}

      {/*        /!* Waving Arm *!/*/}
      {/*        <motion.div animate={{*/}
      {/*        rotate: [0, -20, 10, -20, 0]*/}
      {/*      }} transition={{*/}
      {/*        duration: 1.5,*/}
      {/*        repeat: Infinity,*/}
      {/*        repeatDelay: 1*/}
      {/*      }} className="absolute top-28 -right-2 w-6 h-12 bg-dota-blue-600 rounded-full origin-top border-2 border-dota-blue-400" style={{*/}
      {/*        transformOrigin: 'top center'*/}
      {/*      }}>*/}
      {/*          /!* Hand *!/*/}
      {/*          <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-dota-silver-300 border-2 border-dota-dark-800" />*/}
      {/*        </motion.div>*/}

      {/*        /!* Static Arm *!/*/}
      {/*        <div className="absolute top-28 -left-2 w-6 h-12 bg-dota-blue-600 rounded-full border-2 border-dota-blue-400">*/}
      {/*          <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-dota-silver-300 border-2 border-dota-dark-800" />*/}
      {/*        </div>*/}

      {/*        /!* Smile *!/*/}
      {/*        <div className="absolute top-20 w-8 h-3 border-b-2 border-dota-dark-800 rounded-b-full" />*/}
      {/*      </div>*/}

      {/*      /!* Ornate details *!/*/}
      {/*      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-dota-gold-500 rotate-45 -mt-2" />*/}
      {/*      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-dota-gold-500 rotate-45 -mb-2" />*/}
      {/*    </div>*/}
      {/*  </motion.div>*/}

          {/*/!* Scroll Indicator - with wider gap *!/*/}
          {/*<motion.div*/}
          {/*    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"*/}
          {/*    animate={{ y: [0, 10, 0] }}*/}
          {/*    transition={{ duration: 2, repeat: Infinity }}*/}
          {/*>*/}
          {/*    <span className="text-slate-400 text-sm tracking-widest">SCROLL</span>*/}
          {/*    <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">*/}
          {/*        <motion.div*/}
          {/*            className="w-1.5 h-1.5 bg-slate-400 rounded-full"*/}
          {/*            animate={{ y: [0, 12, 0] }}*/}
          {/*            transition={{ duration: 1.5, repeat: Infinity }}*/}
          {/*        />*/}
          {/*    </div>*/}
          {/*</motion.div>*/}

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