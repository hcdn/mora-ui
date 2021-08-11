import React, { useState } from 'react'
import styled from 'styled-components'

import { Box } from '../Box/Box'
import { CircleButton } from '../CircleButton/CircleButton'
import { Text } from '../Text/Text'
import {
  StyledAccContent,
  StyledAccHeader,
  StyledAccordion
} from './AccordionStyles'
import {
  AccContentProps,
  AccHeaderProps,
  AccordionProps,
  ExpandButtonProps
} from './AccordionTypes'

export const Accordion: React.FC<AccordionProps> = ({
  onChange,
  expanded,
  unmountOnExit = false,
  children,
  title,
  px = 4,
  headerOptions,
  ...props
}) => {
  const controlled = typeof expanded !== 'undefined'
  const [isExpanded, setIsExpanded] = useState<boolean>(
    typeof expanded !== 'undefined' ? expanded : false
  )

  const handleChange = (e: React.SyntheticEvent) => {
    if (controlled) {
      // Controlled component
      if (typeof onChange === 'function') {
        onChange(e, !expanded)
      }
    } else {
      // No controlled component
      setIsExpanded(!isExpanded)
    }
  }

  const accordionExpanded: boolean =
    typeof expanded !== 'undefined' ? expanded : isExpanded

  const componentChildren =
    !accordionExpanded && unmountOnExit ? undefined : children

  return (
    <StyledAccordion {...props} px={px}>
      <AccHeader
        onToggle={handleChange}
        expanded={accordionExpanded}
        title={title}
        headerOptions={headerOptions}
        py={2}
      />
      <AccContent expanded={accordionExpanded}>{componentChildren}</AccContent>
    </StyledAccordion>
  )
}

const ExpandButton = styled(CircleButton)<ExpandButtonProps>`
  transform: rotate(${({ expanded }) => (expanded ? 180 : 0)}deg);
  transition: transform 0.2s ease;
`

const AccHeader: React.FC<AccHeaderProps> = ({
  title,
  expanded,
  onToggle,
  headerOptions,
  children,
  ...props
}) => {
  const hasHeaderOptions = typeof headerOptions !== 'undefined'
  return (
    <StyledAccHeader
      onClick={!hasHeaderOptions ? onToggle : undefined}
      flex
      align='center'
      justify='space-between'
      space={4}
      {...props}
    >
      {children}
      {title && (
        <Text cssStyles={{ userSelect: 'none' }} mb={0} variant='h6'>
          {title}
        </Text>
      )}
      <Box flex align='center'>
        <ExpandButton expanded={expanded}>ᐯ</ExpandButton>
      </Box>
    </StyledAccHeader>
  )
}

const AccContent: React.FC<AccContentProps> = ({
  expanded,
  children,
  ...props
}) => {
  return (
    <StyledAccContent expanded={expanded} {...props}>
      <Box pb={4}>{children}</Box>
    </StyledAccContent>
  )
}
