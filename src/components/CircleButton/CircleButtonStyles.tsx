import { css, DefaultTheme, ThemedStyledProps } from 'styled-components'
import { getSize } from '../../utils'
import { CircleButtonWrapperProps } from './CircleButtonTypesd'

const getButtonFontSize = ({
  size,
  fontSize,
  theme
}: ThemedStyledProps<CircleButtonWrapperProps, DefaultTheme>) =>
  typeof fontSize !== 'undefined'
    ? getSize(fontSize, theme)
    : `calc(${getSize(size, theme)} / 2.5 )`

const ButtonBaseCss = css<CircleButtonWrapperProps>`
  appearance: none;
  color: inherit;
  font-size: ${getButtonFontSize};
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  ${({ theme }) => css`
    transition: background-color 0.2s ease, color 0.2s ease,
      ${theme.elevations.transition};
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

const CircleButtonFilled = css<CircleButtonWrapperProps>`
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
const CircleButtonOutline = css<CircleButtonWrapperProps>`
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
export const CircleButtonText = css<CircleButtonWrapperProps>`
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0);
  ${({ color, theme }) => {
    const buttonColor = theme.palette.main[color]
    return `
    color: var(--lightenTextColor);
    background-color: transparent;
    &:hover, &:focus-visible {
        opacity: 1;
        color: ${buttonColor.main};
        background-color: ${buttonColor.light};
			}
		`
  }}
`

export const CircleButtonStyles = css<CircleButtonWrapperProps>`
  ${ButtonBaseCss}
  ${({ variant = 'text' }) => {
    switch (variant) {
      case 'filled':
        return CircleButtonFilled
      case 'outline':
        return CircleButtonOutline
      case 'text':
        return CircleButtonText
    }
  }}
`
