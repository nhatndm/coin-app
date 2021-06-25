import axios from 'axios';
import { coinSlice } from './slice';

// TYPE
import { AppThunk } from 'redux/type';

// ACTION
const { setCoinData, changeLoadingState } = coinSlice.actions;

// APP SELECT
import { selectAppPeriod } from 'redux/app/selector';

// HELPER
import { getStartDateTillNow } from 'helper/date';

const getCoinData = (): AppThunk => async (dispatch, getState) => {
  const currentPeriod = selectAppPeriod(getState());

  const endDate = Math.round(new Date().getTime() / 1000);
  const startDate = Math.round(new Date(getStartDateTillNow(currentPeriod)).getTime() / 1000);

  const response = await axios.get(
    `http://localhost:3030/historical_value?startDate=${startDate}&endDate=${endDate}&period=${currentPeriod}`
  );

  const data = response.data ? response.data : [];

  dispatch(setCoinData(data));
};

export { getCoinData, changeLoadingState, setCoinData };
