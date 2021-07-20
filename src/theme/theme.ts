import { defaultElevations } from './elevations/elevations'
import { defaultLightPalette } from './palette/palette'
import { defaultSpacing } from './spacing/spacing'
import { ThemeType } from './themeTypes'

export const defaultLightTheme: ThemeType = {
  name: 'lightTheme',
  type: 'light',
  palette: defaultLightPalette,
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  spacing: defaultSpacing,
  elevations: defaultElevations
}

export const defaultDarkTheme: ThemeType = {
  name: 'darkTheme',
  type: 'dark',
  palette: defaultLightPalette,
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  spacing: defaultSpacing,
  elevations: defaultElevations
}
