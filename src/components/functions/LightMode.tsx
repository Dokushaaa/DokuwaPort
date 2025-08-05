'use client';

import React from 'react';
import Eternal from '../../../public/eternalEditable';

const themeModes = ['dark', 'light']; // Ensure dark mode cycles back

let pushCount: number = 0;
const eldenRingRef = [
  {
    id: 1,
    message:
      'Well, thou art of passing skill. Warrior blood must truly run in thy veins, Tarnished.',
  },
  {
    id: 2,
    message:
      'I dreamt for so long. My flesh was dull gold... and my blood, rotted. Corpse after corpse, left in my wake. As I awaited... his return.',
  },
  {
    id: 3,
    message:
      'Should you rise, as the Lord of Chaos, I will kill you, as sure as night follows day.',
  },
  {
    id: 4,
    message: 'Ahh, may chaos take the world!',
  },
];

const LightMode = () => {
  function handleChangeColorTheme() {
    const html = document.querySelector('html');
    const currentTheme =
      localStorage.getItem('theme') || 'light';

    const currentIndex = themeModes.indexOf(currentTheme);
    const nextTheme =
      themeModes[(currentIndex + 1) % themeModes.length];

    localStorage.setItem('theme', nextTheme);
    html?.classList.remove(currentTheme);
    html?.classList.add(nextTheme);

    // references:
    console.log(eldenRingRef[pushCount].message);
    pushCount = (pushCount + 1) % eldenRingRef.length;
  }

  React.useEffect(() => {
    const html = document.documentElement;
    const storedTheme = localStorage.getItem('theme');
    const fallbackTheme = 'dark';

    const theme =
      storedTheme && themeModes.includes(storedTheme)
        ? storedTheme
        : fallbackTheme;

    if (!storedTheme || !themeModes.includes(storedTheme)) {
      localStorage.setItem('theme', fallbackTheme);
    }

    html.classList.remove(...themeModes);
    html.classList.add(theme);
  }, []);

  return (
    <div>
      <button
        className={`animator divide-header fade-in-out from-primary via-header to-primary dark:from-primary dark:to-primary testing:rotate-90 cursor-pointer rounded-xl border-2 border-white bg-linear-to-tr p-1 dark:rotate-180 dark:bg-linear-to-br`}
        onClick={handleChangeColorTheme}>
        <Eternal />
      </button>
    </div>
  );
};

export default LightMode;
