import styled, { css } from 'styled-components'
import { cssGetSize } from '../../utils'
import { Box } from '../Box/Box'
import { ChipProps } from './ChipTypes'

export const FilledStyle = css<ChipProps>`
  ${({ color = 'primary', theme }) => {
    const chipColor = theme.palette.main[color]
    return `
			color: ${chipColor.contrastText};
			background-color: ${chipColor.main};
			&:hover {
        background-color: ${chipColor.dark};
			}
		`
  }}
`
export const OutlineStyle = css<ChipProps>`
  background-color: transparent;
  ${({ color = 'primary', theme }) => {
    const chipColor = theme.palette.main[color]
    return `
			color: ${chipColor.main};
			background-color: transparent;
      border: 1px solid ${chipColor.main};
		`
  }}
`

export const TextStyle = css<ChipProps>`
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0);
  ${({ color = 'primary', theme }) => {
    const chipColor = theme.palette.main[color]
    return `
			color: ${chipColor.main};
			background-color: transparent;
		`
  }}
`
const StyleVariants = {
  filled: FilledStyle,
  outline: OutlineStyle,
  text: TextStyle
}

export const Chip = styled(Box).attrs<ChipProps>(({variant, ...props}) => {
  return {
    as: 'span',
    flex: true,
    align: 'center',
    justify: 'center',
    space: 2,
    py: 1,
    px: 2,
    ...props,
  }
})<ChipProps>`
  display: inline-flex;
  font-weigth: bold;
  font-size: ${cssGetSize(3)};
  border-radius: ${cssGetSize(4)};
  ${({variant = 'filled'}) => StyleVariants[variant]}
`