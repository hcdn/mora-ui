import React from 'react'
import { FormContext } from '../Form/Form'
import { v4 as uuidv4 } from 'uuid'
import {
  InputValidationResponse,
  MoraInputProps,
  MoraInputState,
  ValidationFunctionInterface,
  ValidationResult
} from './MoraInputTypes'

export abstract class MoraInput<
  InputProps extends MoraInputProps,
  InputState = {}
> extends React.Component<InputProps, MoraInputState<InputState>> {
  static contextType = FormContext
  context!: React.ContextType<typeof FormContext>
  inputId: string | null = null

  constructor(props: InputProps, childState: InputState) {
    super(props)
    const defaultState = {
      inputValue: undefined,
      inputFocused: false,
      isValid: false,
      renderError: false,
      errorMessage: false
    }
    this.state = {
      ...childState,
      ...defaultState
    }
  }

  // user defined functions
  abstract getValue(): any
  validate: undefined | ValidationFunctionInterface = undefined
  afterChange = (_value: any): void => {
    // value
  }

  abstract inputRef: React.RefObject<any>
  // class functions
  setStateAsync = (updater: any): Promise<any> =>
    new Promise((resolve) => {
      this.setState(updater, () => {
        resolve(true)
      })
    })

  parentDidMount = () => {
    const context = this.context

    if (context) {
      this.inputId = uuidv4()
      context.addFormChildRef(this.inputId, this)
    }
    this.silentValidate()
    setTimeout(this.silentValidate, 500)
  }

  componentDidMount() {
    this.parentDidMount()
  }

  parentWillUnmount = () => {
    const context = this.context
    if (context && this.inputId) {
      context.removeFormChildRef(this.inputId)
    }
  }

  componentWillUnmount = () => {
    this.parentWillUnmount()
  }

  setFocus = (focused: boolean): void => {
    this.setState((prevState) => ({ ...prevState, inputFocused: focused }))
  }

  silentValidate = () => {
    this.validateInput(true)
  }

  onChange = (e: any): boolean => {
    const value = this.getValue()
    e.stopPropagation()
    e.persist()

    this.validateInput().then(() => {
      // todo: if async validation, wait
      if (typeof this.props.onChange === 'function') {
        // execute custom onChange function
        this.props.onChange({
          value,
          e,
          isValid: this.state.isValid,
          isInvalid: !this.state.isValid
        })
      }
    })
    return false
  }

  updateErrorRender = () => {
    this.setState((prevState: MoraInputState<InputState>) => ({
      ...prevState,
      renderError: !prevState.isValid
    }))
  }

  updateValue = async (): Promise<void> => {
    const inputValue = this.getValue()
    await this.setStateAsync(() => ({ inputValue }))
  }

  setValid = async (
    isValid: boolean,
    errorMessage: string | undefined
  ): Promise<void> => {
    await this.setStateAsync(() => ({
      isValid,
      errorMessage: !isValid ? !!errorMessage && errorMessage : false
    }))
  }

  processValidationResponse = async (
    response: ValidationResult
  ): Promise<boolean> => {
    if (typeof response === 'boolean') {
      // if valitation is boolean, use default error message
      await this.setValid(response, this.props.errorMessage)
      return response
    } else {
      // if validation response is string, use it as error message
      await this.setValid(false, response)
      return false
    }
  }

  getValidationResponse = () => {
    return {
      value: this.state.inputValue,
      isValid: this.state.isValid,
      isInvalid: !this.state.isValid,
      errorMessage: this.state.errorMessage
    }
  }

  validateInput = async (silent = false): Promise<InputValidationResponse> => {
    return new Promise((resolve) => {
      this.updateValue().then(async () => {
        const value = this.state.inputValue
        if (this.validate) {
          const validationResponse = this.validate(value)
          const isValid: boolean = await this.processValidationResponse(
            validationResponse
          )
          if (!silent) {
            this.updateErrorRender()
          }
          if (!isValid) {
            resolve(this.getValidationResponse())
            return
          }
        }
        const validations: undefined | Array<ValidationFunctionInterface> =
          this.props.validations
        if (validations) {
          for (const validationFunction of validations) {
            const validationResponse = validationFunction(value)
            const isValid: boolean = await this.processValidationResponse(
              validationResponse
            )
            if (!silent) {
              this.updateErrorRender()
            }
            if (!isValid) {
              resolve(this.getValidationResponse())
              return
            }
          }
        }
        if (!silent) {
          this.updateErrorRender()
        }
        resolve(this.getValidationResponse())
      })
    })
  }
}
