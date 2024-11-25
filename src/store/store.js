import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { ecenviosSlice } from './ecenvios/ecenviosSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ecenvios: ecenviosSlice.reducer,

  },
});