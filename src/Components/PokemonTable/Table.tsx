import React, { useState, useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState
} from '@tanstack/react-table';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Skeleton } from '@/shadcn/ui/skeleton';
import {
  CustomSinglePokemon,
  TipoSeleccionado,
  PokemonTableProps
} from './Types';
import { obtenerColumnas } from './Colums';

export const PokemonTable = ({
  data,
  isLoading = false
}: PokemonTableProps) => {
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
    () => obtenerColumnas(tipoSeleccionado),
    [tipoSeleccionado]
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
  // Si está cargando, mostrar skeleton
  if (isLoading) {
    return (
      <div className='w-full p-4'>
        <div className='space-y-2'>
          {[...Array(10)].map((_, i) => (
            <Skeleton
              key={i}
              className='h-[200px] w-full'
            />
          ))}
        </div>
      </div>
    );
  }
};
