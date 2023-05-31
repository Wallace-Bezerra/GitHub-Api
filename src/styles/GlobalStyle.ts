import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: inherit;
  }
  
  :root {
  font-family: Inter, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  font-size: 62.5%
}
body{
  font-size: 1.6rem;
    background-color: #010206;
    color: white;
  }
  .App{
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 2rem;
  }
  @media (max-width: 1100px){
    body{
      .App{
        padding-inline: 0px;
      }
    }
  }
`;
