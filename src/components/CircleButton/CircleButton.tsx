import React, { useContext, useRef, FC } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { getMainColor, propSelector, useRipple } from '../../utils'
import { Circle } from '../Circle/Circle'
import { CircleButtonStyles } from './CircleButtonStyles'
import {
  CircleButtonProps,
  CircleButtonWrapperProps
} from './CircleButtonTypesd'

type CircleButtonPropsType = React.Component<CircleButtonProps>['props']
type CircleButtonPropsWrapperType =
  React.Component<CircleButtonWrapperProps>['props']

const CircleButtonAttrs = ({
  variant = 'text',
  color = 'primary',
  size = 'medium',
  ...props
}: CircleButtonPropsType): CircleButtonPropsWrapperType => {
  const transformedSize: number | string = propSelector(
    {
      large: 16,
      medium: 10,
      small: 8
    },
    size,
    'medium'
  )

  return {
    variant,
    color,
    size: transformedSize,
    as: 'button',
    p: 0,
    ...props
  }
}

export const CircleButtonWrapper = styled(Circle).attrs<
  CircleButtonProps,
  CircleButtonPropsWrapperType
>(CircleButtonAttrs)<CircleButtonProps>`
  ${CircleButtonStyles}
`
export const CircleButton: FC<CircleButtonProps> = ({
  onClick,
  children,
  variant = 'text',
  color = 'primary',
  size = 'medium',
  ...props
}) => {
  const theme = useContext(ThemeContext)
  const selectedColor = getMainColor(color, theme)

  const rippleColors: { [key in CircleButtonWrapperProps['variant']]: string } =
    {
      filled: selectedColor.light,
      outline: selectedColor.main,
      text: selectedColor.main
    }
  const rippleColor = rippleColors[variant]

  const containerRef = useRef<any>()
  const [ClickEffect, rippleFromEvent] = useRipple(containerRef)

  const handleOnClick = (e: any) => {
    rippleFromEvent(e)
    // rippleFromPosition(50, 50)
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <CircleButtonWrapper
      size={size}
      color={color}
      variant={variant}
      onClick={handleOnClick}
      ref={containerRef}
      directChildren={<ClickEffect color={rippleColor} />}
      {...props}
    >
      {children}
    </CircleButtonWrapper>
  )
}
