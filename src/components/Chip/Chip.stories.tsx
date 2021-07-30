import React from 'react'
import { Box } from '../Box/Box'
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


export const Index = (args: any) => (
  <Box flex container justify='center'>
    <Chip {...args}>Default</Chip>
  </Box>
)

Index.args = {
  variant: 'filled',
  label: 'click me!',
  size: 'medium'
}

const Template = (args: any) => (
  <Box space={3} flex container justify='center' direction='column' containerSize={5}>
    <Chip {...args} color='primary'>Primary</Chip>
    <Chip {...args} color='success'>Success</Chip>
    <Chip {...args} color='error'>Error</Chip>
    <Chip {...args} color='warning'>Warning</Chip>
    <Chip {...args} color='info'>Info</Chip>
    <Chip {...args} color='secondary'>Secondary</Chip>
  </Box>
)

export const Filled = Template.bind({})

Filled.args = {
  variant: 'filled',
}

export const Outline = Template.bind({})

Outline.args = {
  variant: 'outline',
}

export const Text = Template.bind({})

Text.args = {
  variant: 'text',
}
