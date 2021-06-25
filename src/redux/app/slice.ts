import { createSlice } from '@reduxjs/toolkit';

// DATA
import { period } from 'constant';

// DOMAIN
import { Domain } from 'constant';

// INTERFACE
import { App } from 'model';

// ACTION
import { changePeriod } from './actionsSlice';

const initialState: App = {
  period: period[0].value,
  timeToRenewData: 1
};

export const appSlice = createSlice({
  name: Domain.App,
  initialState,
  reducers: {
    changePeriod
  }
});

// REDUCER
export default appSlice.reducer;
