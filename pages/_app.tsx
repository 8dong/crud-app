import PageLayout from '../components/layout/PageLayout';

import '../styles/globals.css';

import type { AppProps } from 'next/app';
import MainHeader from '../components/UI/organisms/MainHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <MainHeader />
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
