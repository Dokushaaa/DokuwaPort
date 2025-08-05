export const setError = (val: boolean) =>
  ({
    type: 'ERROR',
    payload: val,
  }) as const;

export const setInfo = (val: boolean) =>
  ({
    type: 'INFO',
    payload: val,
  }) as const;

export const setMessage = (val: string) =>
  ({
    type: 'MESSAGE',
    payload: val,
  }) as const;

export const setSuccess = (val: boolean) =>
  ({
    type: 'SUCCESS',
    payload: val,
  }) as const;

export const setSave = (val: boolean) =>
  ({
    type: 'SAVE',
    payload: val,
  }) as const;

export const setIsShow = (val: boolean) =>
  ({
    type: 'SHOW',
    payload: val,
  }) as const;

export const setIsArchive = (val: boolean) =>
  ({
    type: 'ARCHIVE',
    payload: val,
  }) as const;

export const setIsRestore = (val: boolean) =>
  ({
    type: 'RESTORE',
    payload: val,
  }) as const;

export const setIsDelete = (val: boolean) =>
  ({
    type: 'DELETE',
    payload: val,
  }) as const;

export const setIsAdd = (val: boolean) =>
  ({
    type: 'IS_ADD',
    payload: val,
  }) as const;

export const setIsSearch = (val: Record<string, string>) =>
  ({
    type: 'IS_SEARCH',
    payload: val,
  }) as const;

export const setIsEdit = (val: boolean) =>
  ({
    type: 'IS_EDIT',
    payload: val,
  }) as const;

export const setIsActive = (val: boolean) =>
  ({
    type: 'IS_ACTIVE',
    payload: val,
  }) as const;

export const setIsLoading = (val: boolean) =>
  ({
    type: 'IS_LOADING',
    payload: val,
  }) as const;

export const setIsFetching = (val: boolean) =>
  ({
    type: 'IS_FETCHING',
    payload: val,
  }) as const;

export const setIsLogin = (val: boolean) =>
  ({
    type: 'IS_LOGIN',
    payload: val,
  }) as const;

export const setCredentials = (
  data: Record<string, string>
) =>
  ({
    type: 'CREDENTIALS',
    payload: data,
  }) as const;

export const setNotifType = (val: string) =>
  ({
    type: 'NOTIFTYPE',
    payload: val,
  }) as const;

export const setSelectedResume = (resume: {
  resumeDownload: string;
  cardImages: string[];
  cardTitle?: string;
  cardDescription?: string;
}) =>
  ({
    type: 'SET_SELECTED_RESUME',
    payload: resume,
  }) as const;
