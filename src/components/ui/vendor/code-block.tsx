'use client';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import { StoreContext } from '@/global/store/StoreContext';
import {
  setMessage,
  setSuccess,
} from '@/global/store/StoreAction';

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;
  const { dispatch } = React.useContext(StoreContext);
  const copyToClipboard = async () => {
    const textToCopy = tabsExist
      ? tabs[activeTab].code
      : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      dispatch(setSuccess(true));
      dispatch(setMessage('Successfully Copied!'));
    }
  };

  const activeCode = tabsExist
    ? tabs[activeTab].code
    : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div className='relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm'>
      {/* Tabs or filename */}
      <div className='mb-2 flex flex-col gap-2'>
        {tabsExist ? (
          <div className='flex flex-wrap gap-2'>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-1 font-sans text-xs whitespace-nowrap transition-colors ${
                  activeTab === index
                    ? 'border-b border-white text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}>
                {tab.name}
              </button>
            ))}
          </div>
        ) : filename ? (
          <div className='flex items-center justify-between'>
            <span className='text-xs text-zinc-400'>
              {filename}
            </span>
            <button
              onClick={copyToClipboard}
              className='flex cursor-pointer items-center gap-1 font-sans text-xs text-zinc-400 transition-colors hover:text-zinc-200'>
              {copied ? (
                <IconCheck size={14} />
              ) : (
                <IconCopy size={14} />
              )}
            </button>
          </div>
        ) : null}
      </div>

      {/* Code Block */}
      <div className='rounded-md'>
        <SyntaxHighlighter
          language={activeLanguage}
          style={atomDark}
          customStyle={{
            margin: 0,
            background: 'transparent',
            fontSize: '0.875rem',
            whiteSpace: 'pre-wrap', // wraps long lines
            wordBreak: 'break-word', // breaks long words
            width: '100%',
          }}
          wrapLines
          showLineNumbers
          lineProps={lineNumber => ({
            style: {
              backgroundColor:
                activeHighlightLines.includes(lineNumber)
                  ? 'rgba(255,255,255,0.1)'
                  : 'transparent',
              display: 'block',
              width: '100%',
            },
          })}
          PreTag='div'>
          {String(activeCode)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
