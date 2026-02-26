import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
export function VideoIntroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const handleTimeUpdate = () => {
      if (!video.duration) {
        setProgress(0);
        return;
      }
      setProgress((video.currentTime / video.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleTogglePlay = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleFullscreen = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if (video.requestFullscreen) {
      await video.requestFullscreen();
    }
  };

  return <section className="py-24 px-4 bg-dota-dark-900 relative">
      <div className="max-w-5xl mx-auto">
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
            Introduction
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-dota-gold-500 to-transparent mx-auto" />
          <p className="mt-4 text-dota-silver-500 font-lore italic">
            "Hi, Let me introduce myself!."
          </p>
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
      }} className="relative group">
          {/* Ornate Frame */}
          <div className="absolute -inset-4 bg-gradient-to-br from-dota-gold-600 via-dota-gold-500 to-dota-crimson-700 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />

          <div className="relative bg-dota-dark-800 border-4 border-dota-dark-700 p-2 shadow-2xl">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-dota-gold-500" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-dota-gold-500" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-dota-gold-500" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-dota-gold-500" />

            {/* Video Container */}
            <div className="relative aspect-video bg-black overflow-hidden">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="https://keane-portfolio.s3.ap-southeast-2.amazonaws.com/portfolio.mp4"
                muted
                playsInline
                controls={false}
              />

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-4">
                  <button onClick={handleTogglePlay} className="p-2 rounded-full bg-dota-gold-600 hover:bg-dota-gold-500 transition-colors">
                    {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
                  </button>

                  {/* Progress bar */}
                  <div className="flex-1 h-1 bg-dota-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-dota-gold-500 transition-[width] duration-200" style={{
                    width: `${progress}%`
                  }} />
                  </div>

                  <button onClick={handleToggleMute} className="p-2 hover:bg-white/10 rounded transition-colors">
                    {isMuted ? <VolumeX className="w-5 h-5 text-dota-silver-300" /> : <Volume2 className="w-5 h-5 text-dota-silver-300" />}
                  </button>

                  <button onClick={handleFullscreen} className="p-2 hover:bg-white/10 rounded transition-colors">
                    <Maximize className="w-5 h-5 text-dota-silver-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Title Bar */}
            <div className="bg-dota-dark-900 px-4 py-3 border-t-2 border-dota-dark-700">
              <h3 className="font-hero text-dota-gold-400 text-lg">
                Meet the Developer
              </h3>
              <p className="text-dota-silver-500 text-sm font-ui mt-1">
                A brief introduction to my journey and passion for development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}
