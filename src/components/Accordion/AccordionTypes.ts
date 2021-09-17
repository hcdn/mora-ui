import React from 'react'
import { BoxProps } from '../Box/BoxTypes'

export interface AccordionStylesProps extends BoxProps {
  noBorder?: boolean
  noBorderTop?: boolean
  noBorderBottom?: boolean
  noBorderCaps?: boolean
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

export interface StyledAccHeaderProps extends BoxProps {
  noControl?: boolean
}

export interface AccHeaderProps extends StyledAccHeaderProps {
  expanded: boolean
  title?: any
  onToggle?: (e: React.SyntheticEvent) => void
  headerOptions?: any
}

export interface AccContentProps extends BoxProps {
  expanded: boolean
}

export interface StyledAccContentProps extends BoxProps {
  expanded: boolean
}
