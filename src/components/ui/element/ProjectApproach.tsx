import { typeWriterVariables } from '@/data/content';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { TypewriterEffect } from '../vendor/typewriter-effect';

type approachProps = {
  approachNumber: number;
  approachTitle: string;
  approachDescript: string;
  approachBack?: string;
};

// --- Data
const wordsDisplay: { text: string }[] = [
  { text: 'Project' },
  { text: 'Approach' },
];
const approachList: approachProps[] = [
  {
    approachBack: 'Click me 1',
    approachNumber: 1,
    approachTitle: 'Planning the Website',
    approachDescript:
      'What is the site’s purpose, and what does it need to include?',
  },
  {
    approachBack: 'Click me 2',
    approachNumber: 2,
    approachTitle: 'Design & Development',
    approachDescript:
      'Turn the plan into an interactive, responsive website.',
  },
  {
    approachBack: 'Click me 3',
    approachNumber: 3,
    approachTitle: 'Polish & Launch',
    approachDescript:
      'Make it production-ready, fast, and live',
  },
];

// Approach Card Component
const ApproachCard: React.FC<{ item: approachProps }> = ({
  item,
}) => {
  const [cardState, setCardState] = React.useState<
    true | false
  >(false);

  React.useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia(
        '(max-width: 1023px)'
      ).matches;
      setCardState(isSmallScreen); // always show active on xs–lg
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);
  const handleCardState = () => {
    const isLargeScreen = window.matchMedia(
      '(min-width: 1024px)'
    ).matches;
    if (isLargeScreen) {
      setCardState(prev => !prev);
    }
  };

  const plusCounterTS: number[] = [...Array(4).keys()];
  const plusPosNorm: string[] = [
    'top-2 left-2',
    'top-2 right-2',
    'bottom-2 left-2',
    'bottom-2 right-2',
  ];
  const plusPosAlt: string[] = [
    'top-2 left-2',
    'top-2 right-2',
    'bottom-2 left-2',
    'bottom-2 right-2',
  ];
  const renderPlus = plusCounterTS.map(item => (
    <FaPlus
      key={item}
      className={`text-accent absolute animate-pulse text-2xl ${cardState ? `${plusPosNorm[item]} ` : `${plusPosAlt[item]} dark:text-accent text-white`}`}
    />
  ));

  return (
    <div
      className='card-wrapper perspective cursor-pointer'
      onClick={handleCardState}>
      <div
        // duration is for animation visibility
        className={`card-inner transition-transform duration-700 ease-in-out ${
          cardState ? 'rotate-y-180' : ''
        }`}>
        {/* FRONT: inactive */}
        <div className='sec card-face front relative'>
          {renderPlus}
          {/* inactive content */}
          <div className='div-textrender rbga border-accent rounded-md border-2 px-3 py-2'>
            <p>Phase {item.approachNumber}</p>
          </div>
        </div>

        {/* BACKSIDE: active */}
        <div className='sec rgba card-face card-back relative'>
          {renderPlus}
          {/* Main Content */}
          <div className='div-textrender bg-accent/40 border-accent rounded-md border-2 px-3 py-2'>
            <p>Phase {item.approachNumber}</p>
          </div>
          <h4 className='mb-0'>{item.approachTitle}</h4>
          <p className='text-primary dark:text-content px-2 text-center italic lg:px-5'>
            {item.approachDescript}
          </p>
        </div>
        {/* END  */}
      </div>
    </div>
  );
};

// --- Component: ProjectApproach
const ProjectApproach: React.FC = () => {
  return (
    <div className='projectApproach div-auto py-5'>
      <TypewriterEffect
        words={wordsDisplay}
        className={typeWriterVariables.typeEffectBlack}
        cursorClassName={
          typeWriterVariables.cursorClassName
        }
      />
      <div className='flex w-full flex-col items-center justify-center gap-2 md:justify-evenly lg:flex-row lg:gap-5'>
        {approachList.map(item => (
          <ApproachCard
            key={item.approachNumber}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectApproach;
