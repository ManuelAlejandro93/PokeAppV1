import { configureStore } from '@reduxjs/toolkit';
import { pokemonAppReducer } from '../Slice';

export const store = configureStore({
  reducer: {
    pokemonAppReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
