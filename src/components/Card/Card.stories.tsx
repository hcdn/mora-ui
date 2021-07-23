import React from 'react'
import { Box } from '../Box/Box'
import { Card } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=63%3A119'
    }
  }
}

export const Index = () => (
  <Card cols>
    <Box span={6} flex align='center'>
      The card component is an extension of the Box component. It has three main
      variants: outline (default), filled, secondary.
    </Box>
    <Card variant='secondary' span={6} flex space={1} direction='column'>
      <div>Example notifications</div>
      <Card variant='filled' elevationHover={2} borderRadius={2} p={2}>
        One
      </Card>
      <Card variant='filled' elevationHover={2} borderRadius={2} p={2}>
        Two
      </Card>
      <Card variant='filled' elevationHover={2} borderRadius={2} p={2}>
        Three
      </Card>
    </Card>
  </Card>
)
