import styled, { css } from 'styled-components'
import {
  cssGetMainColor,
  cssGetProp,
  cssGetSize,
  getMainColor
} from '../../utils'
import { Box } from '../Box/Box'
import { MenuItemProps } from './MenuTypes'

export const Icon = styled.span`
  min-width: ${cssGetSize(10)};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubMenu = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
`
export const Hidder = styled(Box).attrs({
  py: 4,
  flex: true,
  noWrap: true
})`
  overflow: hidden;
`

export const MenuItemStyle = css<MenuItemProps>`
  align-items: center;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  &:hover {
    background-color: ${cssGetMainColor('primary', 'light')};
  }

  ${({ selected, theme }) =>
    cssGetProp('color', selected && getMainColor('primary', theme).main)}

  background-color: ${({ selected }) =>
    selected ? cssGetMainColor('primary', 'light') : 'transparent'};

  ${({ selected }) =>
    selected &&
    css`
      &::after {
        content: '';
        display: block;
        top: 50%;
        height: 50%;
        transform: translateY(-50%);
        right: 0px;
        width: 3px;
        position: absolute;
        background-color: ${cssGetMainColor('primary', 'main')};
      }
    `}
`
