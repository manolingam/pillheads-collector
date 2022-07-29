import { Flex } from '@chakra-ui/react';

import { Meta } from './Meta';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Flex
        direction='column'
        minH='100vh'
        maxW='70rem'
        justifyContent='space-between'
        alignItems='center'
        mx='auto'
      >
        <Header />
        {children}
        <Footer />
      </Flex>
    </>
  );
};
