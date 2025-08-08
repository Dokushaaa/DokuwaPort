'use client';
import { motion } from 'framer-motion';
import { hyperIcons, hyperLinks } from '../../data/content';
import LightMode from '../functions/LightMode';
import Link from 'next/link';

const footerRender = hyperLinks.map(item => (
  <li key={item.id} id={`item-${item.id}`}>
    <Link href={item.link}>
      <motion.p
        className='animator cursor-pointer text-right text-white hover:scale-105 hover:text-white/40'
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={e => {
          if (item.link.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(item.link);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}>
        {item.name}
      </motion.p>
    </Link>
  </li>
));
const hyperIconRender = hyperIcons.map(item => (
  <li key={item.id} id={`item-${item.id}`}>
    <motion.a
      target='_blank'
      href={item.link}
      className='animator text-white hover:text-white/50'>
      {item.icon}
    </motion.a>
  </li>
));
const Footer = () => {
  return (
    <>
      <footer className='bg-header/85 dark:bg-header/50'>
        <div className='container'>
          <div className='rgba flex flex-col justify-between gap-5 rounded-md p-3 md:px-10 md:py-5'>
            <div className='flex flex-row items-center items-start justify-around md:justify-between'>
              <div className='left flex flex-row items-center justify-start gap-2'>
                <LightMode />
                <span className=''>Dokuwa</span>
              </div>
              <div className='right flex flex-col items-center justify-between'>
                <ul className='flex flex-col gap-3 text-right'>
                  {footerRender}
                </ul>
              </div>
            </div>
            <div className='flex flex-col items-start gap-2 px-2 pt-10 md:gap-5'>
              <ul className='flex items-center gap-2'>
                {hyperIconRender}
              </ul>
              {/* DNT */}
              <span className='text-sm'>
                &copy; Dokuwa - Arris Saavedra
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
