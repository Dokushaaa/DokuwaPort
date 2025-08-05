'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { ViewProjectItem } from '@/components/functions/ViewProjectItem';
import {
  cardListArray,
  cardListType,
} from '@/data/_content_projtects';
import Image from 'next/image';

// ...same cardListType and cardListArray from your original code...

export const ProjectItemRender = () => {
  const [selectedCard, setSelectedCard] =
    useState<cardListType | null>(null);

  return (
    <div className='grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      {cardListArray.map(item => (
        <div key={item.id} className='cardItem'>
          <div className='rgba bg-secondary mb-2 flex min-h-[325px] flex-col justify-evenly rounded-md px-3 py-2 md:min-h-[400px]'>
            <Image
              width={300}
              height={300}
              className='rounded-md'
              src={item.cardImage}
              alt={item.cardTitle}
            />
            <div className='flex w-full flex-col items-start md:px-4 md:pb-2'>
              <h5 className='mb-1 pt-2'>
                {item.cardTitle}
              </h5>
              <p className='pb-2 text-sm'>
                {item.cardDescription}
              </p>
              <div className='cardInfo flex w-full flex-row items-center justify-between gap-2'>
                {/* Icon Section */}
                <div className='cardInfo-TechStack flex min-w-0 flex-1'>
                  <ul className='flex flex-wrap items-center gap-1'>
                    {item.cardStack.map(({ icon }, idx) => (
                      <li
                        key={idx}
                        className='circle icon shrink-0'>
                        {icon}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Section */}
                <button
                  onClick={() => setSelectedCard(item)}
                  className='cardInfo-ViewButton linkButton rgba flex flex-shrink-0 cursor-pointer items-center justify-end gap-2'>
                  <span className='text-sm whitespace-nowrap md:text-base'>
                    View Project
                  </span>
                  <FaArrowRight className='-rotate-48 text-base' />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <AnimatePresence>
        {selectedCard && (
          <ViewProjectItem
            card={selectedCard}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
