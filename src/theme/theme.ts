import { defaultElevations } from './elevations/elevations'
import { defaultLightPalette } from './palette/palette'
import { defaultSizing } from './sizing/sizing'
import { ThemeType } from './themeTypes'
import 'styled-components'
import { defaultFont } from './font/font'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

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
  elevations: defaultElevations,
  font: defaultFont,
  layout: {
    colCount: 12,
    colGap: 1
  }
}

export const defaultDarkTheme: ThemeType = {
  ...defaultLightTheme,
  name: 'darkTheme',
  type: 'dark'
}
