import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import nftsData from '../../app/data/nfts.json';
import { RootState } from '../store';

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
  creatorImage: string;
  collectionImage: string;
  name: string;
  collection: string;
}

interface NFTState {
  nfts: NFT[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NFTState = {
  nfts: [],
  status: 'idle',
  error: null,
};

// Define an async thunk to fetch NFT data
export const fetchNFTs = createAsyncThunk('nfts/fetchNFTs', async () => {
  try {
    return nftsData;
  } catch (error) {
    throw new Error('Error fetching NFTs: ' );
  }
});

const nftSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTs.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(fetchNFTs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.nfts = action.payload;
      })
      .addCase(fetchNFTs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error fetching NFTs';
      });
  },
});

export const selectNFTs = (state: RootState) => state.nfts.nfts;

export default nftSlice.reducer;
