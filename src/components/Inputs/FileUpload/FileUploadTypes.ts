import { BoxProps } from '../../Box/BoxTypes'
import { MoraInputProps } from '../MoraInput'

export interface FileUploadProps extends MoraInputProps, BoxProps {
  multiple?: boolean
  value?: any
  defaultValue?: any
  accept?: string[]
}
