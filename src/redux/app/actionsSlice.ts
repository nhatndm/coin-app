import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// INTERFACE
import { App, PeriodResolutionValue } from 'model';

// ACTION TO CHANGE STATE
export const changePeriod: CaseReducer<App, PayloadAction<PeriodResolutionValue>> = (state, action) => {
  state.period = action.payload;
};
