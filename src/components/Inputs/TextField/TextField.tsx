import React from 'react'
import { MoraInput, ValidationResult } from '../MoraInput'
import {
  InputContainer,
  InputError,
  InputLabel,
  InputRoot,
  ExtraInput,
  InputHelper
} from '../InputStyles/InputStyles'
import { TextFieldProps, TextFieldState } from './TextFieldTypes'
import { transformBoxProps } from '../../Box/Box'
import Cleave from 'cleave.js/react'

export class TextField extends MoraInput<TextFieldProps, TextFieldState> {
  public static defaultProps = {
    type: 'text'
  }

  constructor(props: TextFieldProps) {
    super(props, {
      preInputWidth: 0,
      postInputWidth: 0
    })
    this.inputRef = React.createRef<HTMLInputElement>()
    this.preInputRef = React.createRef()
    this.postInputRef = React.createRef()
  }

  inputRef: React.RefObject<HTMLInputElement>
  preInputRef: React.RefObject<HTMLDivElement>
  postInputRef: React.RefObject<HTMLDivElement>

  validate = (value: string): ValidationResult => {
    if (this.props.required) {
      return !!value
    } else {
      return true
    }
  }

  getValue = (): string | number => {
    const value = this.inputRef.current?.value || ''
    return value
  }

  resizeExtra = (type: 'pre' | 'post', width: number | undefined) => {
    this.setState((prevState) => {
      const prop = `${type}InputWidth`
      return {
        ...prevState,
        [prop]: width
      }
    })
  }

  componentDidUpdate(prevProps: TextFieldProps) {
    if (prevProps.preInputText !== this.props.preInputText) {
      this.resizeExtra('pre', this.preInputRef.current?.offsetWidth || 0)
    }
    if (prevProps.postInputText !== this.props.postInputText) {
      this.resizeExtra('post', this.postInputRef.current?.offsetWidth || 0)
    }
  }

  componentDidMount() {
    this.resizeExtra('pre', this.preInputRef.current?.offsetWidth || 0)
    this.resizeExtra('post', this.postInputRef.current?.offsetWidth || 0)
    this.parentDidMount()
  }

  focusInput = (): void => {
    return this.inputRef?.current?.focus()
  }

  render() {
    const type: TextFieldProps['type'] = this.props.type
    const autoComplete =
      typeof this.props.autoComplete === 'undefined'
        ? undefined
        : this.props.autoComplete
        ? 'on'
        : 'off'
    const showError: boolean =
      !!this.state.errorMessage && this.state.renderError
    const hasPreInput: boolean = !!this.props.preInputText
    const hasPostInput: boolean = !!this.props.postInputText

    const value = this.props.value === null ? '' : this.props.value

    const defaultValue =
      this.props.defaultValue === null ? '' : this.props.defaultValue

    const hasValue =
      !!(this.props.value ?? !!this.state.inputValue) || !!defaultValue

    /** Implement Box */
    const boxProps = transformBoxProps(this.props)

    const placeholder =
      typeof this.props.placeholder === 'undefined'
        ? this.props.placeholder
        : `${this.props.placeholder}`

    const showPlaceholder: boolean =
      hasValue || this.state.inputFocused || !this.props.label

    return (
      <InputRoot
        style={this.props.style}
        className={this.props.className}
        {...boxProps}
      >
        <InputContainer
          error={!!this.state.renderError}
          hasValue={hasValue}
          onClick={this.focusInput}
          preInputWidth={this.state.preInputWidth}
          postInputWidth={this.state.postInputWidth}
        >
          {hasPreInput && ( // only observe when it exists
            <ExtraInput
              ref={this.preInputRef}
              pre
              show={hasValue || !this.props.label}
            >
              {this.props.preInputText}
            </ExtraInput>
          )}
          {!!this.props.label && (
            <InputLabel required={this.props.required}>
              {this.props.label}
            </InputLabel>
          )}
          {this.props.format ? (
            <Cleave
              options={this.props.format}
              name={this.props.name}
              required={this.props.required}
              onChange={this.onChange}
              value={value}
              htmlRef={(ref) => {
                this.inputRef = { current: ref }
              }}
              type={type}
              min={this.props.min}
              max={this.props.max}
              autoComplete={autoComplete}
              defaultValue={defaultValue}
              placeholder={showPlaceholder ? placeholder : undefined}
              onFocus={() => this.setFocus(true)}
              onBlur={() => this.setFocus(false)}
            />
          ) : (
            <input
              name={this.props.name}
              required={this.props.required}
              onChange={this.onChange}
              value={value}
              ref={this.inputRef}
              type={type}
              min={this.props.min}
              max={this.props.max}
              autoComplete={autoComplete}
              defaultValue={defaultValue}
              placeholder={showPlaceholder ? placeholder : undefined}
              onFocus={() => this.setFocus(true)}
              onBlur={() => this.setFocus(false)}
            />
          )}
          {hasPostInput && (
            <ExtraInput
              ref={this.postInputRef}
              post
              show={hasValue || !this.props.label}
            >
              {this.props.postInputText}
            </ExtraInput>
          )}
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
