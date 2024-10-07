import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 15px; /* Space between the buttons */
  z-index: 1000; /* Ensure it's on top of other elements */
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const LoginButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryButtonBackground};
`;

const SignupButton = styled(Button)`
  background-color: ${({ theme }) => theme.secondaryButtonBackground};
`;

const ToggleButton = styled(Button)`
  background-color: ${({ theme }) => theme.toggleBackground};
  padding: 5px 20px;
  font-size: 1rem;
`;

const Header = ({ toggleTheme }) => {
  return (
    <HeaderWrapper>
      <LoginButton onClick={() => window.location.href = '/login'}>Login</LoginButton>
      <SignupButton onClick={() => window.location.href = '/signup'}>Signup</SignupButton>
      <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
    </HeaderWrapper>
  );
};

export default Header;