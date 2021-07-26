import styled, { css } from 'styled-components'
import { cssGetSize, MainColorNameType } from '../../utils'
import { ButtonSize, ButtonVariant } from './ButtonTypes'

interface ButtonContainerInteface {
  loading?: Boolean
  disabled?: Boolean
  fullWidth?: Boolean
  grow?: Boolean
}

export const ButtonContainer = styled.div<ButtonContainerInteface>`
  display: inline-flex;
  position: relative;
  ${({ grow }) => grow && 'flex-grow: 1;'}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
	${({ loading }) => loading && 'cursor:progress;'}
	${({ disabled }) => disabled && 'pointer-events:none;'}
`

/**
 * MAIN BUTTON CSS
 */

export interface ButtonMainInterface {
  disabled?: boolean
  color: MainColorNameType
  variant: ButtonVariant
  size: ButtonSize
}

const cssGetButtonPadding = css<ButtonMainInterface>`
  ${({ size }) => {
    switch (size) {
      case 'medium':
        return css`
          padding: ${cssGetSize(3)} ${cssGetSize(4)};
          border-radius: ${cssGetSize(3)};
        `
      case 'small':
        return css`
          padding: ${cssGetSize(1.5)} ${cssGetSize(2)};
          border-radius: ${cssGetSize(1.5)};
        `
    }
  }}
`

const ButtonBaseCss = css<ButtonMainInterface>`
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  ${cssGetButtonPadding}
  ${({ theme }) => css`
    transition: background-color 0.2s ease, ${theme.elevations.transition};
    font-family: ${theme.font.family.sans};
    font-weight: ${theme.font.weight.bold};
  `}
  border: none;
  position: relative;
  user-select: none;
  &:focus {
    outline: none;
  }
`

export const ButtonMain = styled.button<ButtonMainInterface>`
  width: 100%;
  ${({ variant }) => {
    /**
     * Selecciona la variable correspondiente
     */
    return {
      filled: ButtonFilledCss,
      outline: ButtonOutlineCss,
      text: ButtonTextCss
    }[variant]
  }}
  ${({ disabled }) =>
    disabled &&
    `
      opacity:0.8;
      cursor:default;
      pointer-events: none;
    `}
`

const ButtonFilledCss = css<ButtonMainInterface>`
  ${ButtonBaseCss}
  ${({ color, theme }) => {
    const buttonColor = theme.palette.main[color]
    return `
			color: ${buttonColor.contrastText};
			background-color: ${buttonColor.main};
			box-shadow: ${theme.elevations.z[0]};
			&:hover {
        background-color: ${buttonColor.dark};
				box-shadow: ${theme.elevations.z[1]};
			}
      &:focus-visible {
        background-color: ${buttonColor.dark};
				box-shadow: ${theme.elevations.z[2]};
			}
		`
  }}
`
const ButtonOutlineCss = css<ButtonMainInterface>`
  ${ButtonBaseCss}
  background-color: transparent;
  ${({ color, theme }) => {
    const buttonColor = theme.palette.main[color]
    return `
			color: ${buttonColor.main};
			background-color: transparent;
			box-shadow: 0 0 0 1px ${buttonColor.main} inset;
      &:hover, &:focus-visible {
        background-color: ${buttonColor.light};
			}
		`
  }}
`

const ButtonTextCss = css<ButtonMainInterface>`
  ${ButtonBaseCss}
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0);
  ${({ color, theme }) => {
    const buttonColor = theme.palette.main[color]
    return `
			color: ${buttonColor.main};
			background-color: transparent;
      &:hover, &:focus-visible {
        background-color: ${buttonColor.light};
			}
		`
  }}
`
