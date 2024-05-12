import React, { useContext } from 'react';
import './App.css';
import LoginDialog from './components/login.tsx';
import SignUpDialog from './components/sign-up.tsx';
import HomePage from './components/home-page.tsx';
import { GlobalStateContext } from './state/glabal-state.tsx';

function App() {
  const [globalState] = useContext(GlobalStateContext);
  const isAuthenticated = globalState.authenticated;
  const hideAuthDialog = globalState.hideAuthDialog;
  const showSignUpDialog = globalState.showSignUpDialog;

  return (
    <>
      {!isAuthenticated && !hideAuthDialog && (
        <>{showSignUpDialog ? <SignUpDialog /> : <LoginDialog />}</>
      )}

      <HomePage />
    </>
  );
}

export default App;
