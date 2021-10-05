import React, { useState } from 'react'
import { Box, Button, CircleButton, Text } from '..'
// import { Box } from '../Box/Box'
import { Modal } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal
}

export const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  Modal.setAppElement('#root')

  return (
    <Box p={6}>
      <Text variant='h6'>Click to open the modal.</Text>
      <Button onClick={toggleIsOpen}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        containerSize='m'
        onRequestClose={toggleIsOpen}
        closeButton
      >
        <Text>This is an example modal</Text>
      </Modal>
    </Box>
  )
}

export const Styling = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  Modal.setAppElement('#root')

  const [count, setCount] = useState(0)
  const sumCount = () => setCount(count + 1)
  const minusCount = () => setCount(count - 1)

  return (
    <Box p={6}>
      <Box flex align='center' space={4}>
        <Text mb={0} variant='h6'>
          Your current number: {count}
        </Text>
        <Button onClick={toggleIsOpen}>Edit</Button>
      </Box>
      <Modal
        isOpen={isOpen}
        containerSize='s'
        onRequestClose={toggleIsOpen}
        flex
        space={4}
        align='center'
        justify='center'
        closeButton
      >
        <CircleButton onClick={minusCount} variant='outline'>
          -
        </CircleButton>
        <Text mb={0} variant='h6'>
          Count: {count}
        </Text>
        <CircleButton onClick={sumCount} variant='outline'>
          +
        </CircleButton>
      </Modal>
    </Box>
  )
}

export const HeaderFooter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  Modal.setAppElement('#root')
  return (
    <div>
      <Button onClick={toggleIsOpen}>Edit</Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleIsOpen}
        title='Modal title'
        closeButton
        containerSize='l'
        options={
          <>
            <Button variant='text' color='info'>
              Cancel
            </Button>
            <Button variant='text' color='primary'>
              Submit
            </Button>
          </>
        }
      >
        <Box p={6} flex justify='center'>
          Modal Content
        </Box>
      </Modal>
    </div>
  )
}
