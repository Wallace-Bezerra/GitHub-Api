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
}
body{
    background-color: #010206;
    color: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
