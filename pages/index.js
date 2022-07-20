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
import { OPENSEA_COLLECTION } from '../config';
import { ensLookup } from '../utils/helpers';
import { theme } from '../theme';

export default function Home() {
  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(false);

  return (
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
          href={OPENSEA_COLLECTION}
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
          placeholder='ENS or Address..'
          fontFamily={theme.fonts.disketMono}
          fontSize='16px'
          p='1rem'
          value={address}
          onChange={async (e) => {
            setAddress(e.target.value);
            if (utils.isAddress(e.target.value)) {
              setValidAddress(true);
              return;
            }

            const ens = await ensLookup(e.target.value);
            if (ens) {
              setValidAddress(true);
              setAddress(ens);
              return;
            }
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
  );
}
