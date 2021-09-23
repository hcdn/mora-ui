// @TODO: combine error messages
import React, { FC, useContext } from 'react'
import { InputContainer } from '../InputStyles/InputStyles'
import { CompositeFieldProps } from './CompositeFieldTypes'

export const CompositeContext = React.createContext(false)

export const CompositeField: FC<CompositeFieldProps> = ({
  children,
  ...props
}) => {
  const IsCompositeChild = useContext(CompositeContext)
  return (
    <InputContainer
      hasValue={false}
      error={false}
      isComposite
      isCompositeChild={IsCompositeChild}
      {...props}
    >
      <CompositeContext.Provider value>{children}</CompositeContext.Provider>
    </InputContainer>
  )
}
