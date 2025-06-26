import {
  Max_Items_Por_Pagina,
  Min_Items_Por_Pagina,
  total_pokemones
} from '@/Data';

import { PaginationState } from '@/Interfaces';

const paginationInitialData: PaginationState = {
  itemsPorPagina: 10,
  PaginasTotales: null,

  paginaActual: 1,
  indexTotales: null,
  primerItemDePagina: 1,
  ultimoItemDePagina: 10,

  //validación de movimiento
  hayPaginaPrevia: false,
  hayPaginaProxima: true
};
