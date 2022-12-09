import '../styles/globals.css'
import { SSRProvider } from 'react-aria';
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { Navbar, FooterContainer } from '../components'

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
        defaultTheme="system"
        attribute="class"
        value={{
          // light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Navbar path={path} />
          <Component {...pageProps} />
          <FooterContainer />
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  )
}

export default MyApp
