import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Text } from '../../components/Text/Text'
import { cssGetMainColor, cssGetSize, cssGetStepColor } from '../../utils'
import { MenuItemProps, MenuProps } from './MenuTypes'

export const MenuItem = styled(Box).attrs<MenuItemProps>(({ selected, icon, label, ...props}) => {
  const wChildren = (
    <>
      <div>{icon}</div>
      <Text >{label}</Text>
    </>
  );
  return { 
    space: 2,
    py: 4,
    px: 4,
    flex: true,
    fontSize: cssGetSize(3),
    children: wChildren,
    ...props,
  }
})<MenuItemProps>`
  align-items:center;
  color: ${({selected}) => cssGetStepColor(selected ? 'blue' : 'grey',"default")};
  background-color: ${({selected}) => selected ? cssGetMainColor('primary', 'light') : '' };
  font-weight: bold;
  position: relative;
  &:hover{
    background-color: ${cssGetMainColor('primary', 'light')};
    color: ${cssGetMainColor('primary', 'main')};
    &::after { 
      content:"";
      display:block;
      top:13px;
      bottom:13px;
      right: 0pX;
      width: 3px;
      position: absolute;
      background-color: ${cssGetMainColor('primary', 'main')};
    }
  }
`

export const Menu = styled(Box).attrs<MenuProps>(({ maxWidth, ...props}) => {
  return { 
    ...props,
  }
})<MenuProps>`
max-width: ${({maxWidth})=>cssGetSize(maxWidth)}


`