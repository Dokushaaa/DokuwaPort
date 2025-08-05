'use client';

import React, { useReducer, ReactNode } from 'react';

import { StoreReducer, Action } from './StoreReducer';

type State = {
  error: boolean;
  info: boolean;
  success: boolean;
  message: string;
  isSave: boolean;
  isShow: boolean;
  isArchive: boolean;
  isRestore: boolean;
  isDelete: boolean;
  isAdd: boolean;
  isActive: boolean;
  isEdit: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isLogin: boolean;
  isSearch: Record<string, string>;
  credentials: Record<string, string>;

  notifType: string;
  selectedResume?: {
    resumeDownload: string;
    cardImages: string[];
    cardTitle?: string;
    cardDescription?: string;
  };
};

interface StoreContextProps {
  store: State;
  dispatch: React.Dispatch<Action>;
}

const initVal: State = {
  error: false,
  info: false,
  success: false,
  message: '',
  isSave: false,
  isShow: false,
  isArchive: false,
  isRestore: false,
  isDelete: false,
  isAdd: false,
  isActive: false,
  isEdit: false,
  isLoading: false,
  isFetching: false,
  isLogin: false,
  isSearch: {},
  credentials: {},
  notifType: '',
  selectedResume: {
    cardImages: [],
    resumeDownload: '',
  },
};

const StoreContext = React.createContext(
  {} as StoreContextProps
);

const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [store, dispatch] = useReducer(
    StoreReducer,
    initVal
  );

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
