import chroma from 'chroma-js'
import { css, DefaultTheme } from 'styled-components'
import { TextColorNamesType } from './colors'

const getLightenColor = (
  textColor: TextColorNamesType,
  theme: DefaultTheme
) => {
  switch (textColor) {
    case 'backgroundPrimary':
      return chroma(theme.palette.background.primary.contrastText)
        .alpha(0.6)
        .css()
    case 'backgroundSecondary':
      return chroma(theme.palette.background.secondary.contrastText)
        .alpha(0.6)
        .css()
    case 'textLight':
      return chroma(theme.palette.text.light.primary).alpha(0.6).css()
    case 'textDark':
      return chroma(theme.palette.text.dark.primary).alpha(0.6).css()
    default:
      if (textColor in theme.palette.main) {
        return theme.palette.main[textColor].main
      } else {
        return textColor
      }
  }
}

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

export const setTextColor = (
  theme: DefaultTheme,
  textColor?: TextColorNamesType
) =>
  !!textColor &&
  css`
    --textColor: ${getTextColor(textColor, theme)};
    --lightenTextColor: ${getLightenColor(textColor, theme)};
    color: var(--textColor);
  `

export const cssGetTextColor = css<{ textColor?: TextColorNamesType }>`
  ${({ textColor, theme }) => setTextColor(theme, textColor)}
`
