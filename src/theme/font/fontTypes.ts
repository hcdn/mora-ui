export type FontFamilyType = 'sans' | 'serif' | 'mono'
export type FontWeightType =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

export type FontType = {
  family: {
    [key in FontFamilyType]: string
  }
  weight: {
    [key in FontWeightType]: string
  }
}
