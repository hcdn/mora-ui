import styled, { css } from 'styled-components'
import { Box } from '../Box/Box'
import { StyledAccContentProps } from './AccordionTypes'

export const StyledAccordion = styled(Box)`
  position: relative;
  width: 100%;
  &:before,
  &:after {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.divider};
  }
  &:before {
    top: 0;
    content: '';
  }
  &:last-child:after {
    bottom: 0;
    content: '';
  }
`

export const StyledAccHeader = styled(Box)`
  cursor: pointer;
  position: relative;
`

export const StyledAccContent = styled(Box)<StyledAccContentProps>`
  ${({ expanded }) => css`
    visibility: ${expanded ? 'visible' : 'hidden'};
    height: ${expanded ? 'auto' : '0px'};
    overflow: hidden;
  `}
`
