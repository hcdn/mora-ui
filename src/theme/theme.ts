import { defaultElevations } from './elevations/elevations'
import { defaultLightPalette } from './palette/palette'
import { defaultSizing } from './sizing/sizing'
import { ThemeType } from './themeTypes'
import { createGlobalStyle, css } from 'styled-components'
import { defaultFont } from './font/font'
import { setTextColor } from '../utils'

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
    colGap: 4
  }
}

export const defaultDarkTheme: ThemeType = {
  ...defaultLightTheme,
  name: 'darkTheme',
  type: 'dark'
}

export const MoraGlobalStyle = createGlobalStyle`
  :root{
    ${({ theme }) => css`
      font-family: ${theme.font.family.sans};
      color: ${theme.palette.background.primary.contrastText};
      ${setTextColor(theme, 'backgroundPrimary')}
    `}
  }
`
