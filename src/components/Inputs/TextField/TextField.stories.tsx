import React from 'react'
import { Box } from '../../Box/Box'
import { TextField } from './TextField'

export default {
  title: 'Components/Inputs/TextField',
  component: TextField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=8%3A13'
    }
  }
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
  return (
    <Box container containerSize='m'>
      <TextField label='My label' value='Example value' />
    </Box>
  )
}
