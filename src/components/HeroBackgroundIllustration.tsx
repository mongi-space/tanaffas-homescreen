import { motion } from 'motion/react';

export default function HeroBackgroundIllustration() {
  return (
    <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full max-h-[720px] sm:max-h-[680px] z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Illustration scaled larger on mobile with smooth float */}
      <motion.img 
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -6, 0]
        }}
        transition={{ 
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" },
          y: { duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        src="https://i.imgur.com/0qF8jGQ.png" 
        alt="Organizational Ecosystem Illustration"
        aria-hidden="true"
        className="w-full h-full object-cover object-top scale-125 min-[420px]:scale-110 sm:scale-100 opacity-90 sm:opacity-90 transition-all origin-top"
        referrerPolicy="no-referrer"
        loading="eager"
      />

      {/* Smooth gradient overlays for seamless dissolution / fadeout */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent via-30% to-white pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/30 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/30 to-transparent pointer-events-none" />
    </div>
  );
}
