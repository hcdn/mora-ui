import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['medium', 'small'],
      control: { type: 'inline-radio' }
    },
    variant: {
      table: { disable: true }
    },
    onClick: {
      table: { disable: true }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=17%3A53'
    }
  }
}

const Template = (args: any) => (
  <>
    <Button {...args} label='Primary' color='primary' />
    <Button {...args} label='Success' color='success' />
    <Button {...args} label='Error' color='error' />
    <Button {...args} label='Warning' color='warning' />
  </>
)

export const Filled = Template.bind({})

Filled.args = {
  variant: 'filled',
  label: 'Button',
  size: 'medium'
}

export const Outline = Template.bind({})

Outline.args = {
  variant: 'outline',
  label: 'Button',
  size: 'medium'
}

export const Text = Template.bind({})

Text.args = {
  variant: 'text',
  label: 'BUTTON',
  size: 'medium'
}
