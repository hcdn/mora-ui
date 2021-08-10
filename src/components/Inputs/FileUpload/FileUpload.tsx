import React from 'react'
import { MoraInput, ValidationResult } from '../MoraInput'
import { FileUploadProps } from './FileUploadTypes'
import {
  InputContainer,
  InputError,
  InputLabel,
  InputRoot,
  InputHelper
} from '../InputStyles/InputStyles'
import { transformBoxProps } from '../../Box/Box'
import { FileNames } from './FileUploadStyles'

export class FileUpload extends MoraInput<FileUploadProps, {}> {
  constructor(props: FileUploadProps) {
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

  getValue = (): FileList | null => {
    const value = this.inputRef.current?.files || null
    return value
  }

  onDelete = (_e: any) => {
    if (this.inputRef.current) {
      this.inputRef.current.value = ''
      const ev: any = new Event('change', { bubbles: true })
      ev.simulated = true
      this.inputRef.current.dispatchEvent(ev)
    }
  }

  render() {
    const accept = this.props.accept ? this.props.accept.join(', ') : undefined

    const value: FileList | null = this.state.inputValue

    const hasValue =
      typeof this.state.inputValue === 'object'
        ? Array.from(value || []).length > 0
        : false

    const selectedFilesNames: string | false =
      hasValue &&
      !!value &&
      Array.from(value)
        .map((file) => file.name)
        .join(', ')

    const boxProps = transformBoxProps(this.props)

    const showError: boolean =
      !!this.state.errorMessage && this.state.renderError

    return (
      <InputRoot
        title={selectedFilesNames || undefined}
        style={this.props.style}
        className={this.props.className}
        {...boxProps}
      >
        <InputContainer
          type='file'
          error={!!this.state.renderError}
          hasValue={hasValue}
          onClick={() => this.inputRef.current?.focus()}
        >
          <label style={{ cursor: 'pointer' }}>
            {!!this.props.label && (
              <InputLabel required={this.props.required}>
                {this.props.label}
              </InputLabel>
            )}
            <input
              type='file'
              onChange={this.onChange}
              ref={this.inputRef}
              multiple={this.props.multiple}
              accept={accept}
            />
          </label>
          {hasValue && (
            <FileNames
              deleteFiles={this.onDelete}
              selectedFilesNames={selectedFilesNames}
            />
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
