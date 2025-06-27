import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonSimpleInfoThunk } from '../Thunks';
import { pokemonInitialState } from '@/Data';

const pokemonAppSlice = createSlice({
  name: 'pokemonAppState',
  initialState: pokemonInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonSimpleInfoThunk.fulfilled, (state, action) => {
        //Global app state
        state.globalState = {
          status: 'fulfilled'
        };
        //simple data state
        state.simpleData = {
          status: 'fulfilled',
          hasError: false,
          errorMessage: null,
          data: action.payload
        };
        //secific data state
        state.specificData = {
          status: 'non-requested',
          hasError: false,
          errorMessage: null,
          data: null
        };
      })
      .addCase(getAllPokemonSimpleInfoThunk.rejected, (state, action) => {
        //Global app state
        state.globalState = {
          status: 'rejected'
        };
        //simple data state
        state.simpleData = {
          status: 'rejected',
          hasError: true,
          errorMessage: action.error.message as string,
          data: null
        };
        //secific data state
        state.specificData = {
          status: 'non-requested',
          hasError: true,
          errorMessage: action.error.message as string,
          data: null
        };
      })
      .addCase(getAllPokemonSimpleInfoThunk.pending, (state) => {
        //Global app state
        state.globalState = {
          status: 'pending'
        };
        //simple data state
        state.simpleData = {
          status: 'pending',
          hasError: false,
          errorMessage: null,
          data: null
        };
        //secific data state
        state.specificData = {
          status: 'non-requested',
          hasError: false,
          errorMessage: null,
          data: null
        };
      });
  }
});

export const {} = pokemonAppSlice.actions;
export const pokemonAppReducer = pokemonAppSlice.reducer;
