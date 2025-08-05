'use client';
import Image from 'next/image';
import { JSX } from 'react';
import {
  FaArrowRight,
  FaCss3,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import {
  SiAxios,
  SiHtml5,
  SiTailwindcss,
} from 'react-icons/si';

export interface cardListType {
  id: number;
  cardImage: string;
  cardTitle: string;
  cardDescription: string;
  cardStack: { icon: JSX.Element; name: string }[];
  cardView?: string;
}

let cardListCounter = 1;
let cardIconCounter = 1;
export const cardListArray: cardListType[] = [
  {
    id: cardListCounter++,
    cardImage: '/projects/insidestyle.png',
    cardTitle: 'Inside Style',
    cardDescription:
      'Inside Style is a design system UI showcase project.',
    cardStack: [
      {
        icon: <SiHtml5 key={cardIconCounter++} />,
        name: 'HTML5',
      },
      {
        icon: <FaCss3 key={cardIconCounter++} />,
        name: 'CSS3',
      },
      {
        icon: <FaJs key={cardIconCounter++} />,
        name: 'JavaScript',
      },
    ],
    cardView: '',
  },
  {
    id: cardListCounter++,
    cardImage: '/projects/insight.png',
    cardTitle: 'Insight Interior',
    cardDescription:
      'Insight Interior is a design system UI showcase project.',
    cardStack: [
      {
        icon: <SiHtml5 key={cardIconCounter++} />,
        name: 'HTML5',
      },
      {
        icon: <SiTailwindcss key={cardIconCounter++} />,
        name: 'Tailwind CSS',
      },
      {
        icon: <FaJs key={cardIconCounter++} />,
        name: 'JavaScript',
      },
    ],
    cardView: '',
  },
  {
    id: cardListCounter++,
    cardImage: '/projects/therecipe.png',
    cardTitle: 'The Recipe',
    cardDescription:
      'The Recipe Cookbook is a design system UI showcase project.',
    cardStack: [
      {
        icon: <SiHtml5 key={cardIconCounter++} />,
        name: 'HTML5',
      },
      {
        icon: <FaSass key={cardIconCounter++} />,
        name: 'SASS',
      },
      {
        icon: <FaJs key={cardIconCounter++} />,
        name: 'JavaScript',
      },
    ],
    cardView: '',
  },
  {
    id: cardListCounter++,
    cardImage: '/projects/ramenshop.png',
    cardTitle: 'Michi Ichiraku Ramen',
    cardDescription:
      'Michi Ichiraku Ramen is a design system UI showcase project.',
    cardStack: [
      {
        icon: <SiHtml5 key={cardIconCounter++} />,
        name: 'HTML5',
      },
      {
        icon: <FaSass key={cardIconCounter++} />,
        name: 'SASS',
      },
      {
        icon: <FaJs key={cardIconCounter++} />,
        name: 'JavaScript',
      },
    ],
    cardView: '',
  },
  {
    id: cardListCounter++,
    cardImage: '/projects/rokiport.png',
    cardTitle: 'Roki Portfolio',
    cardDescription:
      'Roki Portfolio Ramen is a design system UI showcase project.',
    cardStack: [
      {
        icon: <FaReact key={cardIconCounter++} />,
        name: 'ReactJs',
      },
      {
        icon: <SiTailwindcss key={cardIconCounter++} />,
        name: 'Tailwind CSS',
      },
      {
        icon: <FaPhp key={cardIconCounter++} />,
        name: 'PHP',
      },
      {
        icon: <SiAxios key={cardIconCounter++} />,
        name: 'Axios',
      },
    ],
    cardView: '',
  },
  {
    id: cardListCounter++,
    cardImage: '/projects/pyusermanagement.png',
    cardTitle: 'Python (Flask) User Management System',
    cardDescription:
      'Python (Flask) User Management System is a design system UI showcase project.',
    cardStack: [
      {
        icon: <FaReact key={cardIconCounter++} />,
        name: 'React Js',
      },
      {
        icon: <SiTailwindcss key={cardIconCounter++} />,
        name: 'Tailwind CSS',
      },
      {
        icon: <FaPython key={cardIconCounter++} />,
        name: 'Python',
      },
      {
        icon: <SiAxios key={cardIconCounter++} />,
        name: 'Axios',
      },
    ],
    cardView: '',
  },
];

export const cardListRender = cardListArray.map(item => (
  <div key={item.id} className='cardItem'>
    <div className='rgba bg-secondary mb-2 flex min-h-[325px] flex-col justify-evenly rounded-md px-3 py-2 md:mb-0 md:min-h-[400px]'>
      <Image
        width={300}
        height={300}
        className='rounded-md'
        src={item.cardImage}
        alt={item.cardTitle}
      />
      <div className='flex w-full flex-col items-start md:px-4 md:pb-2'>
        <h5 className='mb-1 pt-2'>{item.cardTitle}</h5>
        <p className='pb-2 text-sm'>
          {item.cardDescription}
        </p>
        <div className='cardInfo flex w-full flex-row items-center justify-between gap-2'>
          <div className='w-3/5'>
            <ul className='flex flex-row items-center justify-start gap-1'>
              {item.cardStack.map(({ icon, name }, idx) => (
                <li
                  key={idx}
                  className='circle icon'
                  title={name}>
                  {icon}
                </li>
              ))}
            </ul>
          </div>
          <div className='linkButton rgba flex w-2/5 items-center justify-center gap-2 md:justify-end'>
            <p className='translate-x-1/4 text-sm md:translate-x-0 md:text-base'>
              View Project
            </p>

            <FaArrowRight className='-rotate-48 text-base' />
          </div>
        </div>
      </div>
    </div>
  </div>
));
