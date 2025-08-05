import { typeWriterVariables } from '@/data/content';
import { TypewriterEffect } from '../vendor/typewriter-effect';
import { ProjectItemRender } from '../element/ProjectItemRender';
import ProjectApproach from '../element/ProjectApproach';
import CodeSelector from '../element/CodeSelector';

type Props = {};

const wordsDisplay: { text: string }[] = [
  { text: 'Project' },
  { text: 'Showcase' },
];
const ProjectContent = (props: Props) => {
  return (
    <div className='projects--intro'>
      <div className='flex w-full flex-col items-center gap-2 py-5'>
        <TypewriterEffect
          className={typeWriterVariables.typeEffectBlack}
          words={wordsDisplay}
          cursorClassName={
            typeWriterVariables.cursorClassName
          }
        />
        <ProjectItemRender />
        <ProjectApproach />
        <CodeSelector />
      </div>
    </div>
  );
};

export default ProjectContent;
