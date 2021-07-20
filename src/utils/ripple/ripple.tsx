import React, { useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

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
export const ClickEffectContainer = styled.div<{ active: boolean }>`
  ${({ active }) =>
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
        background-color: white;
      }
    `}
`

const getElementPositions = (elmentRef: React.MutableRefObject<any>) => {
  return {
    left: elmentRef.current?.offsetLeft || 0,
    top: elmentRef.current?.offsetTop || 0,
    width: elmentRef.current?.offsetLeft || 0,
    height: elmentRef.current?.offsetHeight || 0
  }
}

type rippleFromEventType = (e: any) => void
type rippleFromPositionType = (x: number, y: number) => void

// Ripple hook for components
export const useRipple = (
  containerRef: React.MutableRefObject<any>
): [
  React.FC,
  React.RefObject<any>,
  rippleFromEventType,
  rippleFromPositionType
] => {
  const [effectPos, setEffectPos] = useState<
    { top: number; left: number; key: string } | false
  >(false)
  const rippleFromEvent = (e: any) => {
    const positions = getElementPositions(containerRef)
    const left = e.pageX - positions.left
    const top = e.pageY - positions.top
    const key = Math.random().toString()
    setEffectPos({ top, left, key })
  }
  // Create a ripple from a x=0-100% y=0-100% position
  const rippleFromPosition = (x: number = 50, y: number = 50) => {
    const positions = getElementPositions(containerRef)
    const left = ((positions.left + positions.width) / 100) * x
    const top = ((positions.top + positions.height) / 100) * y
    const key = Math.random().toString()
    setEffectPos({ top, left, key })
  }
  const ClickEffect = () => (
    <ClickEffectContainer
      style={{
        top: effectPos ? effectPos.top : 0,
        left: effectPos ? effectPos.left : 0
      }}
      key={effectPos ? effectPos.key : 0}
      active={!!effectPos}
    />
  )
  return [ClickEffect, containerRef, rippleFromEvent, rippleFromPosition]
}
