import { useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import 'nprogress/nprogress.css'

// Configure NProgress to hide the spinner
NProgress.configure({ showSpinner: false })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleStop)
    Router.events.on('routeChangeError', handleStop)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleStop)
      Router.events.off('routeChangeError', handleStop)
    }
  }, [])

  return (
    <div className={poppins.variable}>
      <Component {...pageProps} />
    </div>
  )
}
