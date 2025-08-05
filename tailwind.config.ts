import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
  // ...
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.perspective': {
          perspective: '1000px',
        },
      });
    }),
  ],
};
export default config;
