import { CSSProperties } from 'react'
import {
  CssStylesInterface,
  MarignSpacerInterface,
  PaddingSpacerInterface
} from '../../utils'

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

export type TypographyLevelsInterface = {
  [level in TypographyVariantsLevels]: {
    component: keyof JSX.IntrinsicElements
    css: CSSProperties
  }
}

export interface TypographyVariants extends TypographyLevelsInterface {
  commons: CSSProperties
}

export interface TextProps
  extends MarignSpacerInterface,
    PaddingSpacerInterface,
    CssStylesInterface {
  // Alignment of the text
  align?: CSSProperties['textAlign']
  // Used to set the style of the text
  variant?: TypographyVariantsLevels
  // Change the rendered tag
  component?: keyof JSX.IntrinsicElements
}

export interface TextStylesProps extends CssStylesInterface {
  align?: CSSProperties['textAlign']
}
