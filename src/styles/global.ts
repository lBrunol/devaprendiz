import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-v9-latin-regular.woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
  }

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body.light {
      --main-bg: ${theme.lightTheme.colors.mainBg};
      --medium-bg: ${theme.lightTheme.colors.mediumBg};
      --texts: ${theme.lightTheme.colors.texts};
      --highlight: ${theme.lightTheme.colors.highlight};
      --white: ${theme.lightTheme.colors.white};
      --black: ${theme.lightTheme.colors.black};
    }

    body.dark {
      --main-bg: ${theme.darkTheme.colors.mainBg};
      --medium-bg: ${theme.darkTheme.colors.mediumBg};
      --texts: ${theme.darkTheme.colors.texts};
      --highlight: ${theme.darkTheme.colors.highlight};
      --white: ${theme.darkTheme.colors.white};
      --black: ${theme.darkTheme.colors.black};
    }

    body {
      background-color: var(--main-bg);
      color: var(--texts);
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export default GlobalStyles
