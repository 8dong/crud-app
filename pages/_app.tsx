import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import PageLayout from '../components/layout/PageLayout';
import MainHeader from '../components/UI/organisms/MainHeader';

import store, { persistor } from '../redux/store/store';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PageLayout>
          <MainHeader />
          <Component {...pageProps} />
        </PageLayout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
