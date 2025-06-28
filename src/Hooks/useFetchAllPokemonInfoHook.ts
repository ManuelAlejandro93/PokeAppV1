import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  getAllPokemonSimpleInfoThunk,
  getAllPokemonSpecificInfoThunk,
  onSavedOnLocalStorage,
  store
} from '@/Store';

import { SinglePokemonSimpleResult } from '@/Interfaces';

import { searchOnLocalStorage } from '@/Helpers';

export const useFetchAllPokemonInfoHook = () => {
  const simpleDataHttpStatus = useSelector(
    (state: RootState) => state.pokemonAppReducer.simpleData.status
  );
  const dispatch = useDispatch();
  // Efecto que se dispara al montar la página.
  useEffect(() => {
    if (simpleDataHttpStatus === 'pending') {
      //buscar en localStorage
      const pokemonInfoOnLocalStorage = searchOnLocalStorage();

      if (!pokemonInfoOnLocalStorage || pokemonInfoOnLocalStorage === null) {
        //despacho la async axn
        dispatch<any>(getAllPokemonSimpleInfoThunk());
      } else {
        //despacho la función sincrona
        dispatch<any>(onSavedOnLocalStorage(pokemonInfoOnLocalStorage));
      }
    }
  }, []);

  //Efecto que se dispara al cambiar el "simpleDataHttpStatus".
  useEffect(() => {
    if (simpleDataHttpStatus === 'fulfilled') {
      const lastStoreState = store.getState();

      const currentAllPokemonSimpleInfo =
        lastStoreState.pokemonAppReducer.simpleData.data;

      dispatch<any>(
        getAllPokemonSpecificInfoThunk(
          currentAllPokemonSimpleInfo as SinglePokemonSimpleResult[]
        )
      );
    }
  }, [simpleDataHttpStatus]);
};
