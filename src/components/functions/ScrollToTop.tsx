'use client';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  React.useEffect(() => {
    const calcScrollValue = () => {
      const scrollProgress =
        document.getElementById('progressTop');
      const progressValue = document.getElementById(
        'progressTop-value'
      );

      if (!scrollProgress || !progressValue) return;

      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollValue = Math.round(
        (pos * 100) / calcHeight
      );

      scrollProgress.style.opacity = pos > 100 ? '1' : '0';

      scrollProgress.style.background = `conic-gradient(#273043 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.addEventListener('scroll', calcScrollValue);
    window.addEventListener('load', calcScrollValue);

    return () => {
      window.removeEventListener('scroll', calcScrollValue);
      window.removeEventListener('load', calcScrollValue);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='progressTop' onClick={handleClick}>
      <span id='progressTop-value'>
        <FaArrowUp className='text-content text-[15px] lg:text-[25px]' />
      </span>
    </div>
  );
};

export default ScrollToTop;
