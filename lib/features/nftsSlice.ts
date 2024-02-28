import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';
import { NFT } from '../../../types';

interface NFTState {
  nfts: NFT[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: NFTState = {
  nfts: [],
  status: 'idle',
};

const nftsSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    fetchNFTsStart: state => {
      state.status = 'loading';
    },
    fetchNFTsSuccess: (state, action: PayloadAction<NFT[]>) => {
      state.status = 'idle';
      state.nfts = action.payload;
    },
    fetchNFTsFailure: state => {
      state.status = 'failed';
    },
  },
});

export const { fetchNFTsStart, fetchNFTsSuccess, fetchNFTsFailure } = nftsSlice.actions;

export const fetchNFTs = (): AppThunk<void> => async dispatch => {
  dispatch(fetchNFTsStart());
  try {
    const response = await fetch('/data/nfts.json');
    const data = await response.json();
    dispatch(fetchNFTsSuccess(data));
  } catch (error) {
    dispatch(fetchNFTsFailure());
  }
};

export const selectNFTs = (state: RootState) => state.nfts.nfts;
export const selectNFTsStatus = (state: RootState) => state.nfts.status;

export default nftsSlice.reducer;
