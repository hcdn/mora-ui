import styled from 'styled-components'
import { cssGetProp } from '../../utils'
import { Box } from '../Box/Box'
import { textVariants } from './TextStyles'
import { TextProps } from './TextTypes'

// TODO: cambiar prop "component" a "as"
export const Text = styled(Box).attrs(
  ({ variant, component, sx, ...props }: TextProps) => {
    const selectedVariant = textVariants[variant || 'body2']
    const ElementTag = component || selectedVariant.component
    const elementCss = {
      ...textVariants.commons,
      ...selectedVariant.css,
      ...sx
    }

    const elementProps = {
      textColor: props.color,
      ...selectedVariant.props,
      ...props,
      sx: elementCss,
      as: ElementTag
    }
    return elementProps
  }
)<TextProps>`
  ${({ align }) => cssGetProp('text-align', align)}
`
Text.defaultProps = {
  variant: 'body2',
  sx: {},
  p: 0
}
