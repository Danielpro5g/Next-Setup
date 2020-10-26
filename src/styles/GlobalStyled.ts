import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62%;
  }

  *, input, button, area-input {
    font: 300 1.6rem 'Roboto', sans-serif;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    
  }
`;