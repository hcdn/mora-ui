import styled, { css } from 'styled-components'
import { cssGetMainColor, cssGetSize } from '../../../utils'
import { Box } from '../../Box/Box'
import { ClickArea } from '../../ClickArea/ClickArea'
import { CheckIconBoxProps } from './CheckboxTypes'

export const CheckboxContainer = styled(ClickArea).attrs({ as: 'label' })`
  input {
    position: absolute;
    visibility: hidden;
  }
`

/** Container for the default check Icon */
export const CheckIconBox = styled(Box).attrs({
  p: 0,
  flex: true,
  align: 'center',
  justify: 'center'
})<CheckIconBoxProps>`
  border-radius: ${cssGetSize(1)};
  border: solid 2px var(--lightenTextColor);
  width: ${cssGetSize(4)};
  height: ${cssGetSize(4)};
  transition: background-color 0.2s ease, border-color 0.2s ease;
  svg {
    position: absolute;
    width: ${cssGetSize(3)};
    fill: ${cssGetMainColor('primary', 'contrastText')};
  }
  ${({ checked }) =>
    checked &&
    css`
      border-color: ${cssGetMainColor('primary')};
      background-color: ${cssGetMainColor('primary')};
    `}
`
