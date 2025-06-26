export interface CustomSinglePokemonType {
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
  defensa_especial_base_valor: number;
  ataque_especial_base_valor: number;
  velocidad: number;
}
