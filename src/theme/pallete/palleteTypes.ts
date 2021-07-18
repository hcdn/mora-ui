// <3 Based on https://next.material-ui.com/customization/default-theme/?expand-path=$.palette

import { MainColorType, StepColorType } from '../colors/colorsTypes'

// Colors for actions
export interface ActionColorType {
  active: string
  hover: string
  selected: string
  disabled: string
}
// Complete default pallete
export interface PalleteType {
  type: 'light' | 'dark'
  primary: MainColorType
  secondary: MainColorType
  error: MainColorType
  success: MainColorType
  warning: MainColorType
  info: MainColorType
  grey: StepColorType
  background: {
    primary: MainColorType
    secondary: MainColorType
  }
  text: {
    primary: string
    secondary: string
    disabled: string
    link: string
  }
  // Line used to divide things
  divider: string
  action: ActionColorType
}
