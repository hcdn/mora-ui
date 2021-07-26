import { css, DefaultTheme } from 'styled-components'
import { cssGetSize } from '../../utils'
import {
  BoxWrapperProps,
  containerMaxSizesInterface,
  ContainerProps
} from './BoxTypes'

/**
 * Sizes for containers in rems
 */
const maxSizes: containerMaxSizesInterface = {
  max: '100%',
  xl: 250,
  l: 200,
  m: 150,
  s: 100
}

const getContainerMaxWidth = (size?: ContainerProps['size']): number | string =>
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

export const buildInnerSpace = (space: string, direction: string) => {
  switch (direction) {
    case 'row':
      return `margin-right: ${space};`
    case 'column':
      return `margin-bottom: ${space};`
    default:
      return `margin-right: ${space};`
  }
}

export const flexBox = css<BoxWrapperProps>`
  display: flex;
  flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
  flex-direction: ${(props) => props.direction || 'row'};
`
export const getColCount = (colCount: number | boolean, theme: DefaultTheme) =>
  (colCount !== true && colCount) || theme.layout.colCount
