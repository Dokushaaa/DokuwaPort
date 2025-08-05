import React from 'react';

type Props = {
  children: React.ReactNode;
  content: string;
  slaveClassName?: string;
  numDirectory?: number;
  typeOfTooltip?: number;
};

const TooltipReusable: React.FC<Props> = ({
  children,
  content,
  slaveClassName,
  numDirectory,
  typeOfTooltip,
}) => {
  // checks if const has memory (required)
  const displayContent = content ? content : 'Empty';
  const displayChildren = children ? children : 'Empty';
  // checks if const has memory (auto-defaults)
  const displayTooltip = typeOfTooltip ? typeOfTooltip : 0;

  // type setter ${classList[typeNum]}
  const classType = [
    'default',
    'textSlave',
    'other',
    'add-here',
  ];

  return (
    <>
      {/* hidden lg:inline-block  invisible lg:visible*/}
      <div className='slave-container group relative inline-block w-full'>
        {displayChildren}
        <span
          // id: slave-${getFromCounter}
          id={`slave-${numDirectory}`}
          // class: slave-text arrayEntry[typeNum]
          className={`slave-text ${classType[displayTooltip]}-${numDirectory} hidden lg:flex ${slaveClassName} p1 invisible absolute top-full z-[999] mt-2 w-auto max-w-[50rem] rounded px-5 opacity-0 group-hover:visible group-hover:opacity-100`}>
          {displayContent}
        </span>
      </div>
    </>
  );
};

export default TooltipReusable;
