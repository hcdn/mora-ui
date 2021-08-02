import styled from 'styled-components'
import { cssGetSize } from '../../utils'
import { Box } from '../Box/Box'
import { AlertProps } from './AlertTypes'

export const Alert = styled(Box).attrs<AlertProps>(({color, ...props}) => {
  return {
    space: 2,
    py: 2,
    px: 4,
    ...props,
  }
})<AlertProps>`
  border-radius: ${cssGetSize(3)};
  ${({ color = 'primary', theme }) => {
    const chipColor = theme.palette.main[color]
    return `
			color: ${chipColor.main};
			background-color: ${chipColor.light};
      border: 1px solid ${chipColor.main};
		`
  }}
`