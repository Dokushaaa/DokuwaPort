import Image from 'next/image';
// debug this needs an overhaul.
const MiniDescription = ({
  headingText,
}: {
  headingText: string;
}) => {
  const fetchIsError = '404 is not here';
  return (
    <div className='h-screen w-full pt-20'>
      <div className='container'>
        <h1 className='text-content mb-0 py-2'>
          {/* must have give output on false value */}
          {headingText ?? fetchIsError}
        </h1>
        {/* <img
					src='react.svg'
					alt='confetti'
				/> */}
        <h2 className='text-5xl'>
          Hello there are you reading this?
        </h2>
        <Image
          src='/developer/vision.png'
          alt='alt'
          className='bg-red-400 object-cover'
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default MiniDescription;
