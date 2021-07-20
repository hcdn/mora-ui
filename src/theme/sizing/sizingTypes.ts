export interface SizingType {
  scale: number
  unit: string
  getSize: (size: number, scale?: number, unit?: string) => string
}
