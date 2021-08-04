import { BoxProps } from '../Box/BoxTypes'

export interface MenuItemProps extends BoxProps {
  label: string
  icon?: any
  selected?: boolean
}

export interface MenuProps extends BoxProps {
  width: number
  closedSize?: number
  closed?: boolean
}
