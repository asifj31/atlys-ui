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

export default function SignUpDialog() {
  const [, setGlobalState] = useContext(GlobalStateContext);

  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const requiredFieldsFulfilled =
    email.length && userName.length && password.length;

  const handleLoginRedirect = () => {
    setGlobalState(prevState => ({
      ...prevState,
      showSignUpDialog: false,
    }));
  };

  const loginHandler = () => {
    if (!requiredFieldsFulfilled) return;

    console.log(
      `Email: ${email}, Username: ${userName}, Password: ${password}`
    );

    setGlobalState(prevState => ({
      ...prevState,
      userName,
      password,
      email,
      authenticated: true,
    }));
  };

  const passwordToggleHandler = () => {
    setShowPassword(prevState => !prevState);
  };

  const closeHandler = () => {
    setGlobalState(prevState => ({
      ...prevState,
      hideAuthDialog: true,
    }));
  };

  return (
    <OuterContainer>
      <Container>
        <CloseBtnWrapper onClick={closeHandler}>
          <img src="./CrossIcon.png" alt="Close" />
        </CloseBtnWrapper>

        <WelcomeBack>SIGN UP</WelcomeBack>
        <LoginText>Create an account to continue</LoginText>

        <InputContainer>
          <InputHeaderWrapper>
            <span>Email</span>
          </InputHeaderWrapper>
          <InputField
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <InputHeaderWrapper>
            <span>Username</span>
          </InputHeaderWrapper>
          <InputField
            type="text"
            placeholder="Choose a preferred username"
            required
            value={userName}
            onChange={e => setUsername(e.target.value)}
          />

          <InputHeaderWrapper>
            <span>Password</span>
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
            Already have an account?{' '}
            <span
              style={{ color: '#C5C7CA', cursor: 'pointer' }}
              onClick={handleLoginRedirect}
            >
              Login →
            </span>
          </span>
        </RegisterWrapper>
      </Container>
    </OuterContainer>
  );
}
