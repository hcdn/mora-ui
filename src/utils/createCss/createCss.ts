import {
  css,
  CSSObject,
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps
} from 'styled-components'

/** Recibe un objeto de css y crea un estilo. */
export const cssCreateStyles = css<SxInterface>(({ sx }) => sx || {})

export interface SxInterface {
  sx?: CSSObject
}

export interface InjectedCssInterface {
  css?: FlattenInterpolation<ThemedStyledProps<any, DefaultTheme>>
}

export const cssInject = css<InjectedCssInterface>(
  ({ css: injectedCss }) => injectedCss
)
