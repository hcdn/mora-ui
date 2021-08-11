import React from 'react'
import { BoxProps } from '../Box/BoxTypes'
import { CircleButtonProps } from '../CircleButton/CircleButtonTypesd'

export interface AccordionProps extends BoxProps {
  onChange?: (event: React.SyntheticEvent, isExpanded: boolean) => void
  expanded?: boolean
  unmountOnExit?: boolean
  title?: any
  headerOptions?: any
}

export interface AccHeaderProps extends BoxProps {
  expanded: boolean
  title?: any
  onToggle: (e: React.SyntheticEvent) => void
  headerOptions?: any
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
