import { MoraInputProps } from '../MoraInput'

export interface TextFieldProps extends MoraInputProps {
  /** Type of text input. */
  type: 'text' | 'number' | 'email' | 'password'
  /** Minimum amount of characters in string. */
  minLength?: number
  /** Maximum amount of characters in string. */
  maxLength?: number
  min?: number
  max?: number
  autoComplete?: boolean
  /** Text to show before the input */
  preInputText?: string
  /** Text to show after the input */
  postInputText?: string
  /** Helper text below the input */
  helperText?: string
  /** Value of the input */
  value?: string
}

export interface TextFieldState {
  preInputWidth: number
  postInputWidth: number
}
