import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const navLinks = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Abilities',
  href: '#abilities'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Gallery',
  href: '#gallery'
}, {
  name: 'Contact',
  href: '#contact'
}];
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <>
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dota-dark-900/95 backdrop-blur-md border-b-2 border-dota-dark-700 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a href="#home" onClick={e => {
            e.preventDefault();
            scrollToSection('#home');
          }} whileHover={{
            scale: 1.05
          }} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border-2 border-dota-gold-500 bg-dota-dark-800 flex items-center justify-center group-hover:shadow-glow-gold transition-all duration-300">
                <span className="text-dota-gold-400 font-hero font-bold text-lg">
                  K
                </span>
              </div>
              <span className="hidden sm:block font-hero text-dota-gold-400 text-xl font-bold">
                Kei
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} onClick={e => {
              e.preventDefault();
              scrollToSection(link.href);
              setActiveSection(link.href.slice(1));
            }} initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              y: -2
            }} className={`relative px-4 py-2 font-ui text-sm uppercase tracking-wider transition-colors duration-200 ${activeSection === link.href.slice(1) ? 'text-dota-gold-400' : 'text-dota-silver-300 hover:text-dota-gold-400'}`}>
                  {link.name}
                  {activeSection === link.href.slice(1) && <motion.div layoutId="activeSection" className="absolute bottom-0 left-0 right-0 h-0.5 bg-dota-gold-500" transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }} />}
                </motion.a>)}
            </div>

            {/* CTA Button */}
            <motion.a href="#contact" onClick={e => {
            e.preventDefault();
            scrollToSection('#contact');
          }} whileHover={{
            scale: 1.05,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="hidden md:block px-6 py-2 bg-dota-gold-600 hover:bg-dota-gold-500 text-white font-ui text-sm font-bold uppercase tracking-wider border-2 border-dota-gold-500 transition-colors duration-200">
              Hire Me
            </motion.a>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-dota-silver-300 hover:text-dota-gold-400 transition-colors">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-dota-dark-900 border-t border-dota-dark-700">
            <div className="px-4 py-6 space-y-3">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="block px-4 py-3 text-dota-silver-300 hover:text-dota-gold-400 hover:bg-dota-dark-800 font-ui text-sm uppercase tracking-wider transition-colors border-l-2 border-transparent hover:border-dota-gold-500">
                  {link.name}
                </a>)}
              <a href="#contact" onClick={e => {
            e.preventDefault();
            scrollToSection('#contact');
          }} className="block px-4 py-3 bg-dota-gold-600 text-white text-center font-ui text-sm font-bold uppercase tracking-wider">
                Hire Me
              </a>
            </div>
          </motion.div>}
      </motion.nav>

      {/* Decorative line under nav when scrolled */}
      {isScrolled && <motion.div initial={{
      scaleX: 0
    }} animate={{
      scaleX: 1
    }} className="fixed top-16 md:top-20 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dota-gold-500 to-transparent z-50" />}
    </>;
}