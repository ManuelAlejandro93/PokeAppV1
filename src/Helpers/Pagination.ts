import { PaginationState } from '@/Interfaces';
import { MAX_ITEMS_PER_PAGE, MIN_ITEMS_PER_PAGE, TOTAL_POKEMON } from '@/Data';

// Función para crear/actualizar el estado de paginación
export const createPaginationState = (
  currentPage: number,
  itemsPerPage: number,
  totalItems: number = TOTAL_POKEMON
): PaginationState => {
  // Validar items por página
  const validItemsPerPage = Math.max(
    MIN_ITEMS_PER_PAGE,
    Math.min(MAX_ITEMS_PER_PAGE, itemsPerPage)
  );

  // Calcular total de páginas
  const totalPages = Math.ceil(totalItems / validItemsPerPage);

  // Validar página actual
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  // Calcular índices
  const startIndex = (validCurrentPage - 1) * validItemsPerPage;
  const endIndex = Math.min(startIndex + validItemsPerPage - 1, totalItems - 1);

  return {
    paginaActual: validCurrentPage,
    itemsPorPagina: validItemsPerPage,
    IndexTotales: totalItems,
    startIndex,
    endIndex,
    totalPages,
    hasNextPage: validCurrentPage < totalPages,
    hasPreviousPage: validCurrentPage > 1
  };
};

// Función para ir a la siguiente página
export const goToNextPage = (state: PaginationState): PaginationState => {
  if (!state.hasNextPage) return state;
  return createPaginationState(
    state.paginaActual + 1,
    state.itemsPorPagina,
    state.IndexTotales
  );
};

// Función para ir a la página anterior
export const goToPreviousPage = (state: PaginationState): PaginationState => {
  if (!state.hasPreviousPage) return state;
  return createPaginationState(
    state.paginaActual - 1,
    state.itemsPorPagina,
    state.IndexTotales
  );
};

// Función para ir a una página específica
export const goToPage = (
  state: PaginationState,
  targetPage: number
): PaginationState => {
  return createPaginationState(
    targetPage,
    state.itemsPorPagina,
    state.IndexTotales
  );
};

// Función para aumentar items por página
export const increaseItemsPerPage = (
  state: PaginationState
): PaginationState => {
  if (state.itemsPorPagina >= MAX_ITEMS_PER_PAGE) return state;

  const newItemsPerPage = state.itemsPorPagina + 1;

  // Mantener aproximadamente la misma posición en el listado
  const currentFirstItem = state.startIndex;
  const newPage = Math.floor(currentFirstItem / newItemsPerPage) + 1;

  return createPaginationState(newPage, newItemsPerPage, state.IndexTotales);
};

// Función para disminuir items por página
export const decreaseItemsPerPage = (
  state: PaginationState
): PaginationState => {
  if (state.itemsPorPagina <= MIN_ITEMS_PER_PAGE) return state;

  const newItemsPerPage = state.itemsPorPagina - 1;

  // Mantener aproximadamente la misma posición en el listado
  const currentFirstItem = state.startIndex;
  const newPage = Math.floor(currentFirstItem / newItemsPerPage) + 1;

  return createPaginationState(newPage, newItemsPerPage, state.IndexTotales);
};

// Función para establecer items por página directamente
export const setItemsPerPage = (
  state: PaginationState,
  newItemsPerPage: number
): PaginationState => {
  if (
    newItemsPerPage < MIN_ITEMS_PER_PAGE ||
    newItemsPerPage > MAX_ITEMS_PER_PAGE
  ) {
    return state;
  }

  // Mantener aproximadamente la misma posición en el listado
  const currentFirstItem = state.startIndex;
  const newPage = Math.floor(currentFirstItem / newItemsPerPage) + 1;

  return createPaginationState(newPage, newItemsPerPage, state.IndexTotales);
};

// Función helper para obtener el rango de items a mostrar
export const getItemsRange = (state: PaginationState): [number, number] => {
  return [state.startIndex, state.endIndex + 1]; // +1 porque slice es exclusivo
};

// Función para validar si se puede cambiar a cierto número de items
export const canSetItemsPerPage = (itemsPerPage: number): boolean => {
  return (
    itemsPerPage >= MIN_ITEMS_PER_PAGE && itemsPerPage <= MAX_ITEMS_PER_PAGE
  );
};

// Función para obtener información sobre los controles disponibles
export const getPaginationControls = (state: PaginationState) => {
  return {
    canGoNext: state.hasNextPage,
    canGoPrevious: state.hasPreviousPage,
    canIncreaseItems: state.itemsPorPagina < MAX_ITEMS_PER_PAGE,
    canDecreaseItems: state.itemsPorPagina > MIN_ITEMS_PER_PAGE,
    currentRange: `${state.startIndex + 1}-${state.endIndex + 1}`,
    pageInfo: `${state.paginaActual}/${state.totalPages}`
  };
};

// Estado inicial
export const getInitialPaginationState = (): PaginationState => {
  return createPaginationState(1, MIN_ITEMS_PER_PAGE);
};

// Ejemplo de uso
const exampleUsage = () => {
  // Crear estado inicial
  let paginationState = getInitialPaginationState();
  console.log('Estado inicial:', paginationState);

  // Navegar a la siguiente página
  paginationState = goToNextPage(paginationState);
  console.log('Siguiente página:', paginationState);

  // Aumentar items por página
  paginationState = increaseItemsPerPage(paginationState);
  console.log('Más items por página:', paginationState);

  // Ir a página específica
  paginationState = goToPage(paginationState, 5);
  console.log('Ir a página 5:', paginationState);

  // Obtener rango para slice
  const [start, end] = getItemsRange(paginationState);
  console.log(`Hacer slice desde ${start} hasta ${end}`);

  // Obtener controles disponibles
  const controls = getPaginationControls(paginationState);
  console.log('Controles:', controls);

  // Ejemplo con array de pokemon
  const allPokemon = Array.from({ length: 151 }, (_, i) => ({
    id: i + 1,
    name: `Pokemon ${i + 1}`
  }));

  const currentPagePokemon = allPokemon.slice(start, end);
  console.log('Pokemon en página actual:', currentPagePokemon);
};
