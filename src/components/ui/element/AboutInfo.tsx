'use client';
import {
  certificationsRender,
  educationRender,
  typeWriterVariables,
  workListRender,
} from '@/data/content';
import React from 'react';
import { TypewriterEffect } from '../vendor/typewriter-effect';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {};

const AboutInfo = (props: Props) => {
  const [selected, setSelected] = React.useState<
    'certifications' | 'work' | 'education'
  >('certifications');

  const wordsDisplay: { text: string }[] = [
    { text: 'Information' },
  ];

  return (
    <div className='flex w-full flex-col items-center justify-center gap-2 py-5'>
      <TypewriterEffect
        words={wordsDisplay}
        className={typeWriterVariables.typeEffectBlack}
        cursorClassName={
          typeWriterVariables.cursorClassName
        }
      />

      {/* selector parent */}
      <div className='flex w-full flex-col items-start justify-center gap-2 lg:flex-row'>
        {/* choice selector */}
        <div className='mx-auto mb-6 flex w-full flex-col justify-between gap-2 rounded-full p-1 lg:w-1/4'>
          {['certifications', 'work', 'education'].map(
            option => (
              <button
                key={option}
                onClick={() =>
                  setSelected(option as typeof selected)
                }
                className={`animator flex-1 cursor-pointer rounded-full px-5 py-2 text-center capitalize ${
                  selected === option
                    ? 'bg-secondary font-semibold'
                    : 'bg-gray-200 text-black hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}>
                {option}
              </button>
            )
          )}
        </div>

        {/* animated content */}
        <div className='relative w-full lg:w-2/3'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className='space-y-4'>
              {selected === 'certifications' && (
                <div className='flex w-full flex-col gap-2 md:grid md:grid-cols-2'>
                  {certificationsRender}
                </div>
              )}
              {selected === 'work' && (
                <div className='flex w-full flex-col gap-2 md:grid md:grid-cols-2'>
                  {workListRender}
                </div>
              )}
              {selected === 'education' && (
                <div className='flex flex-col gap-2'>
                  {educationRender}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
