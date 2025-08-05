'use client';
import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { MdOutlineQuestionMark } from 'react-icons/md';
import ModalWrapper from './ModalWrapper';

import { StoreContext } from '@/global/store/StoreContext';
import { setSuccess } from '../../global/store/StoreAction';

const Toast = ({
  toastDuration = 5000,
}: {
  toastDuration?: number;
}) => {
  const { store, dispatch } =
    React.useContext(StoreContext);
  // manual closer
  const handleCloseMain = () => dispatch(setSuccess(false));
  // auto closer init
  const toastDetails = React.useCallback(
    ({ toastDuration }: { toastDuration?: number }) => {
      if (toastDuration ?? null) {
        setTimeout(() => {
          dispatch(setSuccess(false));
        }, toastDuration);
      }
    },
    [dispatch] // include dependencies the function uses
  );

  React.useEffect(() => {
    toastDetails({ toastDuration });
  }, [toastDetails, toastDuration]);
  return (
    <>
      <>
        <div className='parent bg-primary w-1/8'>
          <ModalWrapper position={'center'}>
            <div className='bg-primary dark:bg-primary animator flex h-auto w-[400px] flex-col gap-5 rounded-xl p-5'>
              <div className='flex items-center justify-end'>
                <button
                  className='text-secondary dark:text-accent text-2xl'
                  onClick={handleCloseMain}>
                  <FaTimesCircle />
                </button>
              </div>
              <div className='text-secondary dark:text-accent flex items-center justify-center text-center text-7xl'>
                <MdOutlineQuestionMark />
              </div>
              <div className='pb-2'>
                {store.message === '' ? (
                  <>
                    <p className='dark:text-content/90 mb-0 py-2 text-center'>
                      Where data?
                    </p>
                  </>
                ) : (
                  <>
                    <p className='dark:text-content/90 mb-0 py-2 text-center'>
                      {store.message}
                    </p>
                  </>
                )}
              </div>
              <button
                onClick={handleCloseMain}
                className='bg-secondary text-indiv dark:bg-accent rounded-lg p-2'>
                Confirm
              </button>
            </div>
          </ModalWrapper>
        </div>
      </>
    </>
  );
};

export default Toast;
