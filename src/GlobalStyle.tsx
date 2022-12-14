import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    min-width: 320px;
    overflow-x: hidden;
    --font-primary: "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    --font-display: "Antique Olive", "Ginto Normal", "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    --font-headline: "Domine", "Antique Olive", "Ginto Nord", "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    --font-monospace: "Menlo", "Consolas", "Monaco", monospace;
    --font-glitch: "ArchivoBlack", "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    --font-cursive: "Reenie Beanie", "Comic Sans MS", cursive, sans-serif;
  }

  h2, h3, h5 {
    font-family: "Antique Olive", Ginto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;

    :active,
    :hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
