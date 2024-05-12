import React, { useContext, useState } from 'react';
import {
  OuterContainer,
  Container,
  WelcomeBack,
  LoginText,
  InputContainer,
  InputHeaderWrapper,
  InputField,
  LoginBtn,
  RegisterWrapper,
  InputFieldWrapper,
  PasswordToggle,
  CloseBtnWrapper,
} from '../styled-components/auth.styled-component.ts';
import { GlobalStateContext } from '../state/glabal-state.tsx';
import { USER_LOGIN_CREDENTIALS } from '../constants/login-creds.constant.ts';

export default function LoginDialog() {
  const [, setGlobalState] = useContext(GlobalStateContext);

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const requiredFieldsFulfilled = userName.length && password.length;

  const handleSignUpRedirect = () => {
    setGlobalState(prevState => ({
      ...prevState,
      showSignUpDialog: true,
    }));
  };

  const passwordToggleHandler = () => {
    setShowPassword(prevState => !prevState);
  };

  const loginHandler = () => {
    if (!requiredFieldsFulfilled) return;

    if (
      USER_LOGIN_CREDENTIALS.userName === userName &&
      USER_LOGIN_CREDENTIALS.password === password
    ) {
      setGlobalState(prevState => ({
        ...prevState,
        userName,
        authenticated: true,
      }));
    }
  };

  const closeHandler = () => {
    setGlobalState(prevState => ({
      ...prevState,
      hideAuthDialog: true,
    }));
  };

  return (
    <OuterContainer>
      {' '}
      <Container>
        <CloseBtnWrapper onClick={closeHandler}>
          <img src="./CrossIcon.png" alt="Close" />
        </CloseBtnWrapper>

        <WelcomeBack>WELCOME BACK</WelcomeBack>

        <LoginText>Log into your account</LoginText>

        <InputContainer>
          <InputHeaderWrapper>
            <span>Email or Username</span>
          </InputHeaderWrapper>
          <InputField
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            value={userName}
            onChange={e => setUsername(e.target.value)}
          />

          <InputHeaderWrapper>
            <span>Password</span>
            <span>Forgot password?</span>
          </InputHeaderWrapper>
          <InputFieldWrapper>
            <InputField
              type={showPassword ? 'text' : 'password'}
              placeholder="Choose a strong password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <PasswordToggle type="button" onClick={passwordToggleHandler}>
              <img
                src="./PasswordVisibilityIcon.png"
                alt="Toggle Password Visibility"
              />
            </PasswordToggle>
          </InputFieldWrapper>

          <LoginBtn onClick={loginHandler}>Login now</LoginBtn>
        </InputContainer>

        <RegisterWrapper>
          <span>
            {' '}
            Not registered yet?{' '}
            <span
              style={{ color: '#C5C7CA', cursor: 'pointer' }}
              onClick={handleSignUpRedirect}
            >
              Register →
            </span>
          </span>
        </RegisterWrapper>
      </Container>
    </OuterContainer>
  );
}
