import HeroContent from '../layout/HeroContent';

const HeroSection = () => {
  return (
    <section id='hero' className='hero scroll-mt-[10rem]'>
      <div className='container'>
        <div className='hero--container relative'>
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
