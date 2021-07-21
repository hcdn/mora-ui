// <3 Based on https://next.material-ui.com/customization/default-theme/?expand-path=$.palette

import {
  ActionColorType,
  MainColorType,
  StepColorType,
  TextColorsType
} from '../colors/colorsTypes'

// Complete default palette
export interface PaletteType {
  type: 'light' | 'dark'
  main: {
    primary: MainColorType
    secondary: MainColorType
    error: MainColorType
    success: MainColorType
    warning: MainColorType
    info: MainColorType
  }
  colors: {
    blue: StepColorType
    red: StepColorType
    green: StepColorType
    grey: StepColorType
  }
  background: {
    primary: MainColorType
    secondary: MainColorType
  }
  text: {
    light: TextColorsType
    dark: TextColorsType
  }
  // Line used to divide things
  divider: string
  action: ActionColorType
}
