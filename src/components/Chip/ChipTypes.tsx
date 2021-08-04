import { MainColorNameType } from '../../utils'
import { BoxProps } from '../Box/BoxTypes'

type Variant = 'filled' | 'outline' | 'text'

export interface ChipProps extends BoxProps {
  color?: MainColorNameType
  variant?: Variant,
  disabled?: boolean
}