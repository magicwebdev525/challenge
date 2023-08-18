/**
 * @file: api.js
 * @description: api bunch file
 */
const url =
  "https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=oka";
export const getData = async () => {
  return await fetch(url).then((res) => res.json());
};
