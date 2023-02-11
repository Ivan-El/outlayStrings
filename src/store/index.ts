import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { outlayAPI } from '../services/OtlayService';
import {OutlaysSlice} from './slices/outlays/OutlaysSlice'

const rootReducer = combineReducers({
  outlay: OutlaysSlice.reducer,
  [outlayAPI.reducerPath]: outlayAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(outlayAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
