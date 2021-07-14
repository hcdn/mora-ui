import React from 'react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: { type: 'inline-radio' }
    },
    variant: {
      table: { disable: true }
    },
    onClick: {
      table: { disable: true }
    }
  }
}

const Template = (args: ButtonProps) => <Button {...args} />

export const Filled = Template.bind({})

Filled.args = {
  variant: 'filled',
  label: 'Button',
  size: 'large'
}

export const Outline = Template.bind({})

Outline.args = {
  variant: 'outline',
  label: 'Button',
  size: 'large'
}
