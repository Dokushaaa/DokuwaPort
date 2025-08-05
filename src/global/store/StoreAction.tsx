export const setError = (val: boolean) => ({
  type: 'ERROR',
  payload: val,
});

export const setInfo = (val: boolean) => ({
  type: 'INFO',
  payload: val,
});

export const setMessage = (val: string) => ({
  type: 'MESSAGE',
  payload: val,
});

export const setSuccess = (val: boolean) => ({
  type: 'SUCCESS',
  payload: val,
});

export const setSave = (val: boolean) => ({
  type: 'SAVE',
  payload: val,
});

export const setIsShow = (val: boolean) => ({
  type: 'SHOW',
  payload: val,
});

export const setIsArchive = (val: boolean) => ({
  type: 'ARCHIVE',
  payload: val,
});

export const setIsRestore = (val: boolean) => ({
  type: 'RESTORE',
  payload: val,
});

export const setIsDelete = (val: boolean) => ({
  type: 'DELETE',
  payload: val,
});

export const setIsAdd = (val: boolean) => ({
  type: 'IS_ADD',
  payload: val,
});

export const setIsSearch = (val: boolean) => ({
  type: 'IS_SEARCH',
  payload: val,
});

export const setIsEdit = (val: boolean) => ({
  type: 'IS_EDIT',
  payload: val,
});

export const setIsActive = (val: boolean) => ({
  type: 'IS_ACTIVE',
  payload: val,
});

export const setIsLoading = (val: boolean) => ({
  type: 'IS_LOADING',
  payload: val,
});

export const setIsFetching = (val: boolean) => ({
  type: 'IS_FETCHING',
  payload: val,
});

export const setIsLogin = (val: boolean) => ({
  type: 'IS_LOGIN',
  payload: val,
});

export const setCredentials = (
  data: Record<string, any>
) => ({
  type: 'CREDENTIALS',
  payload: data,
});
export const setIsAddingNum = (val: number) => ({
  type: 'CREDENTIALS',
  payload: val,
});
export const setNotifType = (val: string) => ({
  type: 'NOTIFTYPE',
  payload: val,
});

export const setSelectedResume = (resume: object) => ({
  type: 'SET_SELECTED_RESUME',
  payload: resume,
});
