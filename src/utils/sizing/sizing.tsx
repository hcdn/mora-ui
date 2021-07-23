import { css, DefaultTheme } from 'styled-components'

export const getSize = (size: number | string, theme: DefaultTheme): string => {
  return theme.sizing.getSize(size, theme.sizing.scale, theme.sizing.unit)
}

export const cssGetSize = (size: number | string) =>
  css`
    ${({ theme }) => getSize(size, theme)}
  `
