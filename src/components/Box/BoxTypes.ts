import {
  SxInterface,
  InjectedCssInterface,
  MarignSpacerInterface,
  PaddingSpacerInterface,
  TextColorNamesType
} from '../../utils'
import { UseBackgroundInterface } from '../../utils/colors/getBackground'

export type ContainerSizeType = 'max' | 'xl' | 'l' | 'm' | 's'

export type containerMaxSizesInterface = {
  [key in ContainerSizeType]: number | string
}

export interface ContainerProps {
  size?: ContainerSizeType | number
  padding?: boolean
}

export interface BoxWrapperProps
  extends MarignSpacerInterface,
    PaddingSpacerInterface,
    SxInterface,
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
  containerSize?: ContainerSizeType | number
  textColor?: TextColorNamesType
}
export interface BoxProps
  extends MarignSpacerInterface,
    PaddingSpacerInterface,
    SxInterface,
    InjectedCssInterface,
    UseBackgroundInterface {
  // Flex direction
  direction?: 'row' | 'column'
  // Flex direction
  dir?: 'row' | 'column'
  // Space between child elements
  space?: number | string
  // Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.
  noWrap?: boolean
  // Flex grow
  grow?: boolean
  // Align items
  align?: string
  // Justify content
  justify?: string
  // Columns
  cols?: boolean | number
  // Size of n columns
  span?: number
  // Make the component flex
  flex?: boolean
  // Make the component a container
  container?: boolean
  // The size of the container
  containerSize?: ContainerSizeType | number
  className?: any
  as?: any
}
