'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CodeBase } from '@/data/_content_codebase';
import React from 'react';
import { CodeBlock } from '../vendor/code-block';
import { TypewriterEffect } from '../vendor/typewriter-effect';
import { typeWriterVariables } from '@/data/content';

// languageTypes
type CodeTab =
  | 'jsx'
  | 'tsx'
  | 'python'
  | 'php'
  | 'wordpress';
// fileNaming
type FileTab =
  | 'button.jsx'
  | 'button.tsx'
  | 'createTable.py'
  | 'hero_create.php'
  | 'wp_shortcode.php';
type CodeLang = 'jsx' | 'tsx' | 'python' | 'php';
// assigning of types and names
const fileMap: Record<
  FileTab,
  { codeTab: CodeTab; label: string; language: CodeLang }
> = {
  'button.jsx': {
    codeTab: 'jsx',
    label: 'JSX',
    language: 'jsx',
  },
  'button.tsx': {
    codeTab: 'tsx',
    label: 'TSX',
    language: 'tsx',
  },
  'createTable.py': {
    codeTab: 'python',
    label: 'Python',
    language: 'python',
  },
  'hero_create.php': {
    codeTab: 'php',
    label: 'PHP',
    language: 'php',
  },
  'wp_shortcode.php': {
    codeTab: 'wordpress',
    label: 'WordPress',
    language: 'php', // -> this is intentional
  },
};
// codeSnippet handlers
const codeSnippets: Record<
  CodeTab,
  string | React.JSX.Element
> = {
  jsx: CodeBase[0],
  tsx: CodeBase[1],
  php: CodeBase[2],
  python: CodeBase[3],
  wordpress: CodeBase[4], // still used
};
// line highlights
const highlightMap: Record<FileTab, number[]> = {
  'button.jsx': [2, 3, 4, 5, 9, 11],
  'button.tsx': [
    5, 6, 7, 9, 10, 18, 27, 28, 29, 30, 31, 32,
  ],
  'createTable.py': [3, 16, 19, 23, 29, 33, 35],
  'hero_create.php': [4, 5, 9, 21, 22],
  'wp_shortcode.php': [3, 4, 5, 11, 14, 18, 20],
};

const CodeSelector = () => {
  // setters
  const [fileName, setFileName] =
    React.useState<FileTab>('button.jsx');
  const { codeTab, language } = fileMap[fileName];
  //  handlers
  const handleFileSelect = (file: FileTab) => {
    setFileName(file);
  };
  const wordsDisplay: { text: string }[] = [
    { text: 'Code' },
    { text: 'Example' },
  ];

  return (
    <>
      <div className='rgba flex w-full flex-col items-center justify-center gap-5 py-5'>
        <TypewriterEffect
          className={`${typeWriterVariables.typeEffectBlack} pb-1 font-semibold`}
          words={wordsDisplay}
          cursorClassName={
            typeWriterVariables.cursorClassName
          }
        />
        <div className='rgba bg-secondary mx-auto w-full max-w-xl rounded-xl border shadow'>
          <div className='flex flex-col gap-2 p-4 md:flex-row md:justify-evenly'>
            {Object.entries(fileMap).map(
              ([file, { label }]) => (
                <button
                  key={file}
                  onClick={() =>
                    handleFileSelect(file as FileTab)
                  }
                  className={`hover:bg-secondary hover:text-indiv hover:border-indiv animator w-full cursor-pointer rounded-md border-2 border-transparent px-4 py-2 text-sm font-medium transition-all hover:scale-105 md:w-full ${
                    fileName === file
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                  {label}
                </button>
              )
            )}
          </div>
        </div>

        <AnimatePresence mode='wait'>
          <div className='w-full overflow-hidden'>
            <motion.div
              key={`${fileName}-${codeTab}`} // ensure re-mount on change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className='w-full'>
              <CodeBlock
                language={language}
                filename={fileName}
                highlightLines={highlightMap[fileName]}
                code={`${codeSnippets[codeTab]}`}
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default CodeSelector;
