import React from 'react'
import { BoxProps } from '../Box/BoxTypes'
import { CircleButtonProps } from '../CircleButton/CircleButtonTypesd'

export interface AccordionStylesProps extends BoxProps {
  noBorder?: boolean
  noBorderTop?: boolean
  noBorderBottom?: boolean
}

export interface AccordionProps extends AccordionStylesProps {
  onChange?: (event: React.SyntheticEvent, isExpanded: boolean) => void
  expanded?: boolean
  unmountOnExit?: boolean
  title?: any
  headerOptions?: any
  noControl?: boolean
  defaultExpanded?: boolean
}

export interface AccHeaderProps extends BoxProps {
  expanded: boolean
  title?: any
  onToggle: (e: React.SyntheticEvent) => void
  headerOptions?: any
  noControl?: boolean
}

export interface ExpandButtonProps extends CircleButtonProps {
  expanded: boolean
}

export interface AccContentProps extends BoxProps {
  expanded: boolean
}

export interface StyledAccContentProps extends BoxProps {
  expanded: boolean
}
