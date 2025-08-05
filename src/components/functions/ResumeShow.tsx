'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileDownload, FaTimes } from 'react-icons/fa';
import { StoreContext } from '@/global/store/StoreContext';
import {
  setInfo,
  setSelectedResume,
} from '@/global/store/StoreAction';

type Props = {};

const resumes = [
  // item 1:
  {
    cardImages: [
      '/dev/modern_resume_1.jpg',
      '/dev/modern_resume_2.jpg',
    ],
    resumeDownload:
      '/dev/Saavedra-Modern-Resume-Official-Aug-2025.pdf',
  },
  // item 2:
  {
    cardImages: [
      '/dev/traditional_resume_1.jpg',
      '/dev/traditional_resume_2.jpg',
    ],
    resumeDownload:
      '/dev/Saavedra-Resume-Official-Aug-2025.pdf',
  },
];

const ResumeShow: React.FC<Props> = () => {
  const { store, dispatch } =
    React.useContext(StoreContext);

  const handleShowModal = (resumeIndex: number) => {
    dispatch(setSelectedResume(resumes[resumeIndex]));
    dispatch(setInfo(true));
  };
  const buttonClassName =
    'btn btn-normal animator flex items-center gap-2 rounded-md border-2 border-stone-400 bg-gray-200 bg-gray-500 shadow-lg hover:bg-gray-600 w-full md:w-1/3';
  return (
    <>
      <div className='flex w-full flex-col items-center justify-center gap-2 md:flex-row'>
        <button
          onClick={() => handleShowModal(0)}
          className={buttonClassName}>
          View Resume 1
        </button>
        <button
          onClick={() => handleShowModal(1)}
          className={buttonClassName}>
          View Resume 2
        </button>
      </div>

      <AnimatePresence>
        {store.info && store.selectedResume && (
          <ResumeModal
            card={store.selectedResume}
            onClose={() => dispatch(setInfo(false))}
          />
        )}
      </AnimatePresence>
    </>
  );
};

type ResumeModalProps = {
  card: {
    cardImages: string[];
    cardTitle?: string;
    cardDescription?: string;
    resumeDownload: string;
  };
  onClose: () => void;
};

const ResumeModal: React.FC<ResumeModalProps> = ({
  card,
  onClose,
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = card.resumeDownload;
    link.download =
      card.resumeDownload.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className='fixed inset-0 top-10 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}>
      <motion.div
        className='bg-secondary relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-lg p-2 shadow-xl md:p-4'
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='bg-secondary animator hover:text-indiv absolute top-3 right-3 cursor-pointer rounded-md p-3 text-gray-600'>
          <FaTimes size={20} />
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className='bg-secondary animator hover:text-indiv absolute top-15 right-3 cursor-pointer rounded-md p-3 text-gray-600 md:top-3 md:right-15'>
          <FaFileDownload size={20} />
        </button>

        <div className='flex flex-col items-center gap-4 md:flex-row'>
          {card.cardImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Resume ${index + 1}`}
              className='max-h-[50vh] w-full rounded-md object-contain md:max-h-[75vh] md:w-[48%]'
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeShow;
