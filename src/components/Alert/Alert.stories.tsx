import React from 'react'
import { Box } from '../Box/Box'
import { Alert } from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=68%3A95'
    }
  }
}

export const Index = (args: any) => (
  <Box flex container justify='center'>
    <Alert {...args}>Default</Alert>
  </Box>
)

export const Colors = (args: any) => (
  <Box
    space={3}
    flex
    container
    justify='center'
    direction='column'
    containerSize={100}
  >
    <Alert
      {...args}
      color='primary'
      title='Primay alert'
      icon='A'
      text='Texto sin color'
    />
    <Alert {...args} color='success'>
      Success color alert!
    </Alert>
    <Alert
      {...args}
      color='error'
      title='Nota rechazada'
      icon='X'
      text='Aclaración de estado'
    />
    <Alert {...args} color='warning'>
      Warning color alert!
    </Alert>
    <Alert {...args} color='info'>
      Info color alert!
    </Alert>
    <Alert {...args} color='secondary'>
      Secondary color alert!
    </Alert>
  </Box>
)
