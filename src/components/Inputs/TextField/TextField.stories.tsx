import React, { useState } from 'react'
import { Box } from '../../Box/Box'
import { OnChangeFunction } from '../MoraInput'
import { TextField } from './TextField'

export default {
  title: 'Components/Inputs/TextField',
  component: TextField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=8%3A13'
    }
  },
  decorators: [
    (Story: any) => (
      <Box py={6} container containerSize='s' flex space={3}>
        <Story />
      </Box>
    )
  ]
}

/**
 * TODO: agregar variantes de estilo de inputs, propiedad initialValue
 * Docuemntar Form
 * Hacer componentes:
 * - SelectField
 * - CheckBox (& IconButton)
 * - Radio
 * Ajustar tamaño de logo
 * Chips
 */
export const Index = () => {
  const [inputValue, setInputValue] = useState('Input value')
  const handleChange: OnChangeFunction = (e) => {
    setInputValue(e.value)
  }
  return (
    <TextField
      label='My label'
      value={inputValue}
      onChange={handleChange}
      helperText='Helper text'
    />
  )
}

export const ValidationFunction = () => {
  return (
    <TextField
      label='Insert 10 characters'
      required
      validations={[
        (v) => v.length >= 10 || 'You need at least 10 characters.'
      ]}
    />
  )
}

export const ExtraText = () => {
  return (
    <TextField
      label='Amount'
      type='number'
      preInputText='$'
      postInputText='ARS'
      defaultValue={11}
    />
  )
}
