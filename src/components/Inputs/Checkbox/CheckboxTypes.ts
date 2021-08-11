import { BoxProps } from '../../Box/BoxTypes'
import { MoraInputProps } from '../MoraInput'

export interface CheckboxProps extends MoraInputProps, BoxProps {
  /** Value of the input */
  value?: string | number
  /** Input is checked */
  checked?: boolean
  /** Input is on a intermediate state */
  intermediate?: boolean
  /** Uncontrolled start value */
  defaultChecked?: boolean
  /** Unchecked icon */
  icon?: any
  /** Checked icon */
  checkedIcon?: any
  /** Indeterminate icon  */
  intermediateIcon?: any
}

export interface CheckIconBoxProps extends BoxProps {
  checked?: boolean
}
