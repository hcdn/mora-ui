export interface SpacingType {
  scale: number
  unit: string
  getSpace: (size: number, scale?: number, unit?: string) => string
}
