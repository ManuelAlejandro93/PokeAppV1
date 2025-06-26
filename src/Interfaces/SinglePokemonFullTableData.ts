export interface SinglePokemonFullTableData {
  //?Lo que sí está.
  id: number;
  sprites: Sprites /* imágen */;
  name: string /* nombre  */;
  types: Type[] /* tipo */;
  weight: number /* peso */;
  height: number /* altura */;
  base_experience: number /* experiencia */;

  //? fin de lo que sí está
  stats: Stat[];
}

export interface Sprites {
  front_default: string;
}

export interface Stat {
  base_stat: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Species {
  name: string;
  url: string;
}
