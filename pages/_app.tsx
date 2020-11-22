// import '../styles/global.css'
import '../styles/bootstrap/bootstrap.min.css'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

export default function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}