import {
  Flex,
  Input,
  FormControl,
  Link as ChakraLink,
  FormHelperText,
  Button,
  Text
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
          maxW='100%'
          direction='column'
          alignItems='center'
          justifyContent='center'
          mx='auto'
        >
          <Text
            fontFamily={theme.fonts.hansonBold}
            fontSize={{ lg: '24px', sm: '18px' }}
            w='70%'
            mb='2rem'
          >
            A shareable profiler for the{' '}
            <ChakraLink
              href='https://opensea.io/collection/pillheadsnft'
              isExternal
              textDecoration='underline'
              color={theme.colors.brand.yellowOne}
              bg='black'
              p='5px'
            >
              Pillheads
            </ChakraLink>{' '}
            you own!
          </Text>
          <FormControl w='70%' alignItems='baseline'>
            <Input
              placeholder='0x...'
              fontFamily={theme.fonts.disketMono}
              fontSize='16px'
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
