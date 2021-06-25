import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// REDUCER
import appReducer from './app/slice';
import coinReducer from './coin/slice';

export const store = configureStore({
  reducer: {
    appReducer,
    coinReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});
