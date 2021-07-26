import styled from 'styled-components'
import { cssGetProp } from '../../utils'
import { Box } from '../Box/Box'
import { textVariants } from './TextStyles'
import { TextProps } from './TextTypes'

// TODO: cambiar prop "component" a "as"
export const Text = styled(Box).attrs(
  ({ variant, component, cssStyles, ...props }: TextProps) => {
    const selectedVariant = textVariants[variant || 'body2']
    const ElementTag = component || selectedVariant.component
    const elementCss = {
      ...textVariants.commons,
      ...selectedVariant.css,
      ...cssStyles
    }

    const elementProps = {
      ...selectedVariant.props,
      ...props,
      cssStyles: elementCss,
      as: ElementTag
    }
    // console.log(elementProps)

    return elementProps
  }
)<TextProps>`
  ${({ align }) => cssGetProp('text-align', align)}
`
Text.defaultProps = {
  variant: 'body2',
  cssStyles: {},
  p: 0
}
