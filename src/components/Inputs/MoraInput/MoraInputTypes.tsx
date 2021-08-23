import { CSSProperties } from 'styled-components'

export type ValidationResult = boolean | string

export interface ValidationFunctionInterface {
  (value: any): ValidationResult
}

export interface OnChangeFunction {
  (e: { value: any; e: any; isValid: boolean; isInvalid: boolean }): any
}

export interface MoraInputProps {
  /** Input is disabled */
  disabled?: boolean
  /** Input is required. */
  required?: boolean
  /** Array of validation functions. */
  validations?: Array<ValidationFunctionInterface>
  /** Default error message */
  errorMessage?: string
  /** Generate error message from function. */
  getErrorMessage?: { (value: any): string }
  /** Execute after input changed. */
  onChange?: OnChangeFunction
  //* * Label to display. */
  label?: string | number
  //* * Show only when no value is present. */
  placeholder?: string | number
  //* * Input name. */
  name?: string
  style?: CSSProperties
  /** Helper text below the input */
  helperText?: string
}

export type MoraInputState<T> = T & {
  inputValue: any
  inputFocused: boolean
  isValid: boolean
  renderError: boolean
  errorMessage: string | boolean
}

export type InputValidationResponse = {
  value: any
  isValid: boolean
  isInvalid: boolean
  errorMessage?: string | boolean
}
