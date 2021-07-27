import styled, { css } from 'styled-components'
import { cssGetMainColor } from '../../../utils'

// General input vars
const transitionCurve = '200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
const spaceTop = 1.1
const spaceBottom = 0.6
const spaceLeft = 1.2
const spaceRight = 1.2
const inputHeight = 3

export const InputError = styled.div`
  color: ${cssGetMainColor('error', 'main')};
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  padding-left: ${spaceLeft}rem;
  padding-right: ${spaceRight}rem;
`

export const InputHelper = styled.div`
  color: ${({ theme }) => theme.palette.divider};
  margin-top: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  padding-left: ${spaceLeft}rem;
  padding-right: ${spaceRight}rem;
`

interface InputRootProps {
  readonly?: boolean
}

export const InputRoot = styled.div<InputRootProps>`
  margin: 0;
  padding: 0;
  border: none;
  display: inline-flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  vertical-align: top;
  ${({ readonly }) =>
    readonly &&
    css`
      pointer-events: none;
      user-select: none;
    `}
`

export interface InputLabelProps {
  required?: boolean
}

export const InputLabel = styled.div<InputLabelProps>`
  ${({ required }) =>
    required &&
    css`
      &:after {
        content: '*';
      }
    `}
`

interface ExtraInputInterface {
  show: boolean
  pre?: boolean
  post?: boolean
}

export const ExtraInput = styled.div<ExtraInputInterface>`
  display: flex;
  ${({ show }) => !show && 'visibility: hidden;'}
  align-content: center;
  justify-content: center;
  user-select: none;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  ${({ pre }) =>
    pre &&
    `
		left: 0;
		padding-left: ${spaceLeft}rem;
	`}
  ${({ post }) =>
    post &&
    `
		right: 0;
		padding-right: ${spaceRight}rem;
	`}
`

export interface InputContainerProps {
  hasValue: boolean
  error: boolean
  preInputWidth: number
  postInputWidth: number
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.secondary.main};
  color: ${({ theme }) => theme.palette.background.secondary.contrastText};
  box-shadow: 0 0 0 0.1rem
    ${({ theme }) => theme.palette.background.secondary.dark};
  transition: background-color ${transitionCurve}, box-shadow ${transitionCurve};
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  ${ExtraInput} {
    padding-bottom: ${spaceBottom}rem;
  }
  input,
  select,
  textarea {
    font: inherit;
    color: currentColor;
    width: 100%;
    border: 0;
    margin: 0;
    display: block;
    min-width: 0;
    box-sizing: border-box;
    background: none;
    -webkit-tap-highlight-color: transparent;
    padding-top: ${spaceTop}rem;
    padding-bottom: ${spaceBottom}rem;
    padding-left: ${({ preInputWidth }) =>
      preInputWidth ? preInputWidth / 10 + 0.1 : spaceLeft}rem;
    padding-right: ${({ postInputWidth }) =>
      postInputWidth ? postInputWidth / 10 + 0.1 : spaceRight}rem;
    font-weight: 500;
    min-width: 20.594rem;
    height: ${inputHeight}rem;
    &:focus {
      outline: none;
    }
  }
  ${InputLabel} {
    position: absolute;
    pointer-events: none;
    transition: color ${transitionCurve}, transform ${transitionCurve};
    transform: translate(${spaceLeft}rem, ${inputHeight / 3}rem) scale(1);
    transform-origin: top left;
    color: rgba(0, 0, 0, 0.64);
    font-weight: 500;
    z-index: 10;
    top: 0;
    left: 0;
    ${({ hasValue }) =>
      hasValue && `transform: translate(${spaceLeft}rem, 0.4rem) scale(0.75);`}
  }
  &:focus-within {
    box-shadow: 0 0 0 0.1rem ${cssGetMainColor('primary')};
    ${InputLabel} {
      color: ${cssGetMainColor('primary')};
      transform: translate(${spaceLeft}rem, 0.4rem) scale(0.75);
    }
    ${ExtraInput} {
      visibility: visible;
    }
  }
  ${({ error }) =>
    /* Error state */
    error &&
    css`
      background-color: ${cssGetMainColor('error', 'light')};
      input,
      select,
      textarea {
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30rem ${cssGetMainColor('error', 'main')}
            inset !important;
        }
      }
      ${InputLabel} {
        color: ${cssGetMainColor('error', 'main')};
      }
    `}
`
