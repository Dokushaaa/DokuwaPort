'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  condition?: boolean;
  type?: string;
};

const AnimatorReusable = (props: Props) => {
  const { children, condition, type } = props;
  const renderChildren = children ? children : 'None';
  const renderCondition = condition ? condition : 'Empty';
  return (
    <AnimatePresence>
      {type === 'default' && (
        <>
          {renderCondition && (
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Start hidden and slightly below
              animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
              exit={{ opacity: 0, scale: 0.8 }} // Animation when unmounting
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }} // Smooth animation
              className='bg-primary border-content absolute top-23 right-0 h-screen w-[90vw] -translate-x-0 -translate-y-10 border-2'>
              {renderChildren}
            </motion.div>
          )}
        </>
      )}
      {type === 'type1' && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Start hidden and slightly below
            animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
            exit={{ opacity: 0, scale: 0.8 }} // Animation when unmounting
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }} // Smooth animation
            className={``}>
            {renderChildren}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AnimatorReusable;
