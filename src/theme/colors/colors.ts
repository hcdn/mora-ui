import {
  MainColorType,
  MainColorCreatorType,
  StepColorType,
  TextColorsType
} from './colorsTypes'

import chroma, { Color, Scale } from 'chroma-js'

export const createMainColor = (
  color: MainColorCreatorType,
  lightText?: TextColorsType,
  darkText?: TextColorsType
): MainColorType => {
  const mainColor = chroma(color.main)
  return {
    main: color.main,
    light: color.light ?? mainColor.mix('white', 0.9, 'lch').hex(),
    dark: color.dark ?? mainColor.darken(0.5).hex(),
    contrastText:
      color.contrastText ??
      getContrastText(color.main, lightText, darkText).primary
  }
}

// Used to generate the theme

const getContrastText = (
  color: string,
  lightText?: TextColorsType,
  darkText?: TextColorsType
): TextColorsType => {
  if (!lightText || !darkText) {
    throw new Error('You need to specify default text colors.')
  }
  return chroma(color).luminance() > 0.5 ? darkText : lightText
}

const generateChromaGradient = (color: string): Scale<Color> => {
  const realColorLuminance = chroma(color).luminance() * 10
  // Round color position
  const roundedColorLuminance = Math.round(realColorLuminance)

  return chroma
    .scale(['white', color, 'black'])
    .domain([0, roundedColorLuminance, 10])
}

export const createRangeColor = (color: string): StepColorType => {
  const gradient = generateChromaGradient(color)
  // const colors = gradient
  return {
    default: color,
    0.5: gradient(0.5).hex(),
    1: gradient(1).hex(),
    2: gradient(2).hex(),
    3: gradient(3).hex(),
    4: gradient(4).hex(),
    5: gradient(5).hex(),
    6: gradient(6).hex(),
    7: gradient(7).hex(),
    8: gradient(8).hex(),
    9: gradient(9).hex()
  }
}
