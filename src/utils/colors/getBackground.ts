import { css, DefaultTheme } from 'styled-components'
import { MainColorVariantType } from './colorsTypes'
import { MainColorNameType } from './colors'

export type BackgroundType =
  | 'backgroundPrimary'
  | 'backgroundSecondary'
  | MainColorNameType
  | string
  | [MainColorNameType, MainColorVariantType]

export const getBackground = (
  background: BackgroundType,
  theme: DefaultTheme
) => {
  switch (background) {
    case 'backgroundPrimary':
      return theme.palette.background.primary.main
    case 'backgroundSecondary':
      return theme.palette.background.secondary.main
  }
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
