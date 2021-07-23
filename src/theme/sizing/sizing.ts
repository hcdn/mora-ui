import { SizingType } from './sizingTypes'

export const getSize = (
  size: number | string,
  scale: number = 0.25,
  unit: string = 'rem'
): string =>
  typeof size === 'string'
    ? size
    : `${Math.round(size * scale * 10) / 10}${unit}`

export const defaultSizing: SizingType = {
  scale: 0.25,
  unit: 'rem',
  getSize
}
