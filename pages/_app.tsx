import '../styles/global.scss';
// import '../styles/debug.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
