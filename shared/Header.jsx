import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <Flex h='100px' bg='white' position='absolute' top='0' left='0'>
      <Link href='/' passHref>
        <Image cursor='pointer' src='/text_filled.png' h='100px' alt='logo' />
      </Link>
    </Flex>
  );
};

export default Header;
