import { css, DefaultTheme } from 'styled-components'

/**
 * Generate size:
 *
 * if typeof size === 'string' => it will return "size"
 *
 * if typeof size === 'number' => it will return size * scale unit
 */
export const getSize = (size: number | string, theme: DefaultTheme): string => {
  return theme.sizing.getSize(size, theme.sizing.scale, theme.sizing.unit)
}

/**
 * Generate css styled size:
 *
 * if typeof size === 'string' => it will return "size"
 *
 * if typeof size === 'number' => it will return size * scale unit
 */
export const cssGetSize = (size: number | string) =>
  css`
    ${({ theme }) => getSize(size, theme)}
  `
