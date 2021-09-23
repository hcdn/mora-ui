import React, { useState } from 'react'
import { OnChangeFunction, TextField } from '..'
import { Circle } from '../..'
import { Box } from '../../Box/Box'
import { CompositeField } from './CompositeField'

export default {
  title: 'Components/Inputs/CompositeField',
  component: CompositeField,
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

export const SimpleComposite = () => {
  return (
    <CompositeField>
      <TextField label='Date from' format={{ date: true }} />
      <TextField label='Date to' format={{ date: true }} />
    </CompositeField>
  )
}

export const ComplexComposite = () => {
  const [color, setColor] = useState<undefined | string>(undefined)
  const updateColor: OnChangeFunction = ({ value, isValid }) => {
    if (isValid) {
      setColor(value)
    } else {
      setColor(undefined)
    }
  }
  return (
    <CompositeField>
      <TextField label='Color name' />
      <CompositeField align='center' noWrap>
        <TextField
          label='hex'
          placeholder='#00ff00'
          onChange={updateColor}
          validations={[(v: string) => !!v.match(/#[a-fA-F0-9]{6}/)]}
        />
        <Circle mx={4} background={color || '#000000'} />
      </CompositeField>
    </CompositeField>
  )
}
