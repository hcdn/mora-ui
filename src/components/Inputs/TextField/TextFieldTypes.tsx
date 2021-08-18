import { BoxProps } from '../../Box/BoxTypes'
import { MoraInputProps } from '../MoraInput'
import { CleaveOptions } from 'cleave.js/options'

export interface TextFieldProps extends MoraInputProps, BoxProps {
  /** Type of text input. */
  type: 'text' | 'number' | 'email' | 'password'
  /** Minimum amount of characters in string. */
  minLength?: number
  /** Maximum amount of characters in string. */
  maxLength?: number
  min?: number
  max?: number
  /** Autocomplete value */
  autoComplete?: boolean
  /** Text to show before the input */
  preInputText?: string
  /** Text to show after the input */
  postInputText?: string
  /** Value of the input */
  value?: string | number | null
  /** Default value of input */
  defaultValue?: string | number | null
  /** Cleave.js format options. See https://nosir.github.io/cleave.js/ */
  format?: CleaveOptions
}

export interface TextFieldState {
  preInputWidth: number
  postInputWidth: number
}
