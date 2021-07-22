export interface ClickEffectContainerProps {
  active: boolean
  color: string
  opacity?: number
}

export type rippleFromEventType = (e: any) => void
export type rippleFromPositionType = (x: number, y: number) => void

export interface ClickEffectProps {
  color: string
  opacity?: number
}
