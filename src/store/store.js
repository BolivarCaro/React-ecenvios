import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { ecenviosSlice } from './ecenvios/ecenviosSlice';
import { destinatarioSlice } from './ecenvios/destinatario/remitenteSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ecenvios: ecenviosSlice.reducer,
    destinatario: destinatarioSlice.reducer,
  },
});