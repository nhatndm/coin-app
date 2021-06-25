import { createSlice } from '@reduxjs/toolkit';

// DOMAIN
import { Domain } from 'constant';

// MODEL
import { CoinSlice } from 'model';

// ACTION SLICE
import { setCoinData, changeLoadingState } from './actionsSlice';

const initialState: CoinSlice = {
  recentPrice: [],
  data: [],
  loading: false
};

export const coinSlice = createSlice({
  name: Domain.Coin,
  initialState,
  reducers: {
    setCoinData,
    changeLoadingState
  }
});

// REDUCER
export default coinSlice.reducer;
