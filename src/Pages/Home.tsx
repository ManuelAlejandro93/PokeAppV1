import React, { useState, useEffect } from 'react';
import { useFetchAllPokemonInfoHook } from '@/Hooks';
import { PokemonTable } from '@/Components';
import { CustomSinglePokemon } from '@/Interfaces';

export const HomePage = () => {
  useFetchAllPokemonInfoHook();

  return <></>;
};
