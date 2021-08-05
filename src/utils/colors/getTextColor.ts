import { css, DefaultTheme } from 'styled-components'
import { TextColorNamesType } from './colors'

export const getTextColor = (
  textColor: TextColorNamesType,
  theme: DefaultTheme
) => {
  switch (textColor) {
    case 'backgroundPrimary':
      return theme.palette.background.primary.contrastText
    case 'backgroundSecondary':
      return theme.palette.background.secondary.contrastText
    case 'textLight':
      return theme.palette.text.light.primary
    case 'textDark':
      return theme.palette.text.dark.primary
    default:
      if (textColor in theme.palette.main) {
        return theme.palette.main[textColor].main
      } else {
        return textColor
      }
  }
}

export const cssGetTextColor = css<{ textColor?: TextColorNamesType }>`
  ${({ textColor, theme }) =>
    !!textColor &&
    css`
      color: ${getTextColor(textColor, theme)};
    `}
`
