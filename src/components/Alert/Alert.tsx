import React from 'react'
import styled, { css } from 'styled-components'
import { cssGetSize } from '../../utils'
import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { AlertProps } from './AlertTypes'

export const Alert = styled(Box).attrs<AlertProps>(
  ({ icon, title, children, text, ...props }) => {
    const wChildren = (
      <React.Fragment>
        {icon && <Box className='__icon'>{icon}</Box>}
        <Box flex direction='column' space={0}>
          {title && (
            <Text variant='subtitle1' m={0}>
              {title}
            </Text>
          )}
          {text && (
            <Text variant='body2' className='__text'>
              {text}
            </Text>
          )}
          {children && <Box className='__children'>{children}</Box>}
        </Box>
      </React.Fragment>
    )
    return {
      space: 4,
      py: 4,
      px: 6,
      direction: 'row',
      flex: true,
      align: 'center',
      jusitify: 'left',
      ...props,
      children: wChildren
    }
  }
)<AlertProps>`
  border-radius: ${cssGetSize(3)};
  ${({ color = 'primary', iconSize = 7, theme }) => {
    const chipColor = theme.palette.main[color]
    return css`
      h6,
      .__icon,
      .__children {
        color: ${chipColor.main};
      }
      .__icon {
        font-size: ${cssGetSize(iconSize)};
      }
      background-color: ${chipColor.light};
      border: 1px solid ${chipColor.main};
    `
  }}
`
