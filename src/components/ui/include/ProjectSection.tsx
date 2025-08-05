import ProjectContent from '../layout/ProjectContent';

const ProjectSection = () => {
  return (
    <section
      id='projects'
      className='projects scroll-mt-20'>
      <div className='container'>
        <div className='projects--container relative h-full w-full'>
          <ProjectContent />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
