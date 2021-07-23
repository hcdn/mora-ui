import styled, { css, DefaultTheme } from 'styled-components'
import { getSize } from '../../utils'
import { cssGetProp } from '../../utils/getProp'
import { Box } from '../Box/Box'
import { BoxProps } from '../Box/BoxTypes'

export interface CardProps extends BoxProps {
  variant?: 'outline' | 'filled' | 'secondary'
  outline?: boolean | string
  elevation?: keyof DefaultTheme['elevations']['z']
  elevationHover?: keyof DefaultTheme['elevations']['z']
  background?: string
  borderRadius?: number | string
}

const getOutline = (outline: boolean | string, theme: DefaultTheme) =>
  typeof outline === 'string' ? outline : theme.palette.divider

export const Card = styled(Box).attrs<CardProps>((props) => {
  /**
   * Set default props from variant
   */
  const variantProps = {
    outline: {
      outline: true,
      background: props.theme.palette.background.primary.main
    },
    filled: {
      background: props.theme.palette.background.primary.main
    },
    secondary: {
      background: props.theme.palette.background.secondary.main
    }
  }
  const selectedVariant = variantProps[props.variant || 'outline']
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
      outline && `solid 1px ${getOutline(outline, theme)}`
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
  p: 4,
  borderRadius: 4,
  variant: 'outline'
}
