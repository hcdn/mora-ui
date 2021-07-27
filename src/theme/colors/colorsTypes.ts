// Main colors are used as "named" primary colors for the interface
export type MainColorVariantType = 'main' | 'light' | 'dark' | 'contrastText'

export type MainColorType = {
  [key in MainColorVariantType]: string
}

export interface MainColorCreatorType {
  main: string
  light?: string
  dark?: string
  contrastText?: string
}

// Base colors of the App
export type StepColorLevelsType =
  | 'default'
  | 0.5
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9

export type StepColorType = {
  [key in StepColorLevelsType]: string
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
