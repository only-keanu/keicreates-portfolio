import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
export function BattleLog() {
  return <footer className="bg-black border-t border-dota-dark-700 py-12 font-ui">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-dota-dark-900/50 border border-dota-dark-700 p-6 rounded-sm">
          <h3 className="text-dota-silver-300 font-hero text-lg mb-4 border-b border-dota-dark-700 pb-2">
            Battle Log
          </h3>

          <div className="space-y-3 font-mono text-sm h-48 overflow-y-auto custom-scrollbar pr-2">
            <LogEntry time="20:45" text="Hero has reached level 25." type="system" />
            <LogEntry time="20:48" text="New project 'E-Commerce Engine' deployed successfully." type="success" />
            <LogEntry time="21:15" text="Looking for team? Contact channels open." type="info" />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <SocialButton icon={Github} label="GitHub" sub="View Source" href="#" />
              <SocialButton icon={Linkedin} label="LinkedIn" sub="Connect" href="#" />
              <SocialButton icon={Mail} label="Email" sub="Send Message" href="#" />
              <SocialButton icon={Twitter} label="Twitter" sub="Follow" href="#" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-dota-silver-500 text-xs">
          <p>Match ID: 83920192 • Replay Available</p>
          <p className="mt-2">
            © {new Date().getFullYear()} Alex Walker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}
function LogEntry({
  time,
  text,
  type
}: {
  time: string;
  text: string;
  type: 'system' | 'success' | 'info';
}) {
  const colors = {
    system: 'text-dota-silver-500',
    success: 'text-green-400',
    info: 'text-dota-blue-400'
  };
  return <div className="flex gap-4 opacity-80 hover:opacity-100 transition-opacity">
      <span className="text-dota-silver-500">[{time}]</span>
      <span className={colors[type]}>{text}</span>
    </div>;
}
function SocialButton({
  icon: Icon,
  label,
  sub,
  href
}: {
  icon: any;
  label: string;
  sub: string;
  href: string;
}) {
  return <a href={href} className="flex items-center gap-3 bg-dota-dark-800 border border-dota-dark-600 p-3 hover:bg-dota-dark-700 hover:border-dota-gold-500 transition-all duration-200 group">
      <Icon className="w-5 h-5 text-dota-silver-300 group-hover:text-dota-gold-400 transition-colors" />
      <div className="flex flex-col">
        <span className="text-dota-silver-100 font-bold text-xs uppercase">
          {label}
        </span>
        <span className="text-dota-silver-500 text-[10px] uppercase tracking-wider">
          {sub}
        </span>
      </div>
    </a>;
}