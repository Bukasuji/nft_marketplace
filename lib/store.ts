
import { configureStore } from '@reduxjs/toolkit'
import nftsReducer from '../lib/features/nftsSlice';


export const store = () => {
  return configureStore({
    reducer: {nfts: nftsReducer,},
  })
}
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
