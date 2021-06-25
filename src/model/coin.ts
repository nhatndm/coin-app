export interface Coin {
  date: string;
  open: number;
}

export interface CoinSlice {
  data: Coin[];
  recentPrice: number[];
  loading: boolean;
}
