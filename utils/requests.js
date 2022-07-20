import axios from 'axios';

export const fetchPillheadsbyAddress = async (address) => {
  const defaultQuery = `query fetchPillheadOwner {
        pillheadOwners(where: {address: "${address}"}) {
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

  return data.data.pillheadOwners;
};

export const fetchPillheadMetadata = async (tokenUri) => {
  const { data } = await axios.get(tokenUri);
  return data;
};
