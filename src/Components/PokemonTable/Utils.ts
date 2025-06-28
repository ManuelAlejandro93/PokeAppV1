// utils.ts - Funciones auxiliares para la tabla

// Función para determinar el color según el valor de la stat
// Rangos: 1-85 (bajo/rojo), 86-170 (medio/normal), 171-255 (alto/verde)
export const obtenerColorStat = (valor: number): string => {
  if (valor <= 85) return 'text-red-600';
  if (valor >= 171) return 'text-green-600';
  return ''; // Sin color especial para valores medios
};

// Función para manejar el texto del tipo2 cuando no existe
export const formatearTipo = (tipo: string): string => {
  if (tipo === 'sin tipo 2 definido') {
    return 'este pokemon no tiene un tipo 2';
  }
  return tipo;
};

// Función para formatear peso (agregar 'kg')
export const formatearPeso = (peso: number): string => {
  return `${peso} kg`;
};

// Función para formatear altura (agregar 'm')
export const formatearAltura = (altura: number): string => {
  return `${altura} m`;
};
