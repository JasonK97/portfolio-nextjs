import '../styles/globals.css'
import { SSRProvider } from 'react-aria'
import { createTheme, NextUIProvider, } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { Header, FooterContainer } from '../components'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import { Analytics } from '@vercel/analytics/react'

const lightTheme = createTheme({
  type: 'light',
  // theme: {
  //   colors: {...}, // optional
  // }
})

const darkTheme = createTheme({
  type: 'dark',
  // theme: {
  //   colors: {...}, // optional
  // }
})

function MyApp({ Component, pageProps }) {
  const path = useRouter().asPath
  
  return (
    <SSRProvider>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          // light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
            <PrismicPreview repositoryName={repositoryName}>
              <Header path={path} />
              <Component {...pageProps} />
              <Analytics />
              <FooterContainer />
            </PrismicPreview>
          </PrismicProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  )
}

export default MyApp
