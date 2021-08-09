import styled, { css, keyframes } from 'styled-components'
import { ClickEffectContainerProps } from './rippleTypes'

const clickEffectAnimation = (opacity: number = 0.3) => keyframes`
	0% {
		opacity: ${opacity};
		width: 50%;
	}
	70% {
  }
	100% {
    opacity: 0;
		width: 100%;
		top: 50%;
		left: 50%;
	}
`

export const ClickEffectContainer = styled.div<ClickEffectContainerProps>`
  ${({ active, color, opacity }) =>
    active &&
    css`
      position: absolute;
      pointer-events: none;
      animation-fill-mode: forwards;
      opacity: 0;
      /* width: 50%; */
      animation: ${clickEffectAnimation(opacity)} 0.2s ease-out;
      &:before {
        content: '';
        transform: translate(-100%, -50%);
        border-radius: 50%;
        position: absolute;
        width: 100%;
        padding-top: 100%;
        background-color: ${color};
      }
    `}
`
