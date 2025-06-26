import axios from 'axios';
import { GeneralPokemonInfo } from '@/Interfaces';

interface FullPokemonData {
  id: number;
  name: string;
  // ...otros campos que devuelve la API
}

async function getAllPokemonSpecificInfo(
  generalList: GeneralPokemonInfo[]
): Promise<Record<number, FullPokemonData>> {
  // 1. Crear un array de promesas de fetch+json
  const detailFetches: Promise<FullPokemonData>[] = generalList.map(({ url }) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error(`Error fetching ${url}: ${res.status}`);
      return res.json() as Promise<FullPokemonData>;
    })
  );

  // 2. Esperar a que terminen todas
  const fullDataArray: FullPokemonData[] = await Promise.all(detailFetches);

  // 3. Normalizar en un objeto { [id]: data }
  const normalized: Record<number, FullPokemonData> = fullDataArray.reduce(
    (acc, pokemon) => {
      acc[pokemon.id] = pokemon;
      return acc;
    },
    {} as Record<number, FullPokemonData>
  );

  return normalized;
}
