import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

export const GlobalStyles = createGlobalStyle`
   *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0 auto;
  max-width: 1440px;
  text-align: center;
  color: ${COLORS.textColorComplete};
  background-color: ${COLORS.bodyBackground};
  font-family: 'Josefin Sans', sans-serif;
  user-select: none;
  background-color: #111;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  
`;
