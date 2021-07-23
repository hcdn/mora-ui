import { css, CSSObject } from 'styled-components'

export const cssCreateStyles = css<CssStylesInterface>(
  ({ cssStyles }) => cssStyles || {}
)

export interface CssStylesInterface {
  cssStyles?: CSSObject
}
