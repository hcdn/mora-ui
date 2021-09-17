import React from 'react'
import { Form } from '..'
import { Button } from '../..'
import { Box } from '../../Box/Box'
import { Autocomplete } from './Autocomplete'

export default {
  title: 'Components/Inputs/Autocomplete',
  component: Autocomplete,
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

export const Index = () => {
  const options = [
    { value: 'banana', label: 'Banana' },
    { value: 'manzana', label: 'Manzana' },
    { value: 'pera', label: 'Pera' },
    { value: 'sandia', label: 'Sandía' }
  ]
  return (
    <Form>
      <Autocomplete required label='Fruta' options={options} />
      <Button mt={4} type='submit'>
        Enviar
      </Button>
    </Form>
  )
}

const autocompleteOptions = [
  { label: 'Albaricoque', value: 'Albaricoque' },
  { label: 'Arándano', value: 'Arándano' },
  { label: 'Breva', value: 'Breva' },
  { label: 'Cereza', value: 'Cereza' },
  { label: 'Ciruela', value: 'Ciruela' },
  { label: 'Endrina', value: 'Endrina' },
  { label: 'Frambuesa', value: 'Frambuesa' },
  { label: 'Fresa', value: 'Fresa' },
  { label: 'Granada', value: 'Granada' },
  { label: 'Grosella', value: 'Grosella' },
  { label: 'Higo', value: 'Higo' },
  { label: 'Lima', value: 'Lima' },
  { label: 'Limón', value: 'Limón' },
  { label: 'Mandarina', value: 'Mandarina' },
  { label: 'Manzana', value: 'Manzana' },
  { label: 'Melocotón', value: 'Melocotón' },
  { label: 'Melón', value: 'Melón' },
  { label: 'Membrillo', value: 'Membrillo' },
  { label: 'Mora', value: 'Mora' },
  { label: 'Naranja', value: 'Naranja' },
  { label: 'Níspero', value: 'Níspero' },
  { label: 'Pera', value: 'Pera' },
  { label: 'Piña', value: 'Piña' },
  { label: 'Plátano', value: 'Plátano' },
  { label: 'Pomelo', value: 'Pomelo' },
  { label: 'Sandía', value: 'Sandía' },
  { label: 'Uva', value: 'Uva' },
  { label: 'Aguacate', value: 'Aguacate' },
  { label: 'Alquejenje', value: 'Alquejenje' },
  { label: 'Caqui', value: 'Caqui' },
  { label: 'Carambola', value: 'Carambola' },
  { label: 'Chirimoya', value: 'Chirimoya' },
  { label: 'Coco', value: 'Coco' },
  { label: 'Guayaba', value: 'Guayaba' },
  { label: 'Kiwano', value: 'Kiwano' },
  { label: 'Kiwi', value: 'Kiwi' },
  { label: 'Kumquat', value: 'Kumquat' },
  { label: 'Litchi', value: 'Litchi' },
  { label: 'Mango', value: 'Mango' },
  { label: 'Mangostan', value: 'Mangostan' },
  { label: 'Maracuyá', value: 'Maracuyá' },
  { label: 'Papaya', value: 'Papaya' },
  { label: 'Pitahaya', value: 'Pitahaya' },
  { label: 'Rambután', value: 'Rambután' },
  { label: 'Tamarillo', value: 'Tamarillo' }
]

export const InitialOpen = () => {
  return (
    <Autocomplete
      initialIsOpen
      label='Click outside to close'
      initialHighlightedIndex={0}
      options={autocompleteOptions}
    />
  )
}

export const InitialSelected = () => {
  return (
    <Autocomplete
      initialSelectedItem={autocompleteOptions[0]}
      label='Fruta'
      options={autocompleteOptions}
    />
  )
}
