import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

import { theme } from '../theme';
import { PILLHEADS_DISCORD, PILLHEADS_TWITTER } from '../config';

export const Footer = () => {
  return (
    <Flex
      w='100%'
      justifyContent='space-around'
      alignItems='baseline'
      position='absolute'
      bottom='0'
    >
      <Text fontFamily={theme.fonts.disketMono} fontSize='12px'>
        A community tribute - v0.0.1
      </Text>
      <Flex direction='row' bg='black' p='1rem' alignItems='center'>
        <ChakraLink
          href={PILLHEADS_TWITTER}
          isExternal
          fontSize='16px'
          color={theme.colors.brand.yellowOne}
          mr='2rem'
        >
          <i className='fa-brands fa-twitter'></i>
        </ChakraLink>
        <ChakraLink
          href={PILLHEADS_DISCORD}
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
