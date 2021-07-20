import { SizingType } from './sizingTypes'

export const getSize = (
  size: number,
  scale: number = 0.4,
  unit: string = 'rem'
): string => {
  return `${size * scale}${unit}`
}

export const defaultSizing: SizingType = {
  scale: 0.4,
  unit: 'rem',
  getSize
}
