export interface PaginationState {
  paginaActual: number;
  itemsPorPagina: number;
  indexTotales: number | null;
  primerItemDePagina: number;
  ultimoItemDePagina: number;
  PaginasTotales: number | null;
  hayPaginaProxima: boolean;
  hayPaginaPrevia: boolean;
}
