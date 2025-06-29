import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState
} from '@tanstack/react-table';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { TipoSeleccionado, PokemonTableProps } from './Types';
import { obtenerColumnas } from './Colums';

export const PokemonTable = ({ data }: PokemonTableProps) => {
  //Dispatch para pasarle a Columns para que se lo pase a "ver más detalle del pokemon"
  const dispatch = useDispatch();

  // Estado para el ordenamiento (inicia ordenado por ID ascendente)
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'id', desc: false }
  ]);

  // Estado para controlar qué tipo mostrar (tipo1 o tipo2)
  const [tipoSeleccionado, setTipoSeleccionado] =
    useState<TipoSeleccionado>('tipo1');

  // Estado para la paginación
  const [paginacion, setPaginacion] = useState({
    pageIndex: 0, // Página actual (0 = primera página)
    pageSize: 10 // Pokémon por página (inicial: 10)
  });

  // Obtener las columnas con el tipo seleccionado
  const columnas = useMemo(
    () => obtenerColumnas(tipoSeleccionado, dispatch),
    [tipoSeleccionado, dispatch]
  );

  // Configuración de la tabla
  const table = useReactTable({
    data, // Los datos de los pokémon
    columns: columnas, // Las columnas que definimos

    // Configuración del ordenamiento
    state: {
      sorting,
      pagination: paginacion
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    // Configuración de la paginación
    onPaginationChange: setPaginacion,
    getPaginationRowModel: getPaginationRowModel(),

    // Modelo básico de filas
    getCoreRowModel: getCoreRowModel()
  });

  // Funciones auxiliares para los botones de paginación
  const incrementarPokemonPorPagina = () => {
    if (paginacion.pageSize < 50) {
      setPaginacion((prev) => ({
        ...prev,
        pageSize: prev.pageSize + 1
      }));
    }
  };

  // Funciones auxiliares para los botones de paginación
  const decrementarPokemonPorPagina = () => {
    if (paginacion.pageSize > 10) {
      setPaginacion((prev) => ({
        ...prev,
        pageSize: prev.pageSize - 1
      }));
    }
  };

  return (
    <div className='w-full p-4'>
      {/* Controles superiores */}
      <div className='mb-4 flex gap-4 items-center flex-wrap'>
        {/* Información de paginación */}
        <div className='text-sm text-gray-600'>
          Mostrando {table.getRowModel().rows.length} de {data.length} pokémon
          Mostrando {table.getRowModel().rows.length} de {data.length} pokémon
        </div>

        {/* Selector de tipo para la columna especial */}
        <div className='flex items-center gap-2'>
          <label className='text-sm font-medium'>Mostrar tipo:</label>
          <select
            value={tipoSeleccionado}
            onChange={(e) =>
              setTipoSeleccionado(e.target.value as TipoSeleccionado)
            }
            className='border rounded px-2 py-1 text-sm'
          >
            <option value='tipo1'>Tipo 1</option>
            <option value='tipo2'>Tipo 2</option>
          </select>
        </div>
      </div>
      {/* Contenedor de la tabla con scroll horizontal */}
      <div className='overflow-x-auto border rounded-lg'>
        <table className='min-w-max'>
          <thead>
            <tr className='border-b bg-gray-50'>
              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => {
                  const puedeOrdenar = header.column.getCanSort();
                  const estaOrdenado = header.column.getIsSorted();

                  return (
                    <th
                      key={header.id}
                      className={`
                        w-[200px] h-[60px] px-4
                        ${
                          puedeOrdenar ? 'cursor-pointer hover:bg-gray-100' : ''
                        }
                      `}
                      onClick={
                        puedeOrdenar
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      <div className='flex items-center justify-center gap-2'>
                        <span className='text-red-600 font-medium'>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>

                        {/* Mostrar flecha de ordenamiento si la columna es ordenable */}
                        {puedeOrdenar && (
                          <span className='text-red-600'>
                            {estaOrdenado === 'desc' ? (
                              <ChevronDown className='w-4 h-4' />
                            ) : estaOrdenado === 'asc' ? (
                              <ChevronUp className='w-4 h-4' />
                            ) : (
                              <span className='w-4 h-4 opacity-30'>
                                <ChevronUp className='w-4 h-4' />
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })
              )}
            </tr>
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className='border-b hover:bg-gray-50'
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className='w-[200px] h-[200px] p-2 border-r last:border-r-0'
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Controles de paginación */}
      <div className='mt-4 flex flex-wrap gap-2 justify-between items-center'>
        {/* Botones de navegación */}
        <div className='flex gap-2'>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className='px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Página anterior
          </button>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className='px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Página siguiente
          </button>
        </div>

        {/* Información de página actual */}
        <div className='text-sm text-gray-600'>
          Página {paginacion.pageIndex + 1} de {table.getPageCount()}
        </div>

        {/* Botones para ajustar pokémon por página */}
        <div className='flex gap-2'>
          <button
            onClick={decrementarPokemonPorPagina}
            disabled={paginacion.pageSize <= 10}
            className='px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Mostrar -1 pokemon en la tabla
          </button>

          <button
            onClick={incrementarPokemonPorPagina}
            disabled={paginacion.pageSize >= 50}
            className='px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Mostrar +1 pokemon en la tabla
          </button>
        </div>
      </div>
    </div>
  );
};
