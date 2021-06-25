import { RootState } from 'redux/type';

// MODEL
import { PeriodResolutionValue } from 'model';

export const selectAppPeriod = (state: RootState): PeriodResolutionValue => state.appReducer.period;
