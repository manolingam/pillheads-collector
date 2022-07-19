import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import { utils } from 'ethers';
import { theme } from '../theme';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Meta } from '../shared/Meta';

export default function Home() {
  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(false);

  return (
    <>
      <Meta />
      <Flex
        direction='column'
        minH='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <Header />
        <Flex
          maxW='70%'
          direction='column'
          alignItems='center'
          justifyContent='center'
          mx='auto'
        >
          <FormControl w='500px' alignItems='baseline'>
            <FormLabel
              fontFamily={theme.fonts.hansonBold}
              fontSize='24px'
              letterSpacing='1px'
              lineHeight='25px'
            >
              Ethereum Address
            </FormLabel>
            <Input
              p='1rem'
              onChange={(e) => {
                setAddress(e.target.value);
                setValidAddress(utils.isAddress(e.target.value));
              }}
            />
            <FormHelperText fontFamily={theme.fonts.disketMono}>
              address that holds pillheads
            </FormHelperText>
          </FormControl>
          <Link href={`/profile/${address}`} passHref>
            <Button
              fontFamily={theme.fonts.disketMono}
              bg={theme.colors.brand.yellowOne}
              textAlign='center'
              fontSize='18px'
              cursor='pointer'
              mt='1rem'
              _hover={{
                opacity: '0.7'
              }}
              disabled={!validAddress}
            >
              <i className='fa-solid fa-arrow-right'></i>
            </Button>
          </Link>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
