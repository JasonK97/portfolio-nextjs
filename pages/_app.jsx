import '../styles/globals.css'
import { SSRProvider } from 'react-aria';
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { Navbar, FooterContainer } from '../components'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

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
              <Navbar path={path} />
              <Component {...pageProps} />
              <FooterContainer />
            </PrismicPreview>
          </PrismicProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  )
}

export default MyApp
