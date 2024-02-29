// nftSlice.ts
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import nftsData from '../../app/data/nfts.json';
import { RootState } from '../store'; 
import { ThunkAction } from 'redux-thunk';

interface NFT {
  id: number;
  image: string;
  description: string;
  timeCreated: string;
  price: number;
  creator: string;
  bidding: string;
  profile: string;
  likes: number;
}

interface NFTState {
  nfts: NFT[];
}

const initialState: NFTState = {
  nfts: [],
};

const nftSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    setNFTs(state, action: PayloadAction<NFT[]>) {
      state.nfts = action.payload;
    },
  },
});

export const { setNFTs } = nftSlice.actions;

// Thunk action to fetch NFT data from JSON file
export const fetchNFTs = (): ThunkAction<void, RootState, null, PayloadAction<NFT[]>> => async (dispatch) => {
  try {
    // Simulate fetching data (replace with actual fetch code)
    // Assuming nftsData is an array of NFT objects from the JSON file
    dispatch(setNFTs(nftsData));
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    // Handle error here (e.g., dispatch an error action)
  }
};

// Selector to retrieve NFTs from the Redux store
export const selectNFTs = (state: RootState) => state.nfts.nfts;

// Export the reducer
export default nftSlice.reducer;
