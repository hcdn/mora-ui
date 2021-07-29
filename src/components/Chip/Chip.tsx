import styled from 'styled-components'
import { Box, transformBoxProps } from '../Box/Box'
import {
  ButtonFilledCss,
  ButtonOutlineCss,
  ButtonTextCss
} from '../Button/ButtonStyles'
import { ChipProps, ChipWrapperProps } from './ChipTypes'

export const Chip = styled(Box).attrs<ChipProps, ChipWrapperProps>((props) => {
  const boxProps = transformBoxProps(props)
  return {
    as: 'span',
    flex: true,
    align: 'center',
    justify: 'center',
    space: 2,
    py: 2,
    px: 4,
    ...boxProps
  }
})<ChipProps>`
  display: inline-flex;
  ${({ variant }) => {
    /**
     * Selecciona la variable correspondiente
     */
    return {
      filled: ButtonFilledCss,
      outline: ButtonOutlineCss,
      text: ButtonTextCss
    }[variant || 'filled']
  }}
  ${({ disabled }) =>
    disabled &&
    `
      opacity:0.8;
      cursor:default;
      pointer-events: none;
    `}
`
Chip.defaultProps = {
  color: 'primary',
  variant: 'filled'
}
