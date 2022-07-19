import { Flex, Image, SimpleGrid, Box, Text, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { theme } from '../theme';
import Header from '../shared/Header';

const Profile = ({ pillheads }) => {
  const [tokenMeta, setTokenMeta] = useState([]);

  const grabTokenMeta = async () => {
    let tokeMeta = [];
    pillheads.forEach(async (pillhead, index) => {
      const { data } = await axios.get(pillhead.tokenUri);
      tokeMeta.push(data);
      index === pillheads.length - 1 ? setTokenMeta(tokeMeta) : null;
    });
  };

  useEffect(() => {
    grabTokenMeta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
        mt='125px'
        mb='4rem'
        maxW='70rem'
        mx='auto'
      >
        <SimpleGrid columns={{ lg: 6, md: 2, sm: 1 }} spacing={10}>
          {tokenMeta.map((token, index) => (
            <Link
              key={index}
              href={`https://opensea.io/assets/ethereum/0x1b23d0f0f6dc3547c1b6945152acbfd6eaad85b0/${token.name.substring(
                10
              )}`}
              isExternal
              _hover={{
                textDecoration: 'none',
                transform: 'scale(1.1)'
              }}
            >
              <Box position='relative'>
                <Image src={token.image} alt='pillhead' w='250px' />
                <Text
                  bg={theme.colors.brand.yellowOne}
                  fontFamily={theme.fonts.disketMono}
                  fontSize='12px'
                  p='1rem'
                  textAlign='center'
                >
                  {token.name}
                </Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Profile;
