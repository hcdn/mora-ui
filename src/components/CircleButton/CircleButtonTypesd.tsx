import { MainColorNameType } from '../../utils'
import { CircleProps } from '../Circle/Circle'

export interface CircleButtonProps extends CircleProps {
  variant?: 'filled' | 'outline' | 'text'
  color?: MainColorNameType
  size?: 'medium' | 'small' | number | string
  fontSize?: number | string
  onClick?: Function
}

// Props after transform
export interface CircleButtonWrapperProps extends CircleProps {
  variant: 'filled' | 'outline' | 'text'
  color: MainColorNameType
  size: number | string
  fontSize?: number | string
}
