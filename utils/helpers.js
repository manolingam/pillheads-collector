import { ethers } from 'ethers';

import { ALCHEMY_KEY } from '../config';

const provider = new ethers.providers.AlchemyProvider('homestead', ALCHEMY_KEY);

export const getAccountString = (account) => {
  const len = account.length;
  return `0x${account.substr(2, 3).toUpperCase()}...${account
    .substr(len - 3, len - 1)
    .toUpperCase()}`;
};

export const ensLookup = async (name) => {
  const resolver = await provider.resolveName(name);
  return resolver;
};

export const reverseEnsLookup = async (address) => {
  const resolver = await provider.lookupAddress(address);
  return resolver;
};
