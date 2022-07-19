import { Flex } from '@chakra-ui/react';

import axios from 'axios';

import Profile from '../../views/Profile';
import { Page404 } from '../../shared/404';

export async function getServerSideProps(context) {
  const defaultQuery = `query fetchPillheadOwner {
    pillheadOwners(where: {address: "${context.params.address}"}) {
      pillheads {
        tokenUri
      }
    }
}`;

  const graphqlQuery = {
    operationName: 'getPillheadOwners',
    query: defaultQuery,
    variables: {}
  };

  const { data } = await axios.post(
    `https://api.thegraph.com/subgraphs/name/manolingam/pillheads`,
    graphqlQuery
  );

  const pillheads = data.data.pillheadOwners.length
    ? data.data.pillheadOwners[0].pillheads
    : [];

  return { props: { pillheads } };
}

const ProfilePage = ({ pillheads }) => {
  return pillheads.length > 0 ? (
    <Flex direction='column' w='100%'>
      <Profile pillheads={pillheads} />
    </Flex>
  ) : (
    <Page404 />
  );
};

export default ProfilePage;
