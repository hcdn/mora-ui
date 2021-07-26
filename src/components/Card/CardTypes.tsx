import { DefaultTheme } from 'styled-components'
import { BoxProps } from '../Box/BoxTypes'

export type CardVariantType = 'outline' | 'filled' | 'secondary' | 'none'

export interface CardProps extends BoxProps {
  variant?: CardVariantType
  outline?: boolean | string
  elevation?: keyof DefaultTheme['elevations']['z']
  elevationHover?: keyof DefaultTheme['elevations']['z']
  background?: string
  borderRadius?: number | string
}
