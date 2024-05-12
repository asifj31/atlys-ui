import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { POST_METADATA } from '../constants/post-info.constant.ts';
import { PostMetaDataType } from '../types/post.type.ts';

interface IGlobalState {
  userName: string | null;
  password: string | null;
  email: string | null;
  authenticated: boolean;
  allPostMetaData: PostMetaDataType[];
  showSignUpDialog: boolean;
  hideAuthDialog: boolean;
}

type GlobalStateContextType = [
  IGlobalState,
  Dispatch<SetStateAction<IGlobalState>>
];

export const GlobalStateContext = createContext<GlobalStateContextType>([
  {
    userName: null,
    password: null,
    email: null,
    authenticated: false,
    allPostMetaData: POST_METADATA,
    showSignUpDialog: false,
    hideAuthDialog: false,
  },
  () => {},
]);

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState<IGlobalState>({
    userName: null,
    password: null,
    email: null,
    authenticated: false,
    allPostMetaData: POST_METADATA,
    showSignUpDialog: false,
    hideAuthDialog: false,
  });

  return (
    <GlobalStateContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalStateContext.Provider>
  );
};
