import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

export const GlobalStyle = createGlobalStyle`
  body, #root{
    background-color: #eceff1;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
  }
  html {
    height: 100%;
    min-height: 100%;
  }

  footer {
    margin-top: auto;
  }
`