import { ChakraProvider } from '@chakra-ui/react';
import nProgress from 'nprogress';
import Router from 'next/router';

import '../styles/globals.css';
import '../nprogress.css';

import { Layout } from '../shared/Layout';
import { theme } from '../theme';
import Fonts from '../Fonts';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
