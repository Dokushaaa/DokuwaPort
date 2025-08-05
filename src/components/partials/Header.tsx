'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { hyperLinks } from '../../data/content';
import LightMode from '../functions/LightMode';
import HeaderOpen from './HeaderOpen';
import Link from 'next/link';

type Props = { activePage?: string };

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState<true | false>(
    false
  );
  const handleOpen = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 300);
  };
  React.useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  const [isScroll, setIsScroll] = React.useState<
    true | false
  >(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        if (window.scrollY > 75) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      }, 300); // 300ms delay before the state updates
    };

    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  // other
  const headerListRender = hyperLinks.map(item => (
    <li
      className='hidden md:flex'
      key={item.id}
      id={`item-${item.id}`}>
      <Link href={item.link}>
        <motion.p
          className='header-nav-desktop cursor-pointer'
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={e => {
            if (item.link.startsWith('#')) {
              e.preventDefault();
              const el = document.querySelector(item.link);
              if (el) {
                el.scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }
          }}>
          {item.name}
        </motion.p>
      </Link>
    </li>
  ));

  return (
    <>
      <header className=''>
        <nav
          className={`bg-header fixed top-0 left-0 z-[1000] w-full shadow-lg shadow-md transition-all ease-in-out`}>
          <div className='container'>
            <div className='flex flex-row items-center justify-between gap-5'>
              <div className='left rgba flex items-center gap-5 font-semibold capitalize'>
                <motion.p>dokuwa</motion.p>
              </div>
              <ul className='right button-list flex flex-row items-center gap-2'>
                <li className='order-1 md:order-5'>
                  <LightMode />
                </li>
                {headerListRender}
                <li className='order-6 w-full md:hidden md:w-0'>
                  <motion.button
                    className={`rounded-xl border-2 p-2 ${
                      isOpen
                        ? 'from-primary via-header to-primary bg-linear-to-br'
                        : 'from-primary via-header to-primary bg-linear-to-tr'
                    }`}
                    onClick={handleOpen}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                  </motion.button>
                </li>
              </ul>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }} // Start hidden and slightly below
                animate={{
                  opacity: 1,
                  x: 0,
                }} // Animate to visible and original position
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }} // Animation when unmounting
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                  delay: 0.5,
                }} // Smooth animation
                className={`${
                  isOpen && 'md:hidden'
                } bg-primary absolute top-23 right-0 z-[999] h-screen w-full -translate-x-0 -translate-y-10 py-1`}>
                <HeaderOpen
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;
