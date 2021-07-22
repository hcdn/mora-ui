import { ElevationsType } from './elevations/elevationsTypes'
import { FontType } from './font/fontTypes'
import { PaletteType } from './palette/paletteTypes'
import { SizingType } from './sizing/sizingTypes'

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
  sizing: SizingType
  elevations: ElevationsType
  font: FontType
}
