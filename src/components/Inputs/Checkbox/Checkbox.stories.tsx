import React, { useState } from 'react'
import { Box } from '../../Box/Box'
import { Text } from '../../Text/Text'
import { OnChangeFunction } from '../MoraInput'
import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=8%3A13'
    }
  },
  decorators: [
    (Story: any) => (
      <Box py={6} container containerSize='s' direction='column' flex space={3}>
        <Story />
      </Box>
    )
  ]
}

export const Index = () => {
  return (
    <>
      <Checkbox label='Option A' />
      <Checkbox label='Option B' />
      <Checkbox label='Option C' />
      <Text>Selected: TEST</Text>
    </>
  )
}

export const Controlled = () => {
  const [checked, setChecked] = useState({
    A: true,
    B: false,
    C: false
  })
  const handleChange: OnChangeFunction = ({ e }) => {
    console.log(e.target.name)
    console.log(e.target.checked)

    setChecked({ ...checked, [e.target.name]: e.target.checked })
  }
  return (
    <>
      <Checkbox
        name='A'
        label='Option A'
        checked={checked.A}
        onChange={handleChange}
      />
      <Checkbox
        name='B'
        label='Option B'
        checked={checked.B}
        onChange={handleChange}
      />
      <Checkbox
        name='C'
        label='Option C'
        checked={checked.C}
        onChange={handleChange}
      />
      <Text>Selected: TEST</Text>
    </>
  )
}
