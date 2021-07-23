import React from 'react'
import styled from 'styled-components'
import { cssGetSize } from '../../utils'
import { Box } from '../Box/Box'
import { BoxProps } from '../Box/BoxTypes'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export interface CircleProps extends BoxProps {
  size?: number | string
}

export const Circle = styled(Box).attrs(({ children, ...props }) => {
  const wChildren = <Wrapper>{children}</Wrapper>
  return { ...props, children: wChildren }
})<CircleProps>`
  border-radius: 50%;
  position: relative;
  width: ${({ size }) => cssGetSize(size ?? 10)};
  &:after {
    display: block;
    content: '';
    pointer-events: none;
    position: relative;
    width: 100%;
    padding-top: 100%;
  }
`
Circle.defaultProps = {
  size: 10
}
