import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#f4f4f9',
  text: '#333',
  primary: '#3498db',
  cardBackground: '#fff',
  footerBackground: '#2c3e50',
};

export const darkTheme = {
  background: '#2c3e50',
  text: '#fff',
  primary: '#3498db',
  cardBackground: '#34495e',
  footerBackground: '#1c2833',
};

export const GlobalStyle = createGlobalStyle`
  body {
  
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;
