import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { DefaultTheme, GlobalStyles } from '@/core/application/common/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
