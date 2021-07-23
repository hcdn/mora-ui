import styled, { css, DefaultTheme } from 'styled-components'
import { cssCreateStyles, cssGetSize } from '../../utils'
import { spacerMargin, spacerPadding } from '../../utils/spacer'
import { BoxWrapperProps, ContainerProps } from './BoxTypes'
/**
 * Sizes for containers in rems
 */
const maxSizes = {
  l: 150,
  m: 100,
  s: 70
}

const getContainerMaxWidth = (size?: ContainerProps['size']): number =>
  typeof size === 'number' ? size : maxSizes[size ?? 'l']

export const buildContainer = ({ size, padding }: ContainerProps) => css`
  max-width: ${cssGetSize(getContainerMaxWidth(size))};
  ${padding &&
  css`
    padding-left: ${({ theme }) => theme.layout.colGap}rem;
    padding-right: ${({ theme }) => theme.layout.colGap}rem;
  `}
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
`

const buildInnerSpace = (space: any, direction: string) => {
  switch (direction) {
    case 'row':
      return `margin-right: ${space}rem;`
    case 'column':
      return `margin-bottom: ${space}rem;`
    default:
      return `margin-right: ${space}rem;`
  }
}

const addProp = (propName: string, value: any) =>
  value &&
  `
	${propName}: ${value};
`

const flexBox = css<BoxWrapperProps>`
  display: flex;
  flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
  flex-direction: ${(props) => props.direction || 'row'};
`
const getColCount = (colCount: number | boolean, theme: DefaultTheme) =>
  (colCount !== true && colCount) || theme.layout.colCount

export const BoxWrapper = styled.div<BoxWrapperProps>`
  ${spacerMargin}
  ${spacerPadding}
	${({ flex }) => flex && flexBox}
	${({ align }) => addProp('align-items', align)}
	${({ justify }) => addProp('justify-content', justify)}
	${({ space, direction = 'row' }) =>
    space &&
    `
		& > *:not(:last-child) {
			${buildInnerSpace(space, direction)}
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
  ${cssCreateStyles}
`
