'use client';

import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { StoreContext } from '@/global/store/StoreContext';
import {
  setSuccess,
  setNotifType,
} from '../../global/store/StoreAction';
import { setMessage } from '@/global/helper/actions/ReduxActions';

type notifierProps = {
  toastDuration?: number;
  className?: string;
};

const Notifier = ({
  toastDuration = 3000,
  className,
}: notifierProps) => {
  // equivalent to 3 seconds
  const { store, dispatch } =
    React.useContext(StoreContext);
  // manual closer
  const handleCloseMain = () => dispatch(setSuccess(false));
  // auto closer init
  function toastDetails({
    toastDuration,
  }: {
    toastDuration?: number;
  }) {
    if (toastDuration ?? null) {
      setTimeout(() => {
        dispatch(setSuccess(false));
        dispatch(setNotifType(''));
      }, toastDuration);
    }
  }
  // from store(data) > to this component. used to check if dev wants to set notifier to have a long text. if else it defeaults to null.:
  const notifierType = store.notifType
    ? store.notifType
    : null;
  // auto closer activator
  React.useEffect(() => {
    toastDetails({ toastDuration });
  }, []);
  return (
    <>
      <div
        className={`${className} ${notifierType === 'long' ? 'h-[60px] w-2/3 justify-center' : 'h-[30px] w-1/2'} bg-secondary fixed top-[55.5px] left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-2 rounded-md border border-stone-600 text-xs font-semibold text-green-600 md:top-1/11 md:right-2 md:left-auto md:w-1/3 md:-translate-x-0 lg:top-20 lg:h-[55px] lg:w-1/4 xl:w-1/6 xl:text-base dark:text-green-200`}>
        <FaCheck
          className={`${notifierType === 'long' ? 'w-1/5' : ''}`}
        />
        <span
          className={`text-indiv ${notifierType === 'long' ? 'w-4/5 text-xs' : 'lg:text-text-lg text-xs md:text-base'} `}>
          {store.message}
        </span>
      </div>
    </>
  );
};

export default Notifier;
