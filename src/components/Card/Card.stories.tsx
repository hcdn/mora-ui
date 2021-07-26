import React from 'react'
import { Text } from '../Text/Text'
import { Card } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=63%3A119'
    },
    docs: {
      description: {
        // TODO: cambiar variantes de Card, ver si outline y background son propiedades separadas
        component: `The card component is an extension of the Box component. It has four
          main variants:
          <ul>
            <li>outline (default)</li>
            <li>filled</li>
            <li>secondary</li>
            <li>none (invisible)</li>
          </ul>
          `
      }
    }
  }
}

export const Index = () => (
  <Card cols container containerSize='l'>
    <Card variant='none' span={6} flex direction='column' align='left'>
      <Text variant='h6'>Outline & invisible card</Text>
      <Card variant='filled' grow p={0}>
        <Text variant='body1' />
      </Card>
    </Card>
    <Card variant='secondary' span={6} flex space={4} direction='column'>
      <Text variant='h6'>Secondary card</Text>
      <Card variant='filled' elevationHover={2} borderRadius={4} p={4}>
        <Text>Filled card One</Text>
      </Card>
      <Card variant='filled' elevationHover={2} borderRadius={4} p={4}>
        <Text>Filled card Two</Text>
      </Card>
      <Card variant='filled' elevationHover={2} borderRadius={4} p={4}>
        <Text>Filled card Three</Text>
      </Card>
    </Card>
  </Card>
)
