import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';

import { theme } from '../theme';
import { PILLHEADS_DISCORD, PILLHEADS_TWITTER } from '../config';

export const Footer = () => {
  return (
    <Flex
      w='100%'
      direction='column-reverse'
      alignItems='center'
      position='absolute'
      bottom='.5rem'
    >
      <Text fontFamily={theme.fonts.disketMono} fontSize='12px'>
        A community tribute by{' '}
        <ChakraLink
          isExternal
          href='https://twitter.com/saimano1996'
          textDecoration='underline'
        >
          Saimano
        </ChakraLink>
      </Text>
      <Flex direction='row' p='1rem' alignItems='center'>
        <ChakraLink
          href={PILLHEADS_TWITTER}
          isExternal
          fontSize='16px'
          color='black'
          mr='1rem'
        >
          <i className='fa-brands fa-twitter'></i>
        </ChakraLink>
        <ChakraLink
          href={PILLHEADS_DISCORD}
          isExternal
          color='black'
          fontSize='16px'
        >
          <i className='fa-brands fa-discord'></i>
        </ChakraLink>
      </Flex>
    </Flex>
  );
};
