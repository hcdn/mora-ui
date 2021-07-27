import { FormEvent } from 'react'
import { CSSProperties } from 'styled-components'

interface FormBaseProps {
  noPrevent?: boolean
  prevent?: boolean
  autoComplete?: boolean
  className?: string
  style?: CSSProperties
}

type SerializedFormParams<T_RESULT> = {
  e: FormEvent<HTMLFormElement>
  values: T_RESULT
}
type UnserializedFormParams = {
  e: FormEvent<HTMLFormElement>
}

export type SerializedFormEvent<T_RESULT> = (
  result: SerializedFormParams<T_RESULT>
) => void
export type UnserializedFormEvent = (result: UnserializedFormParams) => void

export type FormSerializedProps = FormBaseProps & {
  serialize: true
  hash?: boolean
  empty?: boolean
  onSubmit?: SerializedFormEvent<any>
}

export type FormUnserializedProps = FormBaseProps & {
  serialize?: false
  onSubmit?: UnserializedFormEvent
}

export type FormProps = FormSerializedProps | FormUnserializedProps
