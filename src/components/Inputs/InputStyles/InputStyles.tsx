import styled, { css } from 'styled-components'
import { cssGetMainColor } from '../../../utils'
import { cssBox } from '../../Box/Box'
import { BoxWrapperProps } from '../../Box/BoxTypes'
import { Text } from '../../Text/Text'
import { Box, BoxProps } from '../..'

import React, { FC, useContext } from 'react'
import { CompositeContext } from '../CompositeField'
import { TextFieldProps } from '..'

// General input vars
const transitionCurve = '200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
const spaceTop = 1
const spaceBottom = 0.3
const spaceLeft = 1
const spaceRight = 1
const inputHeight = 2.8
const helpersMarginTop = 0.3

export const InputError = styled(Text)`
  color: ${cssGetMainColor('error', 'main')};
  margin-top: ${helpersMarginTop}rem;
  text-align: left;
  padding-left: ${spaceLeft}rem;
  padding-right: ${spaceRight}rem;
`

export const InputHelper = styled(Text)`
  margin-top: ${helpersMarginTop}rem;
  text-align: left;
  padding-left: ${spaceLeft}rem;
  padding-right: ${spaceRight}rem;
`

interface InputRootProps extends BoxWrapperProps {
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
  ${cssBox}
`

export interface InputLabelProps {
  required?: boolean
}

export const InputLabel = styled(Text)<InputLabelProps>`
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

export interface InputContainerProps extends BoxProps {
  hasValue: boolean
  error: boolean
  preInputWidth?: number
  postInputWidth?: number
  type?: 'select' | 'file' | TextFieldProps['type']
  isComposite?: boolean
  isCompositeChild?: boolean
  onClick?: any
}

export const InputContainer: FC<InputContainerProps> = ({
  children,
  ...props
}) => {
  const IsCompositeChild = useContext(CompositeContext)
  return (
    <InputContainerStyle {...props} isCompositeChild={IsCompositeChild}>
      {children}
    </InputContainerStyle>
  )
}

export const InputContainerStyle = styled(Box)<InputContainerProps>`
  position: relative;
  color: ${({ theme }) => theme.palette.background.secondary.contrastText};
  transition: background-color ${transitionCurve}, box-shadow ${transitionCurve};

  ${({ isCompositeChild }) =>
    !isCompositeChild &&
    css`
      // Is a parent container
      box-shadow: 0 0 0 1px
        ${({ theme }) => theme.palette.background.secondary.dark};
      background-color: ${({ theme }) =>
        theme.palette.background.secondary.main};
      border-radius: 0.5rem;
    `}
  &:focus-within {
    ${({ isCompositeChild }) =>
      !isCompositeChild &&
      css`
        box-shadow: 0 0 0 0.1rem ${cssGetMainColor('primary')};
      `}
    ${({ isComposite }) =>
      isComposite
        ? css``
        : css`
            ${InputLabel} {
              color: ${cssGetMainColor('primary')};
              transform: translate(${spaceLeft}rem, 0.4rem) scale(0.75);
            }
            ${ExtraInput} {
              visibility: visible;
            }
          `}
  }

  overflow: hidden;
  display: flex;
  /* align-items: flex-end; */
  ${ExtraInput} {
    padding-bottom: ${spaceBottom}rem;
  }
  input,
  select,
  textarea,
  .selectedFileNames {
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
      preInputWidth ? `${preInputWidth + 2}px` : `${spaceLeft}rem`};

    padding-right: ${({ postInputWidth }) =>
      postInputWidth ? `${postInputWidth + 2}px` : `${spaceRight}rem`};

    font-weight: 500;
    height: ${inputHeight}rem;
    &:focus {
      outline: none;
    }
  }
  select {
    appearance: none;
    cursor: pointer;
  }
  ${({ type }) =>
    type === 'select' &&
    css`
      &:after {
        pointer-events: none;
        content: '▼';
        font-size: 0.7rem;
        top: 50%;
        transform: translateY(-50%);
        right: 0.5rem;
        position: absolute;
        opacity: 0.7;
      }
    `}
  ${({ type }) =>
    type === 'file' &&
    css`
      cursor: pointer;
      color: ${cssGetMainColor('primary')};
      input {
        cursor: pointer;
        visibility: hidden;
      }
    `}
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
    ${({ hasValue, type }) =>
      (hasValue || type === 'date') &&
      `transform: translate(${spaceLeft}rem, 0.4rem) scale(0.75);`}
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
