export interface SizingType {
  scale: number
  unit: string
  getSize: (size: number | string, scale?: number, unit?: string) => string
}
