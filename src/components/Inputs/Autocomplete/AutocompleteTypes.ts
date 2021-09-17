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

export interface AutocompleteProps extends Partial<TextFieldProps> {
  options: AutocompleteOption[]
  onSelect?: AutocompleteDownshiftProps['onSelect']
  initialHighlightedIndex?: AutocompleteDownshiftProps['initialHighlightedIndex']
  initialInputValue?: AutocompleteDownshiftProps['initialInputValue']
  initialIsOpen?: AutocompleteDownshiftProps['initialIsOpen']
  initialSelectedItem?: AutocompleteDownshiftProps['initialSelectedItem']
}
