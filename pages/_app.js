import { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { darkTheme } from './../theme';
import Layout from './components/layout';

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color : ${({ theme }) => theme.bg.primary}
  }
`

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => { }, [theme])

  // console.log(Component)
  return <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
