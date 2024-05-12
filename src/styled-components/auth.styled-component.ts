import styled from 'styled-components';

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27292d;
  width: 463px;
  flex-direction: column;
  padding: 40px 24px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid transparent;
  border-radius: 8px;
  background-image: linear-gradient(#27292d, #27292d),
    linear-gradient(129.59deg, #969696 0%, #343434 98.18%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  position: relative;
`;

export const WelcomeBack = styled.div`
  color: #6b6c70;
`;

export const LoginText = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
`;

export const UserNameWrapper = styled.div`
  width: 100%;
  color: #c5c7ca;
`;

export const InputContainer = styled.div`
  width: 100%;
  color: #c5c7ca;
  margin-top: 45px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 43px;
  background: #4a96ff;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  align-self: start;
  color: #7f8084;
  margin-top: 12px;
`;

export const InputHeaderWrapper = styled.label`
  display: flex;
  justify-content: space-between;
`;

export const InputFieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0 16px 0;
  display: inline-block;
  box-sizing: border-box;
  background: inherit;
  border: 1.5px solid #35373b;
  border-radius: 4px;
  color: inherit;
  font-size: 16px;
  font-weight: 400;
`;

export const CloseBtnWrapper = styled.div`
  width: 32px;
  height: 32px;
  background: #131319;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
