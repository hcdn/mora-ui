import { css, CSSObject } from 'styled-components'

/** Recibe un objeto de css y crea un estilo. */
export const cssCreateStyles = css<CssStylesInterface>(
  ({ cssStyles }) => cssStyles || {}
)

export interface CssStylesInterface {
  cssStyles?: CSSObject
}
