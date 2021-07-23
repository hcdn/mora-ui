import { css, DefaultTheme } from 'styled-components'
import { MainColorVariantType } from '../../theme/colors/colorsTypes'
import { MainColorNameType } from './colors'

export type BackgroundType =
  | MainColorNameType
  | string
  | [MainColorNameType, MainColorVariantType]

export const getBackground = (
  background: BackgroundType,
  theme: DefaultTheme
) => {
  if (typeof background === 'object') {
    return theme.palette.main[background[0]][background[1]]
  }
  if (!(background in theme.palette.main)) {
    return background
  }
  return theme.palette.main[background].light
}

export interface UseBackgroundInterface {
  background?: BackgroundType
}

export const cssUseBackground = css<UseBackgroundInterface>`
  ${({ background, theme }) =>
    background && 'background:' + getBackground(background, theme) + ';'}
`
