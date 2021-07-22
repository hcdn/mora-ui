import { css, DefaultTheme } from 'styled-components'
import { getSize } from '../sizing/sizing'
import {
  buildSpacerCssInterface,
  MarignSpacerInterface,
  PaddingSpacerInterface,
  SpaceUnit
} from './spacerTypes'

export const useSpacerMargin = (
  props: MarignSpacerInterface
): MarignSpacerInterface => ({
  ml: props.ml,
  mr: props.mr,
  mt: props.mt,
  mb: props.mb,
  mx: props.mx,
  my: props.my,
  m: props.m
})
export const useSpacerPadding = (
  props: PaddingSpacerInterface
): PaddingSpacerInterface => ({
  pl: props.pl,
  pr: props.pr,
  pt: props.pt,
  pb: props.pb,
  px: props.px,
  py: props.py,
  p: props.p
})

const getSpaceUnit = (size: SpaceUnit, theme: DefaultTheme) =>
  size === 'auto' ? 'auto' : getSize(size, theme)

const buildSpacerCss: buildSpacerCssInterface = (prop, side, size, theme) =>
  `${prop}${side === 'all' ? '' : `-${side}`}: ${getSpaceUnit(size, theme)};`

export const spacerMargin = css<MarignSpacerInterface>`
  ${({ m, theme }) =>
    m !== undefined && buildSpacerCss('margin', 'all', m, theme)}
  ${({ my, theme }) =>
    my !== undefined && buildSpacerCss('margin', 'top', my, theme)}
	${({ my, theme }) =>
    my !== undefined && buildSpacerCss('margin', 'bottom', my, theme)}
	${({ mx, theme }) =>
    mx !== undefined && buildSpacerCss('margin', 'left', mx, theme)}
	${({ mx, theme }) =>
    mx !== undefined && buildSpacerCss('margin', 'right', mx, theme)}
	${({ mt, theme }) =>
    mt !== undefined && buildSpacerCss('margin', 'top', mt, theme)}
	${({ mr, theme }) =>
    mr !== undefined && buildSpacerCss('margin', 'right', mr, theme)}
	${({ mb, theme }) =>
    mb !== undefined && buildSpacerCss('margin', 'bottom', mb, theme)}
	${({ ml, theme }) =>
    ml !== undefined && buildSpacerCss('margin', 'left', ml, theme)}
`
export const spacerPadding = css<PaddingSpacerInterface>`
  ${({ p, theme }) =>
    p !== undefined && buildSpacerCss('padding', 'all', p, theme)}
  ${({ py, theme }) =>
    py !== undefined && buildSpacerCss('padding', 'top', py, theme)}
	${({ py, theme }) =>
    py !== undefined && buildSpacerCss('padding', 'bottom', py, theme)}
	${({ px, theme }) =>
    px !== undefined && buildSpacerCss('padding', 'right', px, theme)}
	${({ px, theme }) =>
    px !== undefined && buildSpacerCss('padding', 'left', px, theme)}
	${({ pt, theme }) =>
    pt !== undefined && buildSpacerCss('padding', 'top', pt, theme)}
	${({ pr, theme }) =>
    pr !== undefined && buildSpacerCss('padding', 'right', pr, theme)}
	${({ pb, theme }) =>
    pb !== undefined && buildSpacerCss('padding', 'bottom', pb, theme)}
	${({ pl, theme }) =>
    pl !== undefined && buildSpacerCss('padding', 'left', pl, theme)}
`
