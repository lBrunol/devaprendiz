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

  button:hover {
    cursor: pointer;
    transition: .2 ease-in-out all;
  }

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    :root {
      --gutter: ${theme.grid.gutter};
      --font-xxsmall: ${theme.font.sizes.xxsmall};
      --font-xsmall: ${theme.font.sizes.xsmall};
      --font-small: ${theme.font.sizes.small};
      --font-medium: ${theme.font.sizes.medium};
      --font-large: ${theme.font.sizes.large};
      --font-xlarge: ${theme.font.sizes.xlarge};
      --font-xxlarge: ${theme.font.sizes.xxlarge};
    }

    body.light {
      --main-bg: ${theme.lightTheme.colors.mainBg};
      --medium-bg: ${theme.lightTheme.colors.mediumBg};
      --texts: ${theme.lightTheme.colors.texts};
      --texts-second: ${theme.lightTheme.colors.textsSecond};
      --highlight: ${theme.lightTheme.colors.highlight};
      --white: ${theme.lightTheme.colors.white};
      --black: ${theme.lightTheme.colors.black};
    }

    body.dark {
      --main-bg: ${theme.darkTheme.colors.mainBg};
      --medium-bg: ${theme.darkTheme.colors.mediumBg};
      --texts: ${theme.darkTheme.colors.texts};
      --texts-second: ${theme.darkTheme.colors.textsSecond};
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
