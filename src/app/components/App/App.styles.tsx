import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import blackAcuteFont from '../../assests/fonts/black-acute.ttf';

// eslint-disable-next-line import/prefer-default-export
export const Global = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Black Acute";
    src: url(${blackAcuteFont}) format("truetype");
  } 
  
  body {
    font-family: Black Acute;
  }
`;
