import styled, { css, keyframes } from 'styled-components'
import { ClickEffectContainerProps } from './rippleTypes'

const clickEffectAnimation = keyframes`
	0% {
		opacity: 0.2;
		width: 50%;
	}
	70% {
		opacity: 0;
	}
	100% {
		width: 100%;
		top: 50%;
		left: 50%;
	}
`

export const ClickEffectContainer = styled.div<ClickEffectContainerProps>`
  ${({ active, color }) =>
    active &&
    css`
      position: absolute;
      filter: blur(0.2rem);
      pointer-events: none;
      animation-fill-mode: forwards;
      opacity: 0;
      animation: ${clickEffectAnimation} 0.3s ease-out;
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
