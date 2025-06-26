import { configureStore } from '@reduxjs/toolkit';

import { allPokemonReducer } from '../Slices';

export const store = configureStore({
  reducer: {
    allPokemons: allPokemonReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
