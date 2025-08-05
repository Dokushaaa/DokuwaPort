'use client';
import { motion } from 'framer-motion';
import { hyperLinks, personalInfo } from '../../data/content';

// type headerItem = { name: string; link: string };
// type Props = { headerList: headerItem[] };

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderOpen = ({ isOpen, setIsOpen }: Props) => {
  const handleClickLink = () => {
    setIsOpen(!isOpen);
  };

  const headerListRender = hyperLinks.map((item) => (
    <li
      key={item.id}
      id={`item-${item.id}`}
      className={`flex w-1/2 items-center justify-center`}>
      <motion.a
        href={item.link}
        onClick={handleClickLink}
        className='header-nav-mob text-content border-header w-full rounded-lg border-2 px-5 text-center capitalize'>
        {item.name}
      </motion.a>
    </li>
  ));
  return (
    <div className={`flex flex-col items-center justify-center gap-5 px-5`}>
      <div className='top pt-4'>
        <img className='h-[200px] w-full object-cover' src='sandra.png' alt='' />
      </div>
      <div className='bottom flex flex-col items-center justify-between gap-5 pt-16'>
        <ul className='flex w-full flex-col items-center gap-5'>{headerListRender}</ul>
        <p className='pr-7'>
          Hello there, its me {personalInfo[0]}. and welcome to this section of my
          portfolio.
        </p>
        <span className='text-right text-xs text-stone-500'>{personalInfo[1]}</span>
      </div>
    </div>
  );
};

export default HeaderOpen;
