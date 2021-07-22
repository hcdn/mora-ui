import {
  MarignSpacerInterface,
  PaddingSpacerInterface
} from '../../utils/spacer'

export interface ContainerProps {
  size?: 'l' | 'm' | 's' | number
  padding?: boolean
}

export interface BoxWrapperProps
  extends MarignSpacerInterface,
    PaddingSpacerInterface {
  space?: number | string
  direction?: 'row' | 'column'
  noWrap?: boolean
  grow?: boolean
  align?: string
  justify?: string
  colCount: number | boolean
  span?: number
  flex?: boolean
  container?: boolean
  containerSize?: 'l' | 'm' | 's' | number
}
export interface BoxProps
  extends MarignSpacerInterface,
    PaddingSpacerInterface {
  direction?: string
  dir?: string
  space?: number | string
  children?: any
  noWrap?: boolean
  grow?: boolean
  align?: string
  justify?: string
  cols?: boolean | number
  span?: number
  className?: any
  as?: any
  flex?: boolean
  container?: boolean
  containerSize?: 'l' | 'm' | 's' | number
}
