import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

import { theme } from '../theme';
import Fonts from '../Fonts';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
