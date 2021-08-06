import React, { useState } from 'react'
import { Box } from '../../Box/Box'
import { Text } from '../../Text/Text'
import { OnChangeFunction } from '../MoraInput'
import { SelectField } from './SelectField'

export default {
  title: 'Components/Inputs/SelectField',
  component: SelectField,
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
  const [inputValue, setInputValue] = useState(undefined)
  const handleChange: OnChangeFunction = (e) => {
    setInputValue(e.value)
  }
  return (
    <>
      <SelectField
        mb={4}
        label='My label'
        options={[
          { value: 1, label: 'Uno' },
          { value: 2, label: 'Dos' },
          { value: 3, label: 'Tres' }
        ]}
        value={inputValue}
        onChange={handleChange}
      />
      <Text>Selected value: {inputValue}</Text>
    </>
  )
}
