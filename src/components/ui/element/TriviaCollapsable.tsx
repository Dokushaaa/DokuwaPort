'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DropdownItem = {
  title: string;
  content: string;
};

const dropdownData: DropdownItem[] = [
  {
    title: 'What’s your business email?',
    content:
      'You can reach me at SaavedraArrisss@gmail.com for project inquiries, collaborations, or anything web-related.',
  },
  {
    title: 'When are you usually available?',
    content:
      'I’m most available between 12:00 PM and 12:00 AM PST — perfect for both daytime and evening collaborations.',
  },
  {
    title: 'Do you do anything beyond web development?',
    content:
      'Yes! Beyond front-end work, I also explore software engineering. I actively develop using C# and enjoy tackling backend logic and application design.',
  },
  {
    title:
      'What other programming languages are you familiar with?',
    content:
      'In addition to my core stack, I have functional experience with C/C++, Java, and Python — enough to build tools, automate workflows, or work across tech stacks when needed.',
  },
];

const TriviaCollapsable = () => {
  const [activeIndex, setActiveIndex] = React.useState<
    number | null
  >(null);

  const toggleItem = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className='bg-primary scrollbar-hide h-[600px] w-full overflow-hidden rounded-xl p-8 shadow-xl md:h-[400px] lg:h-[400px] xl:w-[608px]'>
      <ul className='flex h-full flex-col justify-center space-y-4 overflow-y-auto pr-2'>
        {dropdownData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={index}
              className={`border-b-2 pb-2 transition-colors duration-300 ${
                isActive
                  ? 'border-accent'
                  : 'border-content/30'
              }`}>
              <button
                onClick={() => toggleItem(index)}
                className='text-content hover:text-accent w-full cursor-pointer text-left text-base font-medium transition-all'>
                {item.title}
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key='content'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: 'easeInOut',
                    }}
                    className='overflow-hidden'>
                    <p className='text-content/80 mt-2 text-base'>
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TriviaCollapsable;
