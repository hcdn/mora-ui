import { SpacingType } from './spacingTypes'

export const getSpace = (
  size: number,
  scale: number = 0.4,
  unit: string = 'rem'
): string => {
  return `${size * scale}${unit}`
}

export const defaultSpacing: SpacingType = {
  scale: 0.4,
  unit: 'rem',
  getSpace
}
