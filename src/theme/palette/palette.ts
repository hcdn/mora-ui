import { createMainColor, createRangeColor } from '../colors/colors'
import { TextColorsType } from '../colors/colorsTypes'
import { PaletteType } from './paletteTypes'

const defaultLightText: TextColorsType = {
  primary: 'white',
  secondary: 'rgba(255, 255, 255, 0.6)',
  disabled: 'rgba(255, 255, 255, 0.38)',
  link: '#1976d2'
}
const defaultDarkText: TextColorsType = {
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.6)',
  disabled: 'rgba(0, 0, 0, 0.38)',
  link: '#1976d2'
}
// defaut palette
export const defaultLightPalette: PaletteType = {
  type: 'light',
  main: {
    primary: createMainColor(
      { main: '#1976d2' },
      defaultLightText,
      defaultDarkText
    ),
    secondary: createMainColor(
      { main: '#9c27b0' },
      defaultLightText,
      defaultDarkText
    ),
    error: createMainColor(
      { main: '#d32f2f' },
      defaultLightText,
      defaultDarkText
    ),
    success: createMainColor(
      { main: '#2e7d32' },
      defaultLightText,
      defaultDarkText
    ),
    warning: createMainColor(
      { main: '#ED6C02' },
      defaultLightText,
      defaultDarkText
    ),
    info: createMainColor(
      { main: '#0288d1' },
      defaultLightText,
      defaultDarkText
    )
  },
  colors: {
    blue: createRangeColor('#1976d2'),
    red: createRangeColor('#d32f2f'),
    green: createRangeColor('#9e9e9e'),
    grey: createRangeColor('#9e9e9e')
  },
  background: {
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#ffffff',
      contrastText: '#000000'
    },
    secondary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#ffffff',
      contrastText: '#000000'
    }
  },
  text: {
    light: defaultLightText,
    dark: defaultDarkText
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.4)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)'
  }
}
