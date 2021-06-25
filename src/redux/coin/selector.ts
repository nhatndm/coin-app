import { RootState } from 'redux/type';

// MODEL
import { Coin } from 'model';

export const selectCoinData = (state: RootState): Coin[] => state.coinReducer.data;
