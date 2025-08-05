'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { cardListType } from '@/data/_content_projtects';
import Image from 'next/image';

export const ViewProjectItem = ({
  card,
  onClose,
}: {
  card: cardListType;
  onClose: () => void;
}) => {
  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // clicking background closes modal
    >
      <motion.div
        className='bg-secondary relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-lg p-4 shadow-xl'
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()} // prevent modal click from closing
      >
        <button
          onClick={onClose}
          className='bg-secondary animator hover:text-indiv absolute top-3 right-3 cursor-pointer rounded-md p-3 text-gray-600'>
          <FaTimes size={20} />
        </button>

        <div className='mb-4 flex justify-center'>
          <Image
            width={300}
            height={300}
            src={card.cardImage}
            alt={card.cardTitle}
            className='max-h-[75vh] w-full rounded-md object-contain'
          />
        </div>

        <h2 className='text-indiv mb-2 text-center text-xl font-bold'>
          {card.cardTitle}
        </h2>
        <p className='text-indiv text-center'>
          {card.cardDescription}
        </p>
      </motion.div>
    </motion.div>
  );
};
