import { BoxProps } from '../../Box/BoxTypes'
import { MoraInputProps } from '../MoraInput'

export type SelectFieldValue = string | number | undefined

export interface InputValueOption {
  label?: string | number
  value: string | number
}

export interface SelectFieldProps extends MoraInputProps, BoxProps {
  /** Autocomplete value */
  autoComplete?: boolean
  /** Value of the input */
  value?: string | number | null
  /** Default value of input */
  defaultValue?: string | number | null
  /** Options to select in input */
  options: InputValueOption[]
}
