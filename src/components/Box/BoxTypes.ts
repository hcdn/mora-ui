import {
  CssStylesInterface,
  MarignSpacerInterface,
  PaddingSpacerInterface
} from '../../utils'
import { UseBackgroundInterface } from '../../utils/colors/getBackground'

export interface ContainerProps {
  size?: 'l' | 'm' | 's' | number
  padding?: boolean
}

export interface BoxWrapperProps
  extends MarignSpacerInterface,
    PaddingSpacerInterface,
    CssStylesInterface,
    UseBackgroundInterface {
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
    PaddingSpacerInterface,
    CssStylesInterface,
    UseBackgroundInterface {
  direction?: 'row' | 'column'
  dir?: 'row' | 'column'
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
