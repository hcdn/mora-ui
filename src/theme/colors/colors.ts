import {
  MainColorType,
  MainColorCreatorType,
  StepColorType
} from './colorsTypes'

import chroma, { Color, Scale } from 'chroma-js'

export const createMainColor = (color: MainColorCreatorType): MainColorType => {
  return {
    main: color.main,
    light: color.light ?? 'default',
    dark: color.dark ?? 'default',
    contrastText: color.contrastText ?? 'default'
  }
}

const generateChromaGradient = (color: string): Scale<Color> => {
  const realColorLuminance = chroma(color).luminance() * 10
  // Round color position
  const roundedColorLuminance = Math.round(realColorLuminance)
  // console.log({ realColorLuminance })
  // console.log({ roundedColorLuminance })

  return chroma
    .scale(['white', color, 'black'])
    .domain([1, roundedColorLuminance, 10])
}

export const createRangeColor = (color: string): StepColorType => {
  const gradient = generateChromaGradient(color)
  // const colors = gradient.classes(11)
  const colors = gradient.colors(13)
  return {
    0: colors[1],
    1: colors[2],
    2: colors[3],
    3: colors[4],
    4: colors[5],
    5: colors[6],
    6: colors[7],
    7: colors[8],
    8: colors[9],
    9: colors[10],
    10: colors[11]
  }
}
