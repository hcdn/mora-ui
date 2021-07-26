import styled from 'styled-components'
import {
  cssCreateStyles,
  cssGetProp,
  spacerMargin,
  spacerPadding
} from '../../utils'
import { Box } from '../Box/Box'
import { textVariants } from './TextStyles'
import { TextProps } from './TextTypes'

export const Text = styled(Box).attrs(
  ({ variant, component, cssStyles, ...props }: TextProps) => {
    const selectedVariant = textVariants[variant || 'body2']
    const ElementTag = component || selectedVariant.component
    const elementCss = {
      ...textVariants.commons,
      ...selectedVariant.css,
      ...cssStyles
    }
    return {
      ...props,
      cssStyles: elementCss,
      as: ElementTag
    }
  }
)<TextProps>`
  ${cssCreateStyles}
  ${spacerMargin}
  ${spacerPadding}
  ${({ align }) => cssGetProp('text-align', align)}
`
Text.defaultProps = {
  variant: 'body2',
  cssStyles: {},
  p: 0
}
