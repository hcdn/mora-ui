import { defaultElevations } from './elevations/elevations'
import { defaultLightPalette } from './palette/palette'
import { defaultSizing } from './sizing/sizing'
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
  sizing: defaultSizing,
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
  sizing: defaultSizing,
  elevations: defaultElevations
}
