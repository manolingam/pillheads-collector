import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { utils } from 'ethers';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAccountString, reverseEnsLookup } from '../utils/helpers';
import { theme } from '../theme';

export const Header = () => {
  const [account, setAccount] = useState('');
  const router = useRouter();

  useEffect(() => {
    formatAccount(router.query.address);
  }, [router.asPath, router.query.address]);

  const formatAccount = async (address) => {
    if (utils.isAddress(address)) {
      const ens = await reverseEnsLookup(address);
      setAccount(ens ? ens : getAccountString(address));
    }
  };

  return (
    <Flex
      h='100px'
      w='100%'
      bg='white'
      alignItems='center'
      justifyContent='space-between'
    >
      <Link href='/' passHref>
        <Image cursor='pointer' src='/text_filled.png' h='100px' alt='logo' />
      </Link>
      {account !== '' && (
        <ChakraLink
          isExternal
          href={`https://opensea.io/${window.location.pathname.substring(9)}`}
          fontFamily={theme.fonts.hansonBold}
          mr='1rem'
          p='1rem'
          fontSize={{ lg: '16px', sm: '12px' }}
          boxShadow='inset 9px 9px 18px #ebebeb,
          inset -9px -9px 18px #ffffff;'
        >
          {account}
        </ChakraLink>
      )}
    </Flex>
  );
};
