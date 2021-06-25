import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// MODEL
import { CoinSlice, Coin } from 'model';

// ACTION TO CHANGE STATE
export const setCoinData: CaseReducer<CoinSlice, PayloadAction<Coin[]>> = (state, action) => {
  state.data = action.payload;
};

// ACTION TO CHANGE STATE
export const changeLoadingState: CaseReducer<CoinSlice, PayloadAction<boolean>> = (state, action) => {
  state.loading = action.payload;
};
