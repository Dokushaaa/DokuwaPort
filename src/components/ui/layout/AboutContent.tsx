import {
  callTechIcon,
  callTechStack,
  gridBoxList,
} from '@/data/content';
import { StoreContext } from '@/global/store/StoreContext';
import Image from 'next/image';
import React from 'react';
import { FaCopy } from 'react-icons/fa';
import {
  setMessage,
  setSuccess,
} from '../../../global/store/StoreAction';
import { BackgroundBeams } from '../vendor/background-beams';
import AboutInfo from '../element/AboutInfo';

type Props = {};

const AboutContent = (props: Props) => {
  const { store, dispatch } =
    React.useContext(StoreContext);
  const handleCopyAddress = () => {
    const text: string = 'SaavedraArrisss@gmail.com';
    navigator.clipboard
      .writeText(text)
      .then(() => {
        dispatch(setSuccess(true));
        dispatch(setMessage('Successfully Copied!'));
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
      <div className='gridBox flex flex-col justify-between gap-2 md:grid-rows-2 md:py-5 lg:grid lg:grid-cols-4'>
        {/* grid starter */}
        {/* gridItem: 1 */}
        <div className='gridItem rgba flex items-center justify-center rounded-lg rounded-md lg:col-span-2 lg:row-span-3'>
          <Image
            rel='prefetch'
            priority
            className='img-cover rounded-md bg-cover'
            src='/assets/avatarother.png'
            alt='alt'
            width={450}
            height={450}
          />

          <span className='bg-content/40 dark:bg-primary/40 absolute bottom-0 w-2/3 -translate-y-1/4 rounded-lg px-2'>
            {gridBoxList[0].content}
          </span>
        </div>
        {/* gridItem: 2 */}
        <div className='gridItem w-full rounded-md lg:col-span-2 lg:row-span-1'>
          <div className='divider flex h-full w-full flex-col items-center justify-center gap-2 lg:flex-row'>
            {/* flex item 1 */}
            <div className='rgba relative flex h-full w-full items-center justify-center rounded-md lg:w-1/2'>
              <BackgroundBeams className='z-10 w-full' />
              <img
                src='/assets/grid2.png'
                className='img-cover size-full rounded-md bg-cover'
                alt=''
              />
              <span className='bg-primary/40 absolute top-1/2 left-1/2 z-[10] w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-lg px-2 text-center lg:px-0 xl:px-2 xl:text-base'>
                I build fast, accessible, and scalable web
                interfaces.
              </span>
            </div>
            {/* flex item 2 */}
            <div className='copyEmailDiv rgba bg-secondary/95 dark:bg-secondary/50 flex h-full w-full flex-col items-center justify-center gap-2 rounded-md px-5 py-5 shadow-lg lg:w-1/2'>
              <h3 className='font-fira mb-0 text-center text-base font-semibold'>
                Do you want to build a project together
              </h3>
              <button
                onClick={handleCopyAddress}
                className='btn btn-normal flex items-center gap-2 rounded-md border-2 border-stone-400 bg-gray-200 bg-gray-500 shadow-lg hover:bg-gray-600'>
                <FaCopy className='text-xs' />
                <p className='text-xs lg:pl-2 lg:text-left'>
                  Copy my Email Address
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* gridItem 3 */}
        <div className='gridItem-techstack bg-secondary/95 dark:bg-secondary/50 mb-5 flex w-full items-center rounded-md shadow-lg lg:col-span-2 lg:row-span-2'>
          {/* container */}
          <div className='relative flex h-full w-full flex-row items-center gap-2'>
            {/* left */}
            <div className='flex w-[65%] flex-col items-start justify-between pl-2 md:items-center'>
              <span className='w-full text-gray-500 md:pl-5 lg:pl-1 xl:px-5'>
                {gridBoxList[2].content}
              </span>
              <p className='w-full text-gray-200 md:pl-5 lg:pl-1 xl:px-5'>
                {gridBoxList[3].content}
              </p>
            </div>
            {/* right */}
            <div className='rightItem bg-secondary relative h-full w-[35%] items-center rounded-md py-5 lg:py-0'>
              <ul className='flex h-full flex-col items-center justify-center gap-2'>
                {callTechStack}
                <li className='bg-primary/40 hidden rounded-md px-2 py-1 lg:flex'>
                  <ul className='flex flex-row items-center gap-2 text-white'>
                    {callTechIcon}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* end of grid */}
      </div>
      <AboutInfo />
    </>
  );
};

export default AboutContent;
