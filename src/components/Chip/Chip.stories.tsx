import React from 'react'
// import { Box } from '../Box/Box'
import { Chip } from './Chip'

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=17%3A141'
    }
  }
}

export const Filled = () => {
  return (
    <Chip>
      <label>A</label>
      <label>text</label>
    </Chip>
  )
}
