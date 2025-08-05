import AboutContent from '../layout/AboutContent';

const AboutSection = () => {
  return (
    <section
      id='aboutSection'
      className='aboutSection scroll-mt-[5rem]'>
      <div className='container'>
        <div className='about--container relative h-full'>
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
