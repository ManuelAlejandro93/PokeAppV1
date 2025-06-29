import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getAllPokemonSimpleInfoThunk,
  getAllPokemonSpecificInfoThunk
} from '../Thunks';
import { pokemonInitialState } from '@/Data';
import { CustomSinglePokemon } from '@/Interfaces';

const pokemonAppSlice = createSlice({
  name: 'pokemonAppState',
  initialState: pokemonInitialState,
  reducers: {
    openPokemonModal: (state, action: PayloadAction<number>) => {
      const pokemonId = action.payload;

      // Buscamos el pokémon en nuestros datos específicos
      const pokemon = state.specificData.data?.find(
        (poke) => poke?.id === pokemonId
      );

      if (pokemon) {
        state.modalState.modalContent = pokemon;
        state.modalState.isModalOpen = true;
      }
    },

    closePokemonModal: (state) => {
      state.modalState.isModalOpen = false;
    },

    onSavedOnLocalStorage(state, action: PayloadAction<CustomSinglePokemon[]>) {
      //Global app state
      state.globalState = {
        status: 'saved-on-local-storage'
      };
      //simple data state
      state.simpleData = {
        status: 'saved-on-local-storage',
        hasError: false,
        errorMessage: null,
        data: null /* Como tengo la data especifica. No necesito esta info */
      };
      //secific data state
      state.specificData = {
        status: 'saved-on-local-storage',
        hasError: false,
        errorMessage: null,
        data: action.payload
      };
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonSimpleInfoThunk.fulfilled, (state, action) => {
        //Global app state
        state.globalState = {
          status: 'pending'
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
      })
      .addCase(getAllPokemonSpecificInfoThunk.fulfilled, (state, action) => {
        //Global app state
        state.globalState = {
          status: 'fulfilled'
        };
        //simple data state
        //No hago nada.

        //specific data state
        state.specificData = {
          status: 'fulfilled',
          hasError: false,
          errorMessage: null,
          data: action.payload
        };
      })
      .addCase(getAllPokemonSpecificInfoThunk.rejected, (state, action) => {
        //Global app state
        state.globalState = {
          status: 'rejected'
        };
        //simple data state
        //No hago nada.

        //specific data state
        state.specificData = {
          status: 'rejected',
          hasError: true,
          errorMessage: action.error.message,
          data: []
        };
      })
      .addCase(getAllPokemonSpecificInfoThunk.pending, (state) => {
        //Global app state
        state.globalState = {
          status: 'pending'
        };
        //simple data state
        //No hago nada.

        //specific data state
        state.specificData = {
          status: 'pending',
          hasError: false,
          errorMessage: null,
          data: null
        };
      });
  }
});

export const { onSavedOnLocalStorage } = pokemonAppSlice.actions;
export const pokemonAppReducer = pokemonAppSlice.reducer;
