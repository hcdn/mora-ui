import React, { useState } from 'react'
import { ClickEffectContainer } from './rippleStyles'
import {
  ClickEffectProps,
  rippleFromEventType,
  rippleFromPositionType
} from './rippleTypes'

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
    { top: number | string; left: number | string; key: string } | false
  >(false)
  const expireKey = (key: string) => {
    setTimeout(() => {
      setEffectPos((currentEffectPos) => {
        if (currentEffectPos && currentEffectPos.key === key) {
          return false
        } else {
          return currentEffectPos
        }
      })
    }, 200)
  }
  const getRandomId = (): string =>
    Math.round(Math.random() * 100 + 1).toString()
  /**
   * Create a ripple from a click event.
   */
  const rippleFromEvent: rippleFromEventType = (e: any) => {
    const positions = containerRef.current.getBoundingClientRect()
    const left = e.clientX - positions.left
    const top = e.clientY - positions.top
    const key = getRandomId()
    setEffectPos({ top, left, key })
    expireKey(key)
  }
  /**
   * Create a ripple from a x=0-100% y=0-100% position.
   */
  const rippleFromPosition: rippleFromPositionType = (
    x: number = 50,
    y: number = 50
  ) => {
    const left = `${x}%`
    const top = `${y}%`
    const key = getRandomId()
    setEffectPos({ top, left, key })
    expireKey(key)
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
