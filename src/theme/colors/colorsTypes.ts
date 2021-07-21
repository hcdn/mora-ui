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
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
}
export interface TextColorsType {
  primary: string
  secondary: string
  disabled: string
  link: string
}
// Colors for actions
export interface ActionColorType {
  active: string
  hover: string
  selected: string
  disabled: string
}
