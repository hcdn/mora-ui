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
import { ButtonContainer, ButtonMain } from './ButtonStyles'
import { ButtonSize, ButtonVariant } from './ButtonTypes'

export interface ButtonProps {
  label?: string | number | Component
  size?: ButtonSize
  variant?: ButtonVariant
  color: MainColorNameType
  loading?: boolean
  fullWidth?: boolean
  grow?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled: boolean
  type?: 'button' | 'reset' | 'submit'
}

const Button: FunctionComponent<ButtonProps> = ({
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
  type = 'button'
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
  const [ClickEffect, _rippleFromEvent, rippleFromPosition] =
    useRipple(containerRef)

  return (
    <ButtonContainer
      ref={containerRef}
      onClick={() => rippleFromPosition(50, 50)}
      loading={loading}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      grow={grow}
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
        {label}
        {children}
      </ButtonMain>
    </ButtonContainer>
  )
}

export default Button
