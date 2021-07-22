import { createMainColor, createRangeColor } from '../colors/colors'
import { TextColorsType } from '../colors/colorsTypes'
import { PaletteType } from './paletteTypes'

const defaultLightText: TextColorsType = {
  primary: 'white',
  secondary: 'rgba(255, 255, 255, 0.6)',
  disabled: 'rgba(255, 255, 255, 0.38)',
  link: '#1C6ED5'
}
const defaultDarkText: TextColorsType = {
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.6)',
  disabled: 'rgba(0, 0, 0, 0.38)',
  link: '#1C6ED5'
}

const defaultColors = {
  blue: createRangeColor('#1C6ED5'),
  red: createRangeColor('#DE4A4A'),
  green: createRangeColor('#1ebd6e'),
  orange: createRangeColor('#FD8630'),
  grey: createRangeColor('#5F6368')
}

const defaultMainColors = {
  primary: createMainColor({
    main: defaultColors.blue.default,
    light: '#E8F1FC',
    dark: '#135AB2',
    contrastText: defaultLightText.primary
  }),
  secondary: createMainColor({
    main: '#9c27b0',
    contrastText: defaultLightText.primary
  }),
  error: createMainColor({
    main: defaultColors.red.default,
    contrastText: defaultLightText.primary
  }),
  success: createMainColor({
    main: defaultColors.green.default,
    contrastText: defaultLightText.primary
  }),
  warning: createMainColor({
    main: defaultColors.orange.default,
    contrastText: defaultLightText.primary
  }),
  info: createMainColor({ main: '#0288d1' }, defaultLightText, defaultDarkText)
}

// defaut palette
export const defaultLightPalette: PaletteType = {
  type: 'light',
  main: defaultMainColors,
  colors: defaultColors,
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
