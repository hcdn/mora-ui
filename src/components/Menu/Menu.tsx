import React, { FC } from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Text } from '../../components/Text/Text'
import { cssGetSize } from '../../utils'
import { MenuItemProps, MenuProps } from './MenuTypes'
import { Hidder, Icon, MenuItemStyle, SubMenu } from './MenuStyles'

export type MenuAttrsProps = FC<MenuItemProps>['arguments']

const MenuAttrs = ({
  subMenu,
  selected,
  icon,
  label,
  ...props
}: MenuAttrsProps): MenuAttrsProps => {
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

export const MenuItem = styled(Box).attrs<MenuItemProps>(
  MenuAttrs
)<MenuItemProps>`
  ${MenuItemStyle}
`

export const Menu = styled(Box)<MenuProps>`
  width: ${({ width = 50, closed = false, closedSize = 12 }) =>
    cssGetSize(closed ? closedSize : width)};
  transition: width 0.2s ease;
`
