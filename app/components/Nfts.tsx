// NFTList.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNFTs, selectNFTs } from '../../lib/features/nfts/nftsSlice';
import { NFT } from '../../types';

const NFTList: React.FC = () => {
  const dispatch = useDispatch();
  const nfts = useSelector(selectNFTs);

  useEffect(() => {
    dispatch(fetchNFTs());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {nfts.map((nft: NFT) => (
        <div key={nft.id}>
          <img src={nft.imageURL} alt={nft.name} className="w-full" />
          <h3 className="mt-2 text-lg font-semibold">{nft.name}</h3>
          <p className="text-gray-500">Price: {nft.price}</p>
          <p className="text-gray-500">Creator: {nft.creator}</p>
        </div>
      ))}
    </div>
  );
};

export default NFTList;
