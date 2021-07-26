import { DefaultTheme } from 'styled-components'

export type SpaceUnit = number | string | 'auto'

export interface MarignSpacerInterface {
  ml?: SpaceUnit
  mr?: SpaceUnit
  mt?: SpaceUnit
  mb?: SpaceUnit
  mx?: SpaceUnit
  my?: SpaceUnit
  m?: SpaceUnit
}
export interface PaddingSpacerInterface {
  pl?: SpaceUnit
  pr?: SpaceUnit
  pt?: SpaceUnit
  pb?: SpaceUnit
  px?: SpaceUnit
  py?: SpaceUnit
  p?: SpaceUnit
}

export interface buildSpacerCssInterface {
  (
    prop: 'margin' | 'padding',
    side: 'all' | 'top' | 'right' | 'bottom' | 'left',
    size: SpaceUnit,
    theme: DefaultTheme
  ): string
}
