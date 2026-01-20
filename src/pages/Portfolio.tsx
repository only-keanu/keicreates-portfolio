import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroIntro } from '../components/HeroIntro';
import { CodeIntroSection } from '../components/CodeIntroSection';
import { VideoIntroSection } from '../components/VideoIntroSection';
import { AbilitiesSection } from '../components/AbilitiesSection';
import { AttributesSection } from '../components/AttributesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ProjectGallerySection } from '../components/ProjectGallerySection';
import { ItemsSection } from '../components/ItemsSection';
import { BattleLog } from '../components/BattleLog';
export function Portfolio() {
  return <main className="min-h-screen bg-dota-dark-900 text-dota-silver-100 selection:bg-dota-gold-500/30 selection:text-dota-gold-400">
      <Navigation />
      <HeroIntro />
      <div id="about">
        <CodeIntroSection />
        <VideoIntroSection />
        <AttributesSection />
      </div>
      <div id="abilities">
        <AbilitiesSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      {/*<div id="gallery">*/}
      {/*  <ProjectGallerySection />*/}
      {/*</div>*/}
      <ItemsSection />
      <div id="contact">
        <BattleLog />
      </div>
    </main>;
}