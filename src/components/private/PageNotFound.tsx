import Link from 'next/link';
import React from 'react';

const PageNotFound = () => {
  return (
    <>
      <div className='404pager'>
        <div className='flex h-screen flex-col items-center justify-center gap-2'>
          {/* change this later this should not be a h1 and have the value of text-3xl */}
          <h1 className='text-secondary debug'>
            <span className='italic'>404</span> - Page Not
            Found
          </h1>
          <p>
            Sorry, the page you are looking for could not be
            found.
          </p>
          <img
            src='/public/404.gif'
            alt='ducking-around'
            className='border-gradient-to-r size-[20rem] rounded-md border-2 from-blue-500 to-purple-500 transition-all'
          />
          <button className='btn btn-normal btn--secondary'>
            <Link href='/login'>Proceed to Login?</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
