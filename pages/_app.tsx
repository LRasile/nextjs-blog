// import '../styles/global.css'
import '../styles/bootstrap/bootstrap.min.css'
import { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import Layout from '../components/layout'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
