import React, { JSX } from 'react';
import {
  FaCss3,
  FaFacebook,
  FaFileAlt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaPython,
  FaSass,
  FaTwitter,
  FaWordpress,
} from 'react-icons/fa';
import {
  RiJavaFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import {
  SiBlender,
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiSap,
  SiTypescript,
} from 'react-icons/si';
import {
  TbBrandCSharp,
  TbFileTypeXml,
} from 'react-icons/tb';
export const motionVariables = {
  // animation variables
  initOpacity: 0,
  animateInOpacity: 1,
  animateOutOpacity: 0,
  duration: 0.75,
  // position animation
  initLeftX: -100,
  animateInLeftX: 0,
  animateOutLeftX: -100,
  initRightX: 100,
  animateInRightX: 0,
  animateOutRightX: 100,
} as const;
export const typeWriterVariables = {
  cursorClassName:
    'bg-info dark:bg-accent py-2 translate-y-1/6',
  typeEffectBlack: 'typeEffB py-2',
  typeEffectWhite: 'typeEffW py-2',
} as const;
/* Page : Home Page*/
let counter: number = 1;

// HeroBanner
let socialLinksCounter: number = 1;
// gridbox
let techIconCounter: number = 1;
let techItemCounter: number = 1;

// certification list
let certItemCounter: number = 1;
let certCategoryCount: number = 1;

type certTypeList = {
  certOrgName: string;
  cardClassName?: string;
  certInfo: certItem[];
  id?: number;
};
type certItem = {
  certName: string;
  certCount: number;
};
export const certList: certTypeList[] = [
  // entry 1
  {
    id: certCategoryCount++,
    cardClassName: '',
    certOrgName: 'Philippines Skilling Summit 2022',
    certInfo: [
      {
        certName: 'Computer Assisted Programming Track',
        certCount: certItemCounter++,
      },
      {
        certName: 'Digital Security Track',
        certCount: certItemCounter++,
      },
      {
        certName: 'Gaming Technology Track',
        certCount: certItemCounter++,
      },
      {
        certName: 'Quantum Computing Track',
        certCount: certItemCounter++,
      },
    ],
  },
  // entry 2
  {
    id: certCategoryCount++,
    cardClassName: '',
    certOrgName: 'GoPhilippines',
    certInfo: [
      {
        certName: 'Introduction to Angular',
        certCount: certItemCounter++,
      },
      {
        certName: 'Programming Languages: Java, C/C++/C#',
        certCount: certItemCounter++,
      },
    ],
  },
  // entry 3
  {
    id: certCategoryCount++,
    cardClassName: '',
    certOrgName: 'Oracle Academy',
    certInfo: [
      {
        certName: 'Database Foundations',
        certCount: certItemCounter++,
      },
    ],
  },
  // entry 4
  {
    id: certCategoryCount++,
    cardClassName: '',
    certOrgName: 'Huawei Talent Online',
    certInfo: [
      {
        certName: 'Network Foundations',
        certCount: certItemCounter++,
      },
    ],
  },
  // entry 5
  {
    id: certCategoryCount++,
    cardClassName: '',
    certOrgName: 'FreeCodeCamp',
    certInfo: [
      {
        certName: 'Responsive Web Design',
        certCount: certItemCounter++,
      },
      {
        certName:
          'JavaScript Algorithms and Data Structures',
        certCount: certItemCounter++,
      },
    ],
  },
  // entry 6
  {
    id: certCategoryCount++,
    cardClassName: '',
    certOrgName: 'Frontline Business Solutions',
    certInfo: [
      {
        certName:
          'Design Website Mockup and UI using Figma',
        certCount: certItemCounter++,
      },
      {
        certName:
          'Convert Mockup Design into an Actual Web Pages (HTML/CSS)',
        certCount: certItemCounter++,
      },
      {
        certName:
          'Apply SASS Technology in Wwebsite Conversion',
        certCount: certItemCounter++,
      },
      {
        certName:
          'Convert static website to WordPress Website',
        certCount: certItemCounter++,
      },
      {
        certName:
          'Apply basic scripting language using JavaScript',
        certCount: certItemCounter++,
      },
      {
        certName:
          'Build website layouts fast and efficiently using Tailwind CSS utility classes',
        certCount: certItemCounter++,
      },
      {
        certName: 'Develop Responsive Web Desing',
        certCount: certItemCounter++,
      },
      {
        certName: 'Frontend Development using ReactJs',
        certCount: certItemCounter++,
      },
      {
        certName: 'Backend Development using PHP and MySQL',
        certCount: certItemCounter++,
      },
    ],
  },
];

export const certificationsRender = certList.map(
  category => (
    <div
      key={category.id}
      id={`item-${category.id}`}
      className={`rgba animator ${category.cardClassName} bg-secondary/95 dark:bg-secondary/50 w-full rounded-md p-2 px-3`}>
      <p className='mb-1 font-semibold'>
        {category.certOrgName}
      </p>
      <ul className='ml-4 list-disc pb-4'>
        {category.certInfo.map(cert => (
          <li key={cert.certCount} className=''>
            {cert.certName}
          </li>
        ))}
      </ul>
    </div>
  )
);
// education:
let [educationIdCount, educationItemIdCount]: [
  number,
  number,
] = [1, 1];

type educationType = {
  specialType?: string;
  educationId: number;
  educationSuperCategory: string;
  educationItem: educationCard[];
};
type educationCard = {
  educationItemId?: number;
  educationName: string;
  timeSpan?: string;
  educationAddress?: string;
  educationIcon?: JSX.Element;
};
type ProgrammingLanguage = {
  name: string;
  icon: JSX.Element;
};

const programmingLanguagesList: ProgrammingLanguage[] = [
  { name: 'NextJs', icon: <RiNextjsFill /> },
  { name: 'ReactJs', icon: <RiReactjsFill /> },
  {
    name: 'Tailwind-Css',
    icon: <RiTailwindCssFill />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
  },
  { name: 'SASS', icon: <FaSass /> },
  { name: 'Java', icon: <RiJavaFill /> },
  { name: 'SAP', icon: <SiSap /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'MongoDb', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Blender', icon: <SiBlender /> },
  { name: 'XML', icon: <TbFileTypeXml /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'C#', icon: <TbBrandCSharp /> },
  { name: 'WordPress', icon: <FaWordpress /> },
  { name: 'PHP', icon: <SiPhp /> },
];
const educationListArray: educationType[] = [
  // elementary
  {
    specialType: 'record',
    educationId: educationIdCount++,
    educationSuperCategory: 'Elementary School',
    educationItem: [
      {
        educationItemId: educationItemIdCount++,
        educationName: 'Canossa College San Pablo City',
        timeSpan: '2014',
        educationAddress: 'College in San Pablo, Laguna',
      },
    ],
  },
  // junior highschool
  {
    specialType: 'record',
    educationId: educationIdCount++,
    educationSuperCategory: 'Junior High School',
    educationItem: [
      {
        educationItemId: educationItemIdCount++,
        educationName: 'Liceo de San Pablo',
        timeSpan: '2018',
        educationAddress: 'School in San Pablo, Laguna',
      },
    ],
  },
  // senior highschool
  {
    specialType: 'record',
    educationId: educationIdCount++,
    educationSuperCategory: 'Senior High School',
    educationItem: [
      {
        educationItemId: educationItemIdCount++,
        educationName: 'ACLC College',
        timeSpan: '2020',
        educationAddress: 'College in San Pablo, Laguna',
      },
    ],
  },
  // college
  {
    specialType: 'record',
    educationId: educationIdCount++,
    educationSuperCategory: 'College',
    educationItem: [
      {
        educationItemId: educationItemIdCount++,
        educationName: 'STI College San Pablo',
        timeSpan: '2024',
        educationAddress: 'College in San Pablo, Laguna',
      },
    ],
  },
  // programming languages
  {
    specialType: 'icons',
    educationId: educationIdCount++,
    educationSuperCategory: 'Programming Languages',
    educationItem: programmingLanguagesList.map(item => ({
      educationItemId: educationItemIdCount++,
      educationName: item.name,
      educationIcon: item.icon,
    })),
  },
];
export const educationRender = educationListArray.map(
  item => (
    <div
      key={item.educationId}
      id={``}
      className={`w-full`}>
      {/* type: Record */}
      {item.specialType === 'record' && (
        // Records Content
        <div className='rgba animator bg-secondary w-full rounded-md px-2 py-2'>
          <p className='mb-1 text-base font-semibold'>
            {item.educationSuperCategory}
          </p>
          <ul className='w-full pb-2 md:px-2'>
            {item.educationItem.map(subItem => (
              <div key={subItem.educationItemId}>
                <li className='educInfo flex w-full items-center justify-between gap-2'>
                  {subItem.educationIcon}
                  <span className='w-2/3'>
                    {subItem.educationName}
                  </span>
                  <span className='w-1/3 text-right'>
                    {subItem.timeSpan}
                  </span>
                </li>
                <li className='educAddress'>
                  {/* DNT */}
                  <span className='text-xs text-gray-400'>
                    {subItem.educationAddress}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
      {/* type: Icons */}
      {item.specialType === 'icons' && (
        // Icons Content
        <div className='pl-icons rgba animator bg-secondary rounded-md px-2 py-3 lg:px-10 lg:py-5'>
          <p className='mb-3 font-semibold'>
            Programming Languages
          </p>
          <div className='grid grid-cols-4 gap-3'>
            {item.educationItem.map(subItem => (
              <div
                key={subItem.educationItemId}
                className='flex items-center justify-center lg:items-start lg:justify-start lg:gap-2'>
                <i className='text-4xl text-inherit'>
                  {subItem.educationIcon}
                </i>
                <p className='hidden items-center justify-center text-base text-inherit xl:flex xl:pt-2'>
                  {subItem.educationName}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
);
// work experience:
type workTypeList = {
  roleName: string;
  timeSpan: string;
  card: workCard[];
  id: number;
  workOrg: string;
};
type workCard = {
  id: number;
  workResponsibilites: string[];
  workTasks: string[];
};
const workListArray: workTypeList[] = [
  {
    id: 0,
    workOrg: 'Frontline Business Solutions INC.',
    roleName: 'Web Designing Intern',
    timeSpan: 'Febraury 2024 - May 2024',
    card: [
      {
        id: 0,
        workResponsibilites: [
          "Develop customized designs based on the OJT's fufillment requirements",
          "To design and implement various techniques according to project's features",
        ],
        workTasks: [
          'UI/UX Mock-up design via Figma',
          'Front-end Web-development via HTML, CSS, JavaScript, SASS, Tailwind-CSS, and ReactJs',
          'Back-end Web-development via PHP, and MySQL',
        ],
      },
    ],
  },
  {
    id: 1,
    workOrg: 'Various',
    roleName: 'Freelancing Web Developer (ReactJs)',
    timeSpan: 'July 2024 - June 2025',
    card: [
      {
        id: 1,
        workResponsibilites: [
          'To develop a website to be able to function as intended while being responsive as much as possible while delivering flawless interactivity',
          "To design and implement various techniques according to the project's features",
        ],
        workTasks: [
          'Front-end Web-development via HTML, CSS, JavaScript, Tailwind-CSS,  ReactJs, Vue.Js, and AngularJs',
          'Back-end Web-development via PHP, MySQL and NextJs',
          'ShadCn Ui, Carrd.co',
        ],
      },
    ],
  },
];
export const workListRender = workListArray.map(item => (
  <div
    key={item.id}
    id={`item-${item.id}`}
    className={`rgba ${item.id} bg-secondary/95 dark:bg-secondary/50 w-full rounded-md p-2 px-3`}>
    <p className='mb-1 font-semibold'>{item.roleName}</p>
    <p className='mb-1 font-semibold'>{item.workOrg}</p>
    <ul className='ml-4 list-disc'>
      {item.card.map(card => (
        <li key={card.id} className='pb-4'>
          {card.workResponsibilites}
          {card.workTasks}
        </li>
      ))}
    </ul>
  </div>
));
// core info:
export const personalInfo = {
  0: 'Arris Saavedra',
  1: 'Website Developer | Software Engineer',
  2: '',
};

// header & footer
export const hyperLinks = [
  {
    id: counter++,
    name: 'Home',
    link: '#hero',
    tooltip: 'Return to Home',
  },

  {
    id: counter++,
    name: 'About',
    link: '#aboutSection',
    tooltip: 'Get to know me more.',
  },
  {
    id: counter++,
    name: 'Projects',
    link: '#projects',
    tooltip: 'Take a look at my projects',
  },
  {
    id: counter++,
    name: 'Contact',
    link: '#cta',
    tooltip: 'Contact me so we can work together.',
  },
];
// footer icons
export const hyperIcons = [
  {
    id: counter++,
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/arris-jeff-saavedra-a6787a260/',
  },
  {
    id: counter++,
    icon: <FaFileAlt />,
    name: 'CSV',
    link: '/about',
  },
  {
    id: counter++,
    icon: <FaGithub />,
    name: 'GitHub',
    link: 'https://github.com/Dokushaaa',
  },
];
// heroBanner
type socialLinksType = {
  id: number;
  name: string;
  icon: JSX.Element;
  link?: string;
};
const socialLinks: socialLinksType[] = [
  {
    id: socialLinksCounter++,
    name: 'Github',
    icon: <FaGithub />,
    link: 'https://github.com/Dokushaaa',
  },
  {
    id: socialLinksCounter++,
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/arris-jeff-saavedra-a6787a260/',
  },
  {
    id: socialLinksCounter++,
    name: 'FaceBook',
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/ArrisSaavedra',
  },
  {
    id: socialLinksCounter++,
    name: 'Twitter',
    icon: <FaTwitter />,
    link: 'https://x.com/SaavedraArris',
  },
  {
    id: socialLinksCounter++,
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/saavedraarris/',
  },
];
export const socialLinksRender = socialLinks.map(item => (
  <li
    key={item.id}
    className='group flex w-fit cursor-pointer items-center justify-center gap-2 py-2 text-center active:scale-105'>
    <a
      className='animator group-hover:text-accent text-xl group-hover:scale-105 xl:w-1/4'
      target='_blank'
      href={item.link}>
      {item.icon}
    </a>
  </li>
));
// Page: GridBox.tsx:
type gridBoxText = {
  content: string;
  id?: string;
  className?: string;
};
export const gridBoxList: gridBoxText[] = [
  {
    id: '0',
    content: 'Focused, Motivated, and Goal-driven.',
    className: '',
  },
  {
    id: '1',
    content: 'Flexibility at its finest.',

    className: '',
  },
  {
    id: '2',
    content: 'I constantly try to improve',
    className: '',
  },
  {
    id: '3',
    content: 'My TechStack:',
    className: '',
  },
];

type techStackType = {
  name: string;
  id: number;
  className: string;
  content: string;
};
const techStackList: techStackType[] = [
  {
    name: 'ReactJs',
    id: techItemCounter++,
    className: '-translate-x-1/4',
    content: 'ReactJs',
  },
  {
    name: 'NextJs',
    id: techItemCounter++,
    className: '-translate-x-1/16',
    content: 'NextJs',
  },
  {
    name: 'TailwindV4',
    id: techItemCounter++,
    className: '-translate-x-1/4',
    content: 'TailwindV4',
  },
  {
    name: 'TypeScript',
    id: techItemCounter++,
    className: '-translate-x-1/16',
    content: 'TypeScript',
  },
];

export const callTechStack = techStackList.map(item => (
  <li
    className={`${item.name} ${item.className} techItems`}
    key={item.id}>
    {item.content}
  </li>
));
type techIcon = {
  iconRender: React.ReactNode;
  iconId?: number;
  iconName?: string;
};

const techIconRender: techIcon[] = [
  {
    iconRender: <RiNextjsFill />,
    iconId: techIconCounter++,
    iconName: 'NextJs',
  },
  {
    iconRender: <RiTailwindCssFill />,
    iconId: techIconCounter++,
    iconName: 'TailwindCss',
  },
  {
    iconRender: <RiReactjsFill />,
    iconId: techIconCounter++,
    iconName: 'Reactjs',
  },
  {
    iconRender: <SiTypescript />,
    iconId: techIconCounter++,
    iconName: 'Typescript',
  },
];
export const callTechIcon = techIconRender.map(item => (
  <li
    key={item.iconId}
    className={`techIconItem ${item.iconName}`}
    id={`${item.iconId}`}>
    {item.iconRender}
  </li>
));
