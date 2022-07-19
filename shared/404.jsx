import { Flex } from '@chakra-ui/react';
import { Text, Button, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { theme } from '../theme';

const StyledButton = styled(Button)`
  height: 50px;
  width: 100%;
  text-transform: uppercase;
  font-family: ${theme.fonts.disketMono};
  background-color: ${theme.colors.brand.yellowOne};
  border-radius: 3px;
  padding-left: 24px;
  padding-right: 24px;
  &:hover {
    opacity: 0.6;
  }
`;

export const Page404 = () => {
  return (
    <Flex
      minH='100vh'
      w='100%'
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Image src='/logo_patch.png' alt='404' w='250px' />
      <Text
        fontWeight='bold'
        fontSize='24px'
        fontFamily={theme.fonts.hansonBold}
      >
        Page not found
      </Text>
      <Flex direction={{ lg: 'row', base: 'column' }} mt='2rem'>
        <Link href='/' passHref>
          <StyledButton
            mr={{ lg: '1rem', base: '0' }}
            mb={{ lg: '0', base: '1rem' }}
          >
            Back Home
          </StyledButton>
        </Link>
      </Flex>
    </Flex>
  );
};
