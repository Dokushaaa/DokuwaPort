import ResumeShow from '@/components/functions/ResumeShow';
import {
  personalInfo,
  typeWriterVariables,
} from '@/data/content';
import { TypewriterEffect } from '../vendor/typewriter-effect';
import Image from 'next/image';

const wordsDisplay: { text: string }[] = [
  { text: 'Arris' },
  { text: 'Saavedra' },
];

const HeroContent = () => {
  return (
    <div
      id='about'
      className='about border-secondary flex h-full w-full flex-col items-center justify-center gap-2 rounded-md pb-5 lg:flex-row lg:py-20 xl:border-2 xl:px-5'>
      {/* left */}
      <div className='textHeroInfo text-content flex w-full flex-col items-center justify-center gap-2 pb-5 text-center lg:w-1/2 lg:pb-0'>
        <h1 className='text-content mb-0'>
          Hi, My name is
          <TypewriterEffect
            className='text-secondary w-full text-3xl text-black underline sm:text-4xl md:text-5xl lg:text-5xl dark:text-white'
            words={wordsDisplay}
            cursorClassName={
              typeWriterVariables.cursorClassName
            }
          />
        </h1>
        <span className='bg-content/40 text-content w-full rounded-md px-3 py-1 text-xs font-medium lg:w-2/3 xl:w-fit'>
          {personalInfo[1]}
        </span>
        <ResumeShow />

        <div className='div-default bg-content/40 flex w-full flex-col items-center justify-between gap-2 rounded-md p-5 text-left'>
          <p className=''>
            I'm a front-end web developer with a passion for
            clean code and continuous learning. Coding has
            always been more than a skill—it's something I
            genuinely enjoy and constantly work to improve.
          </p>
          <p>
            I specialize in building responsive, interactive
            interfaces using the React.js library and often
            work with the Next.js framework for more
            advanced projects. My designs are styled with
            Tailwind CSS, and I bring them to life with
            TypeScript for added structure and reliability.
          </p>
          <p className='hidden md:flex'>
            Outside of web development, I explore
            programming through game modding, particularly
            in titles from FromSoftware, where I create or
            tweak gameplay experiences. Whether building
            websites or modding games, I enjoy pushing
            boundaries and refining my craft.
          </p>
        </div>
      </div>
      {/* right */}
      <div className='imgSpinner flex w-full flex-col items-center justify-center gap-2 lg:w-1/2'>
        <div className='animator bg-secondary rounded-md p-2'>
          <Image
            className='animate-spinner hover:animate-none'
            src='/assets/react.svg'
            alt=''
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
