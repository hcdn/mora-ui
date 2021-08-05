import { css, DefaultTheme } from 'styled-components'
import {
  MainColorType,
  MainColorVariantType,
  StepColorLevelsType,
  StepColorType
} from '../../theme/colors/colorsTypes'

export type MainColorNameType = keyof DefaultTheme['palette']['main']
export type TextColorNamesType =
  | 'backgroundPrimary'
  | 'backgroundSecondary'
  | 'textLight'
  | 'textDark'
  | MainColorNameType
  | string

export const getMainColor = (
  color: MainColorNameType,
  theme: DefaultTheme
): MainColorType => {
  return theme.palette.main[color]
}

export const cssGetMainColor = (
  color: MainColorNameType,
  variant?: MainColorVariantType
) =>
  css`
    ${({ theme }) => getMainColor(color, theme)[variant || 'main']}
  `

export type StepColorNameType = keyof DefaultTheme['palette']['colors']

export const getStepColor = (
  color: StepColorNameType,
  theme: DefaultTheme
): StepColorType => {
  return theme.palette.colors[color]
}

export const cssGetStepColor = (
  color: StepColorNameType,
  level?: StepColorLevelsType
) =>
  css`
    ${({ theme }) => getStepColor(color, theme)[level || 'default']}
  `
