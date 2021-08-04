import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '../Box/Box'
import { Text } from '../../components/Text/Text'
import { cssGetMainColor, cssGetSize, cssGetStepColor } from '../../utils'
import { MenuItemProps, MenuProps } from './MenuTypes'

const Icon = styled.span`
  min-width: ${cssGetSize(12)};
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubMenu = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
`
const Hidder = styled(Box).attrs({
  space: 3,
  py: 4,
  flex: true,
  noWrap: true,
  fontSize: cssGetSize(3)
})`
  overflow: hidden;
`

export const MenuItem = styled(Box).attrs<MenuItemProps>(
  ({ subMenu, selected, icon, label, ...props }) => {
    const wChildren = (
      <>
        <Hidder>
          {icon && <Icon>{icon}</Icon>}
          <Text pl={2}>{label}</Text>
        </Hidder>
        {subMenu && selected && <SubMenu>{subMenu}</SubMenu>}
      </>
    )
    return {
      children: wChildren,
      ...props
    }
  }
)<MenuItemProps>`
  align-items: center;
  font-weight: bold;
  position: relative;
  &:hover {
    background-color: ${cssGetMainColor('primary', 'light')};
  }
  color: ${({ selected }) =>
    cssGetStepColor(selected ? 'blue' : 'grey', 'default')};
  background-color: ${({ selected }) =>
    selected ? cssGetMainColor('primary', 'light') : ''};
  ${({ selected }) => {
    return (
      selected &&
      css`
        &::after {
          content: '';
          display: block;
          top: 13px;
          bottom: 13px;
          right: 0px;
          width: 3px;
          position: absolute;
          background-color: ${cssGetMainColor('primary', 'main')};
        }
      `
    )
  }}
`

export const Menu = styled(Box)<MenuProps>`
  width: ${({ width = 50, closed = false, closedSize = 12 }) =>
    cssGetSize(closed ? closedSize : width)};
  transition: width 0.5s;
`
