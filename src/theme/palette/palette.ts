import { createMainColor, createRangeColor } from '../colors/colors'
import { PaletteType } from './paletteTypes'

// defaut palette
export const defaultLightPalette: PaletteType = {
  type: 'light',
  primary: createMainColor({ main: '#1976d2' }),
  secondary: createMainColor({ main: '#9c27b0' }),
  error: createMainColor({ main: '#d32f2f' }),
  success: createMainColor({ main: '#2e7d32' }),
  warning: createMainColor({ main: '#ED6C02' }),
  info: createMainColor({ main: '#0288d1' }),
  // grey: {
  //   50: '#fafafa',
  //   100: '#f5f5f5',
  //   200: '#eeeeee',
  //   300: '#e0e0e0',
  //   400: '#bdbdbd',
  //   500: '#9e9e9e',
  //   600: '#757575',
  //   700: '#616161',
  //   800: '#424242',
  //   900: '#212121'
  // },
  grey: createRangeColor('#9e9e9e'),
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
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    link: '#1976d2'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.4)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)'
  }
}
