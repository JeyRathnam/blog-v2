import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import Footer from "../components/Styled/Footer";
import "../styles/globals.css";
import { darkTheme } from "./../theme";

const GlobalStyle = createGlobalStyle`
html {
  margin: 0;
  height: 100%;
}

  body {
    margin: 0;
    
    padding: 0;
    
    background-color : ${({ theme }) => theme.bg.primary}
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  p {
    font-family : "Source Serif Pro", serif;
    font-size : 1.2rem;
    line-height : 1.5rem;
    font-weight : normal;
  }

  p a {
    text-decoration : underline;
  }
`;

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout theme={theme} setTheme={setTheme}>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
