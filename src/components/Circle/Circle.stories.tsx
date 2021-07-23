import React from 'react'
import { usePalette } from '../../utils/colors/usePalette'
import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { Circle } from './Circle'

export default {
  title: 'Components/Circle',
  component: Circle,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=68%3A94'
    }
  }
}

export const Index = () => {
  const ExampleCircle = () => {
    const palette = usePalette()
    const primaryLight = palette.main.primary.light
    return (
      <Box flex container align='center' justify='center' space={4}>
        <Circle background={primaryLight}>
          <Text>10</Text>
        </Circle>
        <Circle size={15} background='error'>
          <Text>15</Text>
        </Circle>
        <Circle size={20} background={['primary', 'main']}>
          <Text>20</Text>
        </Circle>
      </Box>
    )
  }
  return <ExampleCircle />
}
