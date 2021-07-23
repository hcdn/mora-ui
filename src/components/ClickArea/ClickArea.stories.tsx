import React from 'react'
import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { ClickArea } from './ClickArea'

export default {
  title: 'Components/ClickArea',
  component: ClickArea,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=68%3A94'
    }
  }
}

export const Index = () => (
  <Box flex justify='center'>
    <ClickArea>
      <Text variant='h5'>This is a clickable area.</Text>
      <Text m={0}>Click me!</Text>
    </ClickArea>
  </Box>
)
