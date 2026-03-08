import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Layout, Server, Layers, Cpu, GitBranch, Cloud, BoxIcon, Github } from 'lucide-react';
const inventory = [
  {
    name: 'React/Next.js',
    type: 'Framework',
    icon: Layout,
    cost: 5200,
    rarity: 'legendary'
  },
  {
    name: 'JavaScript',
    type: 'Language',
    icon: Terminal,
    cost: 3200,
    rarity: 'rare'
  },
  {
    name: 'HTML5 and CSS',
    type: 'Frontend',
    icon: Layers,
    cost: 2000,
    rarity: 'uncommon'
  },
  {
    name: 'Tailwind',
    type: 'Styling',
    icon: Layers,
    cost: 1800,
    rarity: 'uncommon'
  },
  {
    name: 'PostgreSQL',
    type: 'Database',
    icon: Database,
    cost: 2600,
    rarity: 'rare'
  },
  {
    name: 'MariaDB',
    type: 'Database',
    icon: Database,
    cost: 2200,
    rarity: 'uncommon'
  },
  {
    name: 'SQL',
    type: 'Query Language',
    icon: Database,
    cost: 2000,
    rarity: 'uncommon'
  },
  {
    name: 'AWS S3',
    type: 'Cloud',
    icon: Cloud,
    cost: 4200,
    rarity: 'epic'
  },
  {
    name: 'Git',
    type: 'Version Control',
    icon: GitBranch,
    cost: 1200,
    rarity: 'common'
  },
  {
    name: 'GitHub',
    type: 'Collaboration',
    icon: Github,
    cost: 1500,
    rarity: 'common'
  },
  {
    name: 'Docker',
    type: 'DevOps',
    icon: BoxIcon,
    cost: 2800,
    rarity: 'rare'
  },
  {
    name: 'IntelliJ',
    type: 'IDE',
    icon: Cpu,
    cost: 1400,
    rarity: 'common'
  },
  {
    name: 'VS Code',
    type: 'IDE',
    icon: Cpu,
    cost: 1400,
    rarity: 'common'
  },
  {
    name: 'Postman',
    type: 'API Tool',
    icon: Server,
    cost: 1600,
    rarity: 'common'
  },
  {
    name: 'Agile Development',
    type: 'Workflow',
    icon: Layers,
    cost: 2400,
    rarity: 'uncommon'
  },
  {
    name: 'SCRUM',
    type: 'Workflow',
    icon: Layers,
    cost: 2400,
    rarity: 'uncommon'
  },
  {
    name: 'Jenkins',
    type: 'CI/CD',
    icon: Server,
    cost: 3600,
    rarity: 'rare'
  },
  {
    name: 'n8n',
    type: 'Automation',
    icon: Server,
    cost: 2800,
    rarity: 'rare'
  },
  {
    name: 'Kotlin',
    type: 'Language',
    icon: Terminal,
    cost: 2600,
    rarity: 'rare'
  },
  {
    name: 'Angular',
    type: 'Framework',
    icon: Layout,
    cost: 3800,
    rarity: 'rare'
  }
];
export function ItemsSection() {
  return <section className="py-24 bg-dota-dark-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-hero text-dota-silver-100 mb-2">
            Skills & Tools
          </h2>
          <p className="text-dota-silver-500 font-lore italic">
            "Equipped for the right tools and skills for any need."
          </p>
        </motion.div>

        <div className="bg-dota-dark-800 p-8 border-2 border-dota-dark-700 shadow-2xl relative">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-dota-gold-500" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-dota-gold-500" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-dota-gold-500" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-dota-gold-500" />

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {inventory.map((item, index) => <ItemSlot key={index} item={item} index={index} />)}
            {/* Empty Slots to fill grid if needed */}
            {[...Array(3)].map((_, i) => <div key={`empty-${i}`} className="aspect-square bg-black/40 border border-dota-dark-700 shadow-inner" />)}
          </div>

          <div className="mt-6 flex justify-between items-center text-dota-silver-500 font-ui text-xs uppercase tracking-wider border-t border-dota-dark-700 pt-4">
            {/*<span>Total Net Worth</span>*/}
            {/*<span className="text-dota-gold-400 font-bold flex items-center gap-1">*/}
            {/*  <span className="w-3 h-3 rounded-full bg-dota-gold-500 inline-block" />*/}
            {/*  25,400*/}
            {/*</span>*/}
          </div>
        </div>
      </div>
    </section>;
}
function ItemSlot({
  item,
  index
}: {
  item: any;
  index: number;
}) {
  const rarityColors = {
    common: 'text-dota-silver-300 border-dota-silver-500',
    uncommon: 'text-blue-400 border-blue-500',
    rare: 'text-blue-600 border-blue-700',
    epic: 'text-purple-500 border-purple-600',
    legendary: 'text-dota-gold-400 border-dota-gold-500'
  };
  return <motion.div initial={{
    opacity: 0,
    scale: 0.8
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} viewport={{
    once: true
  }} transition={{
    delay: index * 0.05
  }} className="group relative aspect-square bg-gradient-to-br from-dota-dark-700 to-black border border-dota-dark-600 hover:border-dota-gold-400 transition-colors duration-200 cursor-help">
      <div className="absolute inset-0 flex items-center justify-center">
        <item.icon className={`w-8 h-8 ${rarityColors[item.rarity as keyof typeof rarityColors].split(' ')[0]} opacity-80 group-hover:opacity-100 transition-opacity`} />
      </div>

      {/* Tooltip */}
      <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-dota-dark-900 border border-dota-dark-600 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
        <h4 className={`font-hero font-bold text-sm mb-1 ${rarityColors[item.rarity as keyof typeof rarityColors].split(' ')[0]}`}>
          {item.name}
        </h4>
        <div className="text-xs text-dota-silver-500 mb-2">{item.type}</div>
        <div className="flex justify-between text-xs font-ui">
          <span className="text-dota-gold-400 flex items-center gap-1">
            <div className="w-2 h-2 bg-dota-gold-500 rounded-full" />
            {item.cost}
          </span>
        </div>
        <div className="mt-2 text-[10px] text-dota-silver-500 italic border-t border-dota-dark-700 pt-1">
          Passive: Grants +10 {item.type} proficiency.
        </div>
      </div>
    </motion.div>;
}
