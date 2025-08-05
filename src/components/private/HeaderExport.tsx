'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LightMode from '../functions/LightMode';

type Props = {};
let counter: number = 1;
export const headerList = [
  { id: counter++, name: 'Home', link: '/' },
  { id: counter++, name: 'About', link: '/about' },
  { id: counter++, name: 'Projects', link: '/projects' },
  { id: counter++, name: 'Contacts', link: '/contacts' },
];

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState<true | false>(
    false
  );
  const handleOpen = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 300);
  };

  const headerListRender = headerList.map((item, index) => (
    <li key={item.id} id={`item-${item.id}`}>
      <motion.a
        href={item.link}
        className='header-nav-desktop w-1/2'>
        {item.name}
      </motion.a>
    </li>
  ));
  return (
    <>
      <header>
        <nav className='bg-header sadow-md fixed top-0 left-0 z-50 w-full'>
          <div className='container'>
            <div className='flex flex-row items-center justify-between gap-5'>
              <div className='left flex items-center gap-5 font-semibold capitalize'>
                dokuwa
              </div>
              <div className='right flex flex-row items-center gap-2'>
                <LightMode />
                <button
                  className='border-content rounded-xl border-2 p-2'
                  onClick={handleOpen}>
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Start hidden and slightly below
                animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
                exit={{ opacity: 0, scale: 0.8 }} // Animation when unmounting
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                }} // Smooth animation
                className='bg-primary/90 absolute top-23 right-0 h-screen w-full -translate-x-0 -translate-y-10'>
                {/* <HeaderOpen /> */}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;
