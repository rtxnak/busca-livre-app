import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"
import { ContextProvider } from '@/context/context'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Layout>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Layout>
  </>
  )
}
