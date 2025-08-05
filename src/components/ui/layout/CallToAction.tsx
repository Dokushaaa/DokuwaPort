import {
  socialLinksRender,
  typeWriterVariables,
} from '@/data/content';
import {
  setMessage,
  setSuccess,
} from '@/global/store/StoreAction';
import { StoreContext } from '@/global/store/StoreContext';
import React from 'react';
import { setNotifType } from '../../../global/store/StoreAction';
import TriviaCollapsable from '../element/TriviaCollapsable';
import { TypewriterEffect } from '../vendor/typewriter-effect';

const CallToAction = () => {
  const wordsDisplay: { text: string }[] = [
    { text: 'Contact' },
    { text: 'Me!' },
  ];
  const { dispatch } = React.useContext(StoreContext);
  const handleContactDummy = () => {
    console.log(
      'This button is being used for now as this is only created using the intended purpose of viewing.'
    );
    dispatch(setSuccess(true));
    dispatch(
      setMessage('This button is still under development')
    );
    dispatch(setNotifType('long'));
  };

  return (
    <section
      id='cta'
      className='cta rgba bg-secondary scroll-mt-20 py-10 text-center'>
      <div className='container mx-auto px-4'>
        <div className='cta--container relative flex flex-col items-center justify-center gap-6'>
          {/* Typewriter Title */}
          <TypewriterEffect
            className={`${typeWriterVariables.typeEffectWhite} font-semibold`}
            words={wordsDisplay}
            cursorClassName={
              typeWriterVariables.cursorClassName
            }
          />
          {/* flex div col */}
          <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='left flex w-full flex-col items-center gap-3 lg:w-1/2'>
              <TriviaCollapsable />
            </div>
            <div className='right rgba bg-primary/10 dark:bg-content/10 flex w-full flex-col items-center justify-center gap-2 rounded-md p-4 lg:w-1/2'>
              {/* Supporting Text */}

              <h5 className='mb-0 max-w-2xl px-2 font-medium md:px-5 lg:px-10'>
                Let's create something exceptional together.
                Whether it’s a project, collaboration, or
                idea — I'm open to it.
              </h5>
              <ul className='socialLink flex w-full items-center justify-center gap-2 py-2 lg:pt-0 xl:px-5'>
                {socialLinksRender}
              </ul>
              {/* CTA Button */}
              <button
                onClick={handleContactDummy}
                className='btn btn-contact bg-primary hover:bg-accent/40 hover:border-primary hover:text-primary dark:hover:text-content dark:hover:border-content text-content w-2/3 border-2 border-transparent p-10 text-center font-semibold hover:scale-105 lg:w-1/2'>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
