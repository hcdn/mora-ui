import React, { Component, FunctionComponent, MouseEventHandler } from 'react'

export interface ButtonProps {
  label?: string | number | Component
  variant?: 'filled' | 'outline'
  size?: 'large' | 'small'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  children,
  onClick,
  size = 'large',
  variant = 'filled'
}) => {
  return (
    <button onClick={onClick}>
      {label}
      {children}
      {variant}
      {size}
    </button>
  )
}

export default Button
