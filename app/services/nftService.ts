// services/nftService.ts
import { NFT } from '../../types'
import daata from '../data/nfts.json'
export const fetchNFTs = async (): Promise<NFT[]> => {
    try {
      const response = await fetch('../data/nfts.json');
      if (!response.ok) {
        throw new Error('Failed to fetch NFTs');
      }
      const data = await response.json();
      return data as NFT[];
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      return [];
    }
  };
  