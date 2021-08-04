import { MainColorNameType } from '../../utils'
import { BoxProps } from '../Box/BoxTypes'

export interface AlertProps extends BoxProps {
  color?: MainColorNameType
  icon?: any
  iconSize?: number | string
  title?: any
  text?: any
}
