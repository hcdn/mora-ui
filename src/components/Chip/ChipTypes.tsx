import { MainColorNameType } from '../../utils'
import { BoxProps, BoxWrapperProps } from '../Box/BoxTypes'

export interface ChipProps extends BoxProps {
  color?: MainColorNameType
  variant?: 'filled' | 'outline' | 'text'
  disabled?: boolean
}

export interface ChipWrapperProps extends BoxWrapperProps {
  color?: MainColorNameType
  variant?: 'filled' | 'outline' | 'text'
  disabled?: boolean
}
