//  Definición de todas las columnas

import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { CustomSinglePokemon } from './Types';
import {
  obtenerColorStat,
  formatearTipo,
  formatearPeso,
  formatearAltura
} from './Utils';

// columnas simples

export const obtenerColumnas = (
  tipoSeleccionado: 'tipo1' | 'tipo2'
): ColumnDef<CustomSinglePokemon>[] => [
  // COLUMNA 1: Imagen
  {
    accessorKey: 'foto',
    header: 'Imagen',
    enableSorting: false, // No se puede ordenar por imagen
    cell: ({ row }) => (
      <div className='flex items-center justify-center w-full h-full'>
        <img
          src={row.original.foto}
          alt={row.original.nombre}
          className='w-full h-full object-contain'
        />
      </div>
    )
  },

  // COLUMNA 2: Nombre
  {
    accessorKey: 'nombre',
    header: 'Nombre',
    enableSorting: true, // Se puede ordenar alfabéticamente
    cell: ({ getValue }) => (
      <div className='flex items-center justify-center h-full'>
        <span className='capitalize'>{getValue() as string}</span>
      </div>
    )
  },

  // COLUMNA 3: Tipo (esta es especial, la veremos en detalle después)
  {
    id: 'tipo',
    accessorFn: (row) => row.tipo[tipoSeleccionado].nombre,
    header: tipoSeleccionado === 'tipo1' ? 'Tipo 1' : 'Tipo 2',
    enableSorting: true,
    cell: ({ getValue }) => (
      <div className='flex items-center justify-center h-full'>
        <span className='capitalize'>
          {formatearTipo(getValue() as string)}
        </span>
      </div>
    )
  },

  // COLUMNA 4: Peso
  {
    accessorKey: 'peso',
    header: 'Peso',
    enableSorting: true,
    cell: ({ getValue }) => {
      const valor = getValue() as number;
      return (
        <div className='flex items-center justify-center h-full'>
          <span className={obtenerColorStat(valor)}>
            {formatearPeso(valor)}
          </span>
        </div>
      );
    }
  },

  // COLUMNA 5: Altura
  {
    accessorKey: 'altura',
    header: 'Altura',
    enableSorting: true,
    cell: ({ getValue }) => {
      const valor = getValue() as number;
      return (
        <div className='flex items-center justify-center h-full'>
          <span className={obtenerColorStat(valor)}>
            {formatearAltura(valor)}
          </span>
        </div>
      );
    }
  }
];
