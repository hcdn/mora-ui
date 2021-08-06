import React from 'react'
import { MoraInput, ValidationResult } from '../MoraInput'
import {
  InputContainer,
  InputError,
  InputLabel,
  InputRoot,
  InputHelper
} from '../InputStyles/InputStyles'
import { SelectFieldProps, SelectFieldValue } from './SelectFieldTypes'
import { transformBoxProps } from '../../Box/Box'

export class SelectField extends MoraInput<SelectFieldProps> {
  public static defaultProps = {}

  constructor(props: SelectFieldProps) {
    super(props, {
      preInputWidth: 0,
      postInputWidth: 0
    })
    this.inputRef = React.createRef<HTMLSelectElement>()
  }

  inputRef: React.RefObject<HTMLSelectElement>

  validate = (value: SelectFieldValue): ValidationResult => {
    if (this.props.required) {
      return typeof value !== 'undefined'
    } else {
      return true
    }
  }

  getValue = (): SelectFieldValue => {
    const value = this.inputRef.current?.value || undefined
    return value
  }

  render() {
    const autoComplete =
      typeof this.props.autoComplete === 'undefined'
        ? undefined
        : this.props.autoComplete
        ? 'on'
        : 'off'

    const showError: boolean =
      !!this.state.errorMessage && this.state.renderError

    const value = this.props.value === null ? '' : this.props.value

    const defaultValue =
      this.props.defaultValue === null ? '' : this.props.defaultValue

    const hasValue =
      !!(this.props.value ?? !!this.state.inputValue) || !!defaultValue

    const boxProps = transformBoxProps(this.props)

    return (
      <InputRoot
        style={this.props.style}
        className={this.props.className}
        {...boxProps}
      >
        <InputContainer
          type='select'
          error={!!this.state.renderError}
          hasValue={hasValue}
          onClick={() => this.inputRef.current?.focus()}
          preInputWidth={0}
          postInputWidth={0}
        >
          {!!this.props.label && (
            <InputLabel required={this.props.required}>
              {this.props.label}
            </InputLabel>
          )}
          <select
            name={this.props.name}
            ref={this.inputRef}
            value={value}
            onChange={this.onChange}
            required={this.props.required}
            autoComplete={autoComplete}
          >
            <option selected={value === undefined} disabled />
            {this.props.options.map((option, i) => (
              <option
                key={i}
                value={option.value}
                selected={value === option.value}
              >
                {option.label !== undefined ? option.label : option.value}
              </option>
            ))}
          </select>
        </InputContainer>
        {showError ? (
          <InputError>{this.state.errorMessage}</InputError>
        ) : (
          !!this.props.helperText && (
            <InputHelper>{this.props.helperText}</InputHelper>
          )
        )}
      </InputRoot>
    )
  }
}
