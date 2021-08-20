import { CSSProperties } from 'react'
import { SxInterface, TextColorNamesType } from '../../utils'
import { BoxProps } from '../Box/BoxTypes'

export type TypographyVariantsLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'label'
  | 'button'

export type TypographyLevelsInterface = {
  [level in TypographyVariantsLevels]: {
    component: keyof JSX.IntrinsicElements
    css: CSSProperties
    props?: Partial<TextProps>
  }
}

export interface TypographyVariants extends TypographyLevelsInterface {
  commons: CSSProperties
}

export interface TextProps extends BoxProps {
  // Alignment of the text
  align?: CSSProperties['textAlign']
  // Used to set the style of the text
  variant?: TypographyVariantsLevels
  // Change the rendered tag
  component?: keyof JSX.IntrinsicElements
  color?: TextColorNamesType
}

export interface TextStylesProps extends SxInterface {
  align?: CSSProperties['textAlign']
}
