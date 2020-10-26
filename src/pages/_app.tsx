import React from 'react'
import { AppProps } from 'next/app'

//Theme Provider
import { ThemeProvider }  from 'styled-components'

//Style Global App
import GlobalStyled, {} from '../styles/GlobalStyled';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyled/>
    </ThemeProvider>
  ) 
}

export default MyApp
