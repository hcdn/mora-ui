import React, {
  Component,
  FunctionComponent,
  MouseEventHandler,
  useContext,
  useRef
} from 'react'
import { ThemeContext } from 'styled-components'
import { getMainColor, MainColorNameType } from '../../utils'
import { useRipple } from '../../utils/ripple/ripple'
import { transformBoxProps } from '../Box/Box'
import { BoxProps } from '../Box/BoxTypes'
import { Text } from '../Text/Text'
import { ButtonContainer, ButtonMain } from './ButtonStyles'
import { ButtonSize, ButtonVariant } from './ButtonTypes'

export interface ButtonProps extends BoxProps {
  label?: string | number | Component
  size?: ButtonSize
  variant?: ButtonVariant
  color?: MainColorNameType
  loading?: boolean
  fullWidth?: boolean
  grow?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit'
}

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  children,
  onClick,
  loading,
  disabled = false,
  fullWidth = false,
  grow = false,
  size = 'medium',
  variant = 'filled',
  color = 'primary',
  type = 'button',
  ...props
}) => {
  const theme = useContext(ThemeContext)
  const selectedColor = getMainColor(color, theme)

  const rippleColors: { [key in ButtonVariant]: string } = {
    filled: selectedColor.light,
    outline: selectedColor.main,
    text: selectedColor.main
  }
  const rippleColor = rippleColors[variant]

  const containerRef = useRef<any>()
  const [ClickEffect, rippleFromEvent /* _rippleFromPosition */] =
    useRipple(containerRef)

  const boxProps = transformBoxProps(props)

  return (
    <ButtonContainer
      ref={containerRef}
      onClick={rippleFromEvent}
      loading={loading}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      grow={grow}
      {...boxProps}
    >
      <ButtonMain
        size={size}
        color={color}
        variant={variant}
        disabled={disabled || loading}
        onClick={onClick}
        type={type}
      >
        <ClickEffect color={rippleColor} />
        {/* {loading && <ButtonLoading />} */}
        <Text variant='button'>
          {label}
          {children}
        </Text>
      </ButtonMain>
    </ButtonContainer>
  )
}
