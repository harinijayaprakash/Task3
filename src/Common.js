import React from 'react';
import styled from 'styled-components';

// Button Component
export const Button = ({ text, link }) => (
  <StyledButton href={link}>{text}</StyledButton>
);

const StyledButton = styled.a`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    opacity: 0.9;
  }
`;

// Theme Toggle
export const ThemeToggle = ({ toggleTheme }) => (
  <button onClick={toggleTheme}>Theme</button>
);
