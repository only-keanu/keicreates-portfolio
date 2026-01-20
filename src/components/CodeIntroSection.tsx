import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
export function CodeIntroSection() {
  const [displayedCode, setDisplayedCode] = useState('');
  const codeLines = ['const developer = {', '  name: "Keane Hernandez",', '  title: "Full Stack Developer",', '  location: "Philippines",', '  experience: "2+ years",', '  specialization: ["React", "SpringBoot, "Java", "TypeScript"],', '  passion: "Building scalable web applications",', '  status: "Available for hire"', '};', '', 'console.log(developer.passion);', '// Output: "Building scalable web applications for business problems"'];
  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let result = '';
    const typeInterval = setInterval(() => {
      if (currentLine < codeLines.length) {
        if (currentChar < codeLines[currentLine].length) {
          result += codeLines[currentLine][currentChar];
          setDisplayedCode(result);
          currentChar++;
        } else {
          result += '\n';
          setDisplayedCode(result);
          currentLine++;
          currentChar = 0;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
    return () => clearInterval(typeInterval);
  }, []);
  return <section className="py-24 px-4 bg-dota-dark-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-hero text-dota-silver-100 mb-2">
            Developer Profile
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-dota-gold-500 to-transparent mx-auto" />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.2
      }} className="bg-dota-dark-900 border-2 border-dota-dark-700 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-dota-dark-800 to-dota-dark-700 px-4 py-3 flex items-center gap-3 border-b border-dota-dark-700">
            <Terminal className="w-4 h-4 text-dota-gold-400" />
            <span className="text-dota-silver-300 font-ui text-sm">
              developer.ts
            </span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-dota-crimson-700" />
              <div className="w-3 h-3 rounded-full bg-dota-gold-600" />
              <div className="w-3 h-3 rounded-full bg-green-600" />
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm md:text-base">
            <div className="flex gap-4">
              {/* Line numbers */}
              <div className="text-dota-silver-500 select-none">
                {codeLines.map((_, i) => <div key={i} className="leading-6">
                    {i + 1}
                  </div>)}
              </div>

              {/* Code */}
              <pre className="text-dota-silver-100 leading-6 flex-1 overflow-x-auto">
                <code>
                  {displayedCode.split('\n').map((line, i) => <div key={i}>
                      {line.includes('const') || line.includes('console') ? <span className="text-dota-crimson-500">
                          {line.split(' ')[0]}
                        </span> : null}
                      {line.includes('const') || line.includes('console') ? ' ' : ''}
                      <span className={line.includes('//') ? 'text-dota-silver-500 italic' : line.includes('"') ? 'text-dota-gold-400' : line.includes('developer') && !line.includes('"') ? 'text-dota-blue-400' : 'text-dota-silver-100'}>
                        {line.includes('const') || line.includes('console') ? line.substring(line.indexOf(' ') + 1) : line}
                      </span>
                    </div>)}
                  <span className="inline-block w-2 h-5 bg-dota-gold-400 animate-pulse ml-1" />
                </code>
              </pre>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-dota-dark-800 px-4 py-2 border-t border-dota-dark-700 flex items-center gap-4 text-xs font-ui text-dota-silver-500">
            <span>TypeScript</span>
            <span>•</span>
            <span>UTF-8</span>
            <span>•</span>
            <span className="text-green-400">Ready</span>
          </div>
        </motion.div>
      </div>
    </section>;
}