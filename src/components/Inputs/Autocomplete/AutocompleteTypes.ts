import { DownshiftProps } from 'downshift'
import { TextFieldProps } from '..'
import { BoxProps } from '../..'

export interface SelectMenuItemProps extends BoxProps {
  highlighted?: boolean
  disabled?: boolean
}
export type AutocompleteOption = {
  label: any
  value: any
}

type AutocompleteDownshiftProps = DownshiftProps<AutocompleteOption>

export interface AutocompleteProps extends Partial<BoxProps> {
  options: AutocompleteOption[]
  onSelect?: AutocompleteDownshiftProps['onSelect']
  initialHighlightedIndex?: AutocompleteDownshiftProps['initialHighlightedIndex']
  initialInputValue?: AutocompleteDownshiftProps['initialInputValue']
  initialIsOpen?: AutocompleteDownshiftProps['initialIsOpen']
  initialSelectedItem?: AutocompleteDownshiftProps['initialSelectedItem']
  /** Text field props */
  label?: TextFieldProps['label']
  preInputText?: TextFieldProps['preInputText']
  postInputText?: TextFieldProps['postInputText']
  value?: TextFieldProps['value']
  defaultValue?: TextFieldProps['defaultValue']
  format?: TextFieldProps['format']
  inputProps?: TextFieldProps['inputProps']
  required?: TextFieldProps['required']
  name?: TextFieldProps['name']
}
