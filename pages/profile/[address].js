import { Flex } from '@chakra-ui/react';

import { Profile } from '../../views/Profile';
import { Page404 } from '../../shared/404';
import { fetchPillheadsbyAddress } from '../../utils/requests';

export async function getServerSideProps(context) {
  const pillheadOwners = await fetchPillheadsbyAddress(context.params.address);
  return {
    props: {
      pillheads: pillheadOwners.length ? pillheadOwners[0].pillheads : [],
      address: context.params.address
    }
  };
}

const ProfilePage = ({ pillheads, address }) => {
  return pillheads.length > 0 ? (
    <Flex direction='column' w='100%'>
      <Profile pillheads={pillheads} address={address} />
    </Flex>
  ) : (
    <Page404 />
  );
};

export default ProfilePage;
