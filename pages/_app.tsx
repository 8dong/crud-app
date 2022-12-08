import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import PageLayout from '../components/layout/PageLayout';
import MainHeader from '../components/UI/organisms/MainHeader';

import store, { persistor } from '../redux/store/store';

import '../styles/globals.css';

import type { AppProps } from 'next/app';
import ModalContextProvider from '../context/modal/ModalContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalContextProvider>
          <PageLayout>
            <MainHeader />
            <Component {...pageProps} />
          </PageLayout>
        </ModalContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
