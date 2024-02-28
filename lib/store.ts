// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import nftsReducer from './features/nfts/nftsSlice';

export const store = configureStore({
  reducer: {
    nfts: nftsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
