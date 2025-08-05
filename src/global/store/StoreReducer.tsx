export type State = {
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

export type Action =
  | { type: 'ERROR'; payload: boolean }
  | { type: 'INFO'; payload: boolean }
  | { type: 'MESSAGE'; payload: string }
  | { type: 'SUCCESS'; payload: boolean }
  | { type: 'SAVE'; payload: boolean }
  | { type: 'SHOW'; payload: boolean }
  | { type: 'ARCHIVE'; payload: boolean }
  | { type: 'RESTORE'; payload: boolean }
  | { type: 'DELETE'; payload: boolean }
  | { type: 'IS_ADD'; payload: boolean }
  | { type: 'IS_EDIT'; payload: boolean }
  | { type: 'IS_LOADING'; payload: boolean }
  | { type: 'IS_FETCHING'; payload: boolean }
  | { type: 'IS_LOGIN'; payload: boolean }
  | { type: 'IS_ACTIVE'; payload: boolean }
  | { type: 'IS_SEARCH'; payload: Record<string, string> }
  | { type: 'CREDENTIALS'; payload: Record<string, string> }
  | { type: 'NOTIFTYPE'; payload: string }
  | {
      type: 'SET_SELECTED_RESUME';
      payload: {
        resumeDownload: string;
        cardImages: string[];
        cardTitle?: string;
        cardDescription?: string;
      };
    };
export const initialState: State = {
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
    resumeDownload: '',
    cardImages: [],
  },
};

export const StoreReducer = (
  state: State,
  action: Action
): State => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'INFO':
      return {
        ...state,
        info: action.payload,
      };
    case 'MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    case 'SUCCESS':
      return {
        ...state,
        success: action.payload,
      };
    case 'SAVE':
      return {
        ...state,
        isSave: action.payload,
      };
    case 'SHOW':
      return {
        ...state,
        isShow: action.payload,
      };
    case 'ARCHIVE':
      return {
        ...state,
        isArchive: action.payload,
      };
    case 'RESTORE':
      return {
        ...state,
        isRestore: action.payload,
      };
    case 'DELETE':
      return {
        ...state,
        isDelete: action.payload,
      };
    case 'IS_ADD':
      return {
        ...state,
        isAdd: action.payload,
      };
    case 'IS_EDIT':
      return {
        ...state,
        isEdit: action.payload,
      };
    case 'IS_SEARCH':
      return {
        ...state,
        isSearch: action.payload,
      };
    case 'IS_ACTIVE':
      return {
        ...state,
        isActive: action.payload,
      };
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'IS_FETCHING':
      return {
        ...state,
        isFetching: action.payload,
      };
    case 'IS_LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'CREDENTIALS':
      return {
        ...state,
        credentials: action.payload,
      };

    case 'NOTIFTYPE':
      return {
        ...state,
        notifType: action.payload,
      };
    case 'SET_SELECTED_RESUME':
      return {
        ...state,
        selectedResume: action.payload,
      };
    default:
      return state;
  }
};
