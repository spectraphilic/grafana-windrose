type GridLabels = 'degrees' | 'compass';
type Scale = 'absolute' | 'percent';

export interface SimpleOptions {
  slices: number,
  rings: number,
  x_grid: GridLabels,
  opacity: number,
  start: number,
  step: string,
  unit: string,
  scale: Scale,
}
