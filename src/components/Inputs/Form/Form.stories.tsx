import React, { useState } from 'react'
import { Box } from '../../Box/Box'
import { Button } from '../../Button/Button'
import { Text } from '../../Text/Text'
import { TextField } from '../TextField'
import { Form } from './Form'
import { SerializedFormEvent } from './FormTypes'

export default {
  title: 'Components/Inputs/Form',
  component: Form,
  decorators: [
    (Story: any) => (
      <Box py={6} container containerSize='s' flex space={3}>
        <Story />
      </Box>
    )
  ]
}

export const SerializedForm = () => {
  const [debugFormResult, setFormResult] = useState('')

  interface FormData {
    firstName: string
    lastName: string
    details: {
      age: string
      nationality: string
    }
  }
  // handleSubmit receives a typed result
  const handleSubmit: SerializedFormEvent<FormData> = ({ e, values }) => {
    // form event is prevented by default
    console.log(e)
    // debug
    setFormResult(JSON.stringify(values))
  }
  return (
    <Form serialize onSubmit={handleSubmit}>
      <Box cols={2}>
        <TextField
          required
          defaultValue='Dolores'
          label='Nombre'
          name='firstName'
        />
        <TextField
          required
          defaultValue='Mora'
          label='Apellido'
          name='lastName'
        />
        <TextField
          required
          defaultValue='44'
          label='Edad'
          name='details[age]'
          type='number'
        />
        <TextField
          required
          defaultValue='Argentina'
          label='Nacionalidad'
          name='details[nationality]'
        />
        <Button span={2} label='Submit' type='submit' />
      </Box>
      <Box mt={6}>
        <Text>Result: {debugFormResult}</Text>
      </Box>
    </Form>
  )
}

export const InvalidInptus = () => {
  interface FormData {
    myNumbers: string
  }
  const handleSubmit: SerializedFormEvent<FormData> = ({ values }) => {
    alert(JSON.stringify(values))
  }
  // Invalid inputs prevent form submit
  return (
    <Form serialize onSubmit={handleSubmit}>
      <Box space={4} flex direction='column'>
        <TextField
          defaultValue='012345678'
          name='myNumbers'
          label='Insert 10 characters'
          required
          validations={[
            (v) => v.length >= 10 || 'You need at least 10 characters.'
          ]}
        />
        <Button label='Try submitting' type='submit' variant='outline' />
      </Box>
    </Form>
  )
}
