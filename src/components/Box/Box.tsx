import styled from 'styled-components'
import { cssCreateStyles, cssGetProp, getSize } from '../../utils'
import { cssUseBackground } from '../../utils/colors/getBackground'
import { spacerMargin, spacerPadding } from '../../utils/spacer'
import {
  buildContainer,
  buildInnerSpace,
  flexBox,
  getColCount
} from './BoxStyles'
import { BoxProps, BoxWrapperProps } from './BoxTypes'

export const Box = styled.div.attrs<BoxProps, BoxWrapperProps>((props) => {
  const colCount: number | boolean =
    (props.cols === true && props.span ? props.span : props.cols) || false
  const componentProps = {
    ...props,
    colCount
  }
  return componentProps
})<BoxProps>`
  ${spacerMargin}
  ${spacerPadding}
${({ flex }) => flex && flexBox}
${({ align }) => cssGetProp('align-items', align)}
${({ justify }) => cssGetProp('justify-content', justify)}
${({ space, direction = 'row', theme }) =>
    space &&
    `
    & > *:not(:last-child) {
      ${buildInnerSpace(getSize(space, theme), direction)}
    }
  `}
${({ colCount, theme }) =>
    colCount &&
    `
  display: grid;
  grid-template-columns: repeat(${getColCount(colCount, theme)}, 1fr);
  grid-gap: ${theme.layout.colGap + 'rem'};
`}
${({ span }) => !!span && `grid-column:span ${span};`}
${({ container, containerSize }) =>
    container && buildContainer({ size: containerSize || 'l', padding: true })}
${({ grow }) =>
    grow !== undefined &&
    `
    flex-grow: ${grow ? 1 : 0};
  `}
${cssUseBackground}
${cssCreateStyles}
`
