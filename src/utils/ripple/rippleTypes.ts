export interface ClickEffectContainerProps {
  active: boolean
  color: string
  opacity?: number
}
/**
 * Create a ripple effect from click event
 */
export type rippleFromEventType = (e: any) => void
/**
 * Create a ripple effect from relative positions
 */
export type rippleFromPositionType = (x: number, y: number) => void

export interface ClickEffectProps {
  color: string
  opacity?: number
}
