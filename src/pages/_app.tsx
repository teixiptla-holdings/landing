import { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import '../styles/global.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={montserrat.className}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
