import { ElevationsType } from './elevations/elevationsTypes'
import { PaletteType } from './palette/paletteTypes'
import { SpacingType } from './spacing/spacingTypes'

export interface ThemeType {
  name?: string
  type: 'light' | 'dark'
  palette: PaletteType
  screens: {
    sm: string
    md: string
    lg: string
    xl: string
  }
  spacing: SpacingType
  elevations: ElevationsType
}
