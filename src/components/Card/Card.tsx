import styled, { css, DefaultTheme } from 'styled-components'
import { getSize } from '../../utils'
import { cssGetProp } from '../../utils/getProp'
import { Box } from '../Box/Box'
import { CardProps, CardVariantType } from './CardTypes'

const getOutlineColor = (outline: boolean | string, theme: DefaultTheme) =>
  typeof outline === 'string' ? outline : theme.palette.divider

type CardVariantsConfig = { [k in CardVariantType]: CardProps }

export const Card = styled(Box).attrs<CardProps>((props) => {
  // Set default props from variant.
  const variantProps: CardVariantsConfig = {
    outline: {
      outline: true,
      background: props.theme.palette.background.primary.main
    },
    filled: {
      background: props.theme.palette.background.primary.main
    },
    secondary: {
      background: props.theme.palette.background.secondary.main
    },
    none: {}
  }
  const selectedVariant = variantProps[props.variant || 'outline']
  // Merge default variant props with user props.
  return { ...selectedVariant, ...props }
})<CardProps>`
  ${({
    background,
    elevation,
    elevationHover,
    outline,
    theme,
    borderRadius
  }) => css`
    ${cssGetProp('background-color', background)}
    ${cssGetProp('border-radius', borderRadius && getSize(borderRadius, theme))}
    ${cssGetProp('box-shadow', elevation && theme.elevations.z[elevation])}
    ${cssGetProp(
      'border',
      outline && `solid 1px ${getOutlineColor(outline, theme)}`
    )}
    transition: box-shadow 0.2s ease;
    &:hover {
      ${cssGetProp(
        'box-shadow',
        elevationHover && theme.elevations.z[elevationHover]
      )}
    }
  `}
`

Card.defaultProps = {
  p: 6,
  borderRadius: 4,
  variant: 'outline'
}
