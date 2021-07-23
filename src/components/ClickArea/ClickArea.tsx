import styled from 'styled-components'
import { cssGetMainColor, cssGetSize } from '../../utils'
import { Box } from '../Box/Box'

export const ClickArea = styled(Box)`
  background-color: transparent;
  border-radius: ${cssGetSize(1)};
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: ${cssGetMainColor('primary', 'light')};
  }
`

ClickArea.defaultProps = {
  p: 2
}
