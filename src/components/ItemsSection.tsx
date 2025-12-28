import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Layout, Server, Layers, Cpu, GitBranch, Cloud, BoxIcon } from 'lucide-react';
const inventory = [{
  name: 'React Blade',
  type: 'Framework',
  icon: Layout,
  cost: 4200,
  rarity: 'legendary'
}, {
  name: 'TypeScript Staff',
  type: 'Language',
  icon: Terminal,
  cost: 2800,
  rarity: 'rare'
}, {
  name: 'Node.js Stone',
  type: 'Runtime',
  icon: Server,
  cost: 3400,
  rarity: 'rare'
}, {
  name: 'Postgres Relic',
  type: 'Database',
  icon: Database,
  cost: 2100,
  rarity: 'uncommon'
}, {
  name: 'Docker Cube',
  type: 'DevOps',
  icon: BoxIcon,
  cost: 1800,
  rarity: 'common'
}, {
  name: 'Tailwind Cloak',
  type: 'Styling',
  icon: Layers,
  cost: 900,
  rarity: 'common'
}, {
  name: 'Next.js Scepter',
  type: 'Framework',
  icon: Cpu,
  cost: 5600,
  rarity: 'legendary'
}, {
  name: 'Git Scroll',
  type: 'Version Control',
  icon: GitBranch,
  cost: 500,
  rarity: 'common'
}, {
  name: 'AWS Totem',
  type: 'Cloud',
  icon: Cloud,
  cost: 4800,
  rarity: 'epic'
}];
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
            Inventory
          </h2>
          <p className="text-dota-silver-500 font-lore italic">
            "Equipped for any encounter."
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
            <span>Total Net Worth</span>
            <span className="text-dota-gold-400 font-bold flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-dota-gold-500 inline-block" />
              25,400
            </span>
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