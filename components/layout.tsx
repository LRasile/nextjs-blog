import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Header from './header'

export const siteTitle = 'Next.js Sample Website'

export interface LayoutProps {
  children: React.ReactNode
  home?: boolean
}

export default function Layout({ children, home }: LayoutProps): ReactElement {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main className="container" style={{ paddingTop: '80px' }}>
        {children}
        {!home && (
          <Link href="/">
            <a className="btn btn-outline-primary">← Back to home</a>
          </Link>
        )}
      </main>
    </div>
  )
}
