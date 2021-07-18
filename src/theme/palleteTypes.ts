// <3 Based on https://next.material-ui.com/customization/default-theme/?expand-path=$.palette

// Main colors are used as "named" primary colors for the interface
export interface MainColorType {
  main: string
  light: string
  dark: string
  contrastText: string
}
export interface MainColorCreatorType {
  main: string
  light?: string
  dark?: string
  contrastText?: string
}
// Base colors of the App
export interface StepColorType {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  A100: string
  A200: string
  A400: string
  A700: string
}
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
