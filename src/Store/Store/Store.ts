import { configureStore } from '@reduxjs/toolkit';

import { pokemonAppReducer } from '../Slices';

export const store = configureStore({
  reducer: {
    allPokemons: pokemonAppReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
