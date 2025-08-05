import React from 'react';

type Props = { children?: React.ReactNode };

const RenderMain = (props: Props) => {
  const renderChildren = props.children
    ? props.children
    : null;

  return (
    <>
      <div className='w-full gap-5 pt-[70px] md:pt-[85px] lg:pt-[100px]'>
        {renderChildren}
      </div>
    </>
  );
};

export default RenderMain;
