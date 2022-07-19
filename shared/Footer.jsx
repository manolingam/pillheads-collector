import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

import { theme } from '../theme';

const Footer = () => {
  return (
    <Flex
      w='100vw'
      justifyContent='space-between'
      alignItems='baseline'
      position='absolute'
      bottom='0'
    >
      <Text fontFamily={theme.fonts.disketMono} pl='10px' fontSize='12px'>
        A community tribute - v0.0.1
      </Text>
      <Flex direction='row' bg='black' p='1rem' alignItems='center'>
        <ChakraLink
          href='https://twitter.com/pillheads_NFT'
          isExternal
          fontSize='16px'
          color={theme.colors.brand.yellowOne}
          mr='2rem'
        >
          <i className='fa-brands fa-twitter'></i>
        </ChakraLink>
        <ChakraLink
          href='https://discord.gg/pillheads'
          isExternal
          color={theme.colors.brand.yellowOne}
          fontSize='16px'
        >
          <i className='fa-brands fa-discord'></i>
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default Footer;
