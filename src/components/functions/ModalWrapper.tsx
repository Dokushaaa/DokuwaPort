import React from 'react';

const ModalWrapper = ({
  children,
  position,
}: {
  children: React.ReactNode;
  position?: string;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-30 flex h-screen w-full items-center ${
        position === 'center'
          ? 'justify-center'
          : 'justify-end'
      }`}>
      <div
        className={`backdrop bg-content/50 animator absolute top-0 left-0 -z-10 h-full w-full`}></div>
      {children}
    </div>
  );
};

export default ModalWrapper;
