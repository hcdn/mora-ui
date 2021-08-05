import { BoxProps } from '../Box/BoxTypes'

export interface MenuItemProps extends BoxProps {
  label: string
  icon?: any
  selected?: boolean
  subMenu?: any
}

export interface MenuProps extends BoxProps {
  width: number
  closedSize?: number
  closed?: boolean
}
