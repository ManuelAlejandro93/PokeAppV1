//Aquí se van a guardar las interfaces que unicamente se van a usar en la tabla.

export interface CustomSinglePokemon {
  nombre: string;
  foto: string;
  tipo: {
    tipo1: {
      nombre: string;
    };
    tipo2: {
      nombre: string;
    };
  };
  id: number;
  altura: number;
  peso: number;
  salud_base_valor: number;
  defensa_base_valor: number;
  ataque_base_valor: number;
  defensa_especial_valor: number;
  ataque_especial_valor: number;
  velocidad: number;
}

export type TipoSeleccionado = 'tipo1' | 'tipo2';

export type DireccionOrden = 'asc' | 'desc';

export interface PokemonTableProps {
  data: CustomSinglePokemon[];
}
