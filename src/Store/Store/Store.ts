import { configureStore } from '@reduxjs/toolkit';

import { allPokemonReducer, singlePokemonReducer } from '../Slices';

export const store = configureStore({
  reducer: {
    allPokemons: allPokemonReducer,
    singlePokemons: singlePokemonReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
