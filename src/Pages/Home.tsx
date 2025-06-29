import { useFetchAllPokemonInfoHook } from '@/Hooks';
import { PokemonTable } from '@/Components';
import { CustomSinglePokemon } from '@/Interfaces';

export const HomePage = () => {
  const { isSpecificDataLoading, specificAllPokemonData } =
    useFetchAllPokemonInfoHook();

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Pokédex - Primera Generación
      </h1>

      <PokemonTable
        data={specificAllPokemonData as CustomSinglePokemon[]}
        isLoading={isSpecificDataLoading}
      />
    </div>
  );
};
