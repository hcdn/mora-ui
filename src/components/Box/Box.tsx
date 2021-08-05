import styled, { css } from 'styled-components'
import { cssCreateStyles, cssGetProp, getSize } from '../../utils'
import { cssUseBackground } from '../../utils/colors/getBackground'
import { cssGetTextColor } from '../../utils/colors/getTextColor'
import { spacerMargin, spacerPadding } from '../../utils/spacer'
import {
  buildContainer,
  buildInnerSpace,
  flexBox,
  getColCount
} from './BoxStyles'
import { BoxProps, BoxWrapperProps } from './BoxTypes'

export const cssBox = css<BoxWrapperProps>`
  ${spacerMargin}
  ${spacerPadding}
  ${({ flex }) => flex && flexBox}
  ${({ align }) => cssGetProp('align-items', align)}
  ${({ justify }) => cssGetProp('justify-content', justify)}
  ${({ space, direction = 'row', theme }) =>
    space !== undefined &&
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
    grid-gap: ${getSize(theme.layout.colGap, theme)};
    & > * {
      min-width: 0;
    }
  `}
  ${({ span }) => !!span && `grid-column:span ${span};`}
  ${({ container, containerSize }) =>
    container && buildContainer({ size: containerSize || 'l', padding: true })}
  ${({ grow }) =>
    grow !== undefined &&
    `
      flex-grow: ${grow ? 1 : 0};
    `}
  ${cssGetTextColor}
  ${cssUseBackground}
  ${cssCreateStyles}
`

export const transformBoxProps = (props: BoxProps): BoxWrapperProps => {
  const colCount: number | boolean =
    (props.cols === true && props.span ? props.span : props.cols) || false
  const componentProps = {
    ...props,
    colCount
  }
  return componentProps
}

/** boxProps (no tiene col count) => transformBoxProps(boxProps) => boxWrapperProps (tiene col count) */

export const Box = styled.div.attrs<BoxProps, BoxWrapperProps>(
  transformBoxProps
)<BoxProps>`
  ${cssBox}
`
