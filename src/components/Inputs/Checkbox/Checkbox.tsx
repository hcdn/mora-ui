import React from 'react'
import { CircleButton } from '../../CircleButton/CircleButton'
import { Text } from '../../Text/Text'
import { MoraInput, ValidationResult } from '../MoraInput'
import { CheckboxContainer, CheckIconBox } from './CheckboxStyles'
import { CheckboxProps } from './CheckboxTypes'
import { CheckMark, UncheckMark } from './Icons'

const UncheckedIcon = <CheckIconBox />

const CheckedIcon = (
  <CheckIconBox checked>
    <CheckMark />
  </CheckIconBox>
)

const IntermediateIcon = (
  <CheckIconBox checked>
    <UncheckMark />
  </CheckIconBox>
)

export class Checkbox extends MoraInput<CheckboxProps, {}> {
  constructor(props: CheckboxProps) {
    super(props, {
      preInputWidth: 0,
      postInputWidth: 0
    })
    this.inputRef = React.createRef<HTMLInputElement>()
  }

  inputRef: React.RefObject<HTMLInputElement>

  validate = (value: any): ValidationResult => {
    if (this.props.required) {
      return !!value
    } else {
      return true
    }
  }

  getValue = (): boolean => {
    const checked = !!this.inputRef.current?.checked
    return checked
  }

  getIcon = () => {
    const inputState: 'intermediateIcon' | 'checkedIcon' | 'icon' = this.props
      .intermediate
      ? 'intermediateIcon'
      : this.state.inputValue
      ? 'checkedIcon'
      : 'icon'
    const icon = {
      icon: this.props.icon || UncheckedIcon,
      checkedIcon: this.props.checkedIcon || CheckedIcon,
      intermediateIcon: this.props.intermediateIcon || IntermediateIcon
    }[inputState]
    return icon
  }

  onChange = (e: any): boolean => {
    const value = e.target.checked
    e.stopPropagation()
    e.persist()

    this.validateInput()

    if (typeof this.props.onChange === 'function') {
      // execute custom onChange function
      this.props.onChange({
        value: value,
        e,
        isValid: this.state.isValid,
        isInvalid: !this.state.isValid
      })
    }
    return false
  }

  render() {
    const { value, checked, defaultChecked, name, className, label, children } =
      this.props

    const CheckIcon = this.getIcon()

    return (
      <CheckboxContainer
        align='center'
        flex
        space={2}
        p={1}
        className={className}
      >
        <CircleButton as='div'>{CheckIcon}</CircleButton>
        <input
          ref={this.inputRef}
          value={value}
          name={name}
          type='checkbox'
          onChange={this.onChange}
          checked={checked}
          defaultChecked={defaultChecked}
        />
        {!!label && <Text cssStyles={{ userSelect: 'none' }}>{label}</Text>}
        {children}
      </CheckboxContainer>
    )
  }
}
