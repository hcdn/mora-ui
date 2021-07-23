import { SizingType } from './sizingTypes'

export const getSize = (
  size: number | string,
  scale: number = 0.4,
  unit: string = 'rem'
): string => (typeof size === 'string' ? size : `${size * scale}${unit}`)

export const defaultSizing: SizingType = {
  scale: 0.4,
  unit: 'rem',
  getSize
}
