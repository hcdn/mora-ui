import styled, { css } from 'styled-components'
import { Box } from '../Box/Box'
import { AccordionStylesProps, StyledAccContentProps } from './AccordionTypes'

export const StyledAccordion = styled(Box)<AccordionStylesProps>`
  position: relative;
  box-sizing: border-box;
  &:before,
  &:after {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.divider};
  }
  ${({ noBorder, noBorderTop }) =>
    !(noBorder || noBorderTop) &&
    css`
      &:before {
        top: 0;
        content: '';
      }
    `}
  ${({ noBorder, noBorderBottom }) =>
    !(noBorder || noBorderBottom) &&
    css`
      &:last-child:after {
        bottom: 0;
        content: '';
      }
    `}
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
