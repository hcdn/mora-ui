import serialize from 'form-serialize'
import React, { FormEvent, FunctionComponent, useState } from 'react'
import { MoraInput } from '../MoraInput/MoraInput'
import { FormProps } from './FormTypes'

export const FormContext = React.createContext<{
  addFormChildRef: (id: string, ref: MoraInput<any>) => void
  removeFormChildRef: (id: string) => void
} | null>(null)

export const Form: FunctionComponent<FormProps> = ({
  noPrevent,
  prevent,
  autoComplete,
  children,
  className,
  style,
  ...props
}) => {
  // Mora childs
  const [formChilds, setFormChilds] = useState<{
    [id: string]: MoraInput<any>
  }>({})
  const addFormChildRef = (id: string, ref: MoraInput<any>) => {
    setFormChilds((prevState) => {
      return {
        ...prevState,
        [id]: ref
      }
    })
  }
  const removeFormChildRef = (id: string) => {
    setFormChilds((prevState) => {
      const newState = { ...prevState }
      delete newState[id]
      return newState
    })
  }
  // Submit FN
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if ((typeof props.onSubmit === 'function' && !noPrevent) || prevent) {
      e.preventDefault()
    }
    const form = e.currentTarget
    const validations = Object.values(formChilds).map((input) =>
      input.validateInput()
    )
    Promise.all(validations).then((values) => {
      const validForm = values.every((v) => v.isValid)
      if (validForm) {
        if (props.onSubmit) {
          if (props.serialize === true) {
            // default true
            const hash: boolean =
              typeof props.hash === 'undefined' ? true : props.hash
            const empty: boolean =
              typeof props.empty === 'undefined' ? true : props.empty
            const values = serialize(form, { hash, empty })
            props.onSubmit({ e, values })
          } else {
            props.onSubmit({ e })
          }
        }
      }
    })
  }
  const autoCompleteValue =
    typeof autoComplete === 'undefined'
      ? undefined
      : autoComplete
      ? 'on'
      : 'off'
  return (
    <FormContext.Provider value={{ addFormChildRef, removeFormChildRef }}>
      <form
        className={className}
        style={style}
        onSubmit={handleSubmit}
        autoComplete={autoCompleteValue}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}
