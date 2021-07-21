export interface ClickEffectContainerProps {
  active: boolean
  color: string
}

export type rippleFromEventType = (e: any) => void
export type rippleFromPositionType = (x: number, y: number) => void

export interface ClickEffectProps {
  color: string
}
