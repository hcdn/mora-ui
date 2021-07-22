import React, { useState } from 'react'
import { ClickEffectContainer } from './rippleStyles'
import {
  ClickEffectProps,
  rippleFromEventType,
  rippleFromPositionType
} from './rippleTypes'

const getElementPositions = (elmentRef: React.MutableRefObject<any>) => {
  return {
    left: elmentRef.current?.offsetLeft || 0,
    top: elmentRef.current?.offsetTop || 0,
    width: elmentRef.current?.offsetLeft || 0,
    height: elmentRef.current?.offsetHeight || 0
  }
}

/**
 * Ripple effect hook for components.
 */
export const useRipple = (
  containerRef: React.MutableRefObject<any>
): [
  React.FC<ClickEffectProps>,
  rippleFromEventType,
  rippleFromPositionType
] => {
  const [effectPos, setEffectPos] = useState<
    { top: number; left: number; key: string } | false
  >(false)
  /**
   * Create a ripple from a click event.
   */
  const rippleFromEvent = (e: any) => {
    const positions = getElementPositions(containerRef)
    const left = e.pageX - positions.left
    const top = e.pageY - positions.top
    const key = Math.random().toString()
    setEffectPos({ top, left, key })
  }
  /**
   * Create a ripple from a x=0-100% y=0-100% position.
   */
  const rippleFromPosition = (x: number = 50, y: number = 50) => {
    const positions = getElementPositions(containerRef)
    const left = ((positions.left + positions.width) / 100) * x
    const top = ((positions.top + positions.height) / 100) * y
    const key = Math.random().toString()
    setEffectPos({ top, left, key })
  }
  /**
   * Component controlled by hook, renders the ripple.
   */
  const ClickEffect: React.FC<ClickEffectProps> = ({
    color = 'white',
    opacity
  }) => (
    <ClickEffectContainer
      style={{
        top: effectPos ? effectPos.top : 0,
        left: effectPos ? effectPos.left : 0
      }}
      key={effectPos ? effectPos.key : 0}
      active={!!effectPos}
      color={color}
      opacity={opacity}
    />
  )
  return [ClickEffect, rippleFromEvent, rippleFromPosition]
}
