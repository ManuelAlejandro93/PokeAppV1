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
