import React from 'react'
import { Box } from '../Box/Box'
import { CircleButton } from './CircleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faChevronLeft,
  faCloudUploadAlt,
  faPhone,
  faPhoneSlash,
  faPlus,
  faRocket,
  faTrash,
  faUserPlus,
  faUserSlash
} from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components/CircleButton',
  component: CircleButton,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
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
  },
  decorators: [
    (Story: any) => (
      <Box flex container justify='center' space={4}>
        <Story />
      </Box>
    )
  ]
}

export const Index = (args: any) => (
  <>
    <CircleButton {...args}>
      <FontAwesomeIcon icon={faRocket} />
    </CircleButton>
  </>
)

export const Filled = () => (
  <>
    <CircleButton variant='filled' fontSize='1.4rem'>
      <FontAwesomeIcon icon={faPlus} />
    </CircleButton>
    <CircleButton variant='filled' color='success'>
      <FontAwesomeIcon icon={faPhone} />
    </CircleButton>
    <CircleButton variant='filled' color='error'>
      <FontAwesomeIcon icon={faPhoneSlash} />
    </CircleButton>
  </>
)

export const Outline = () => (
  <>
    <CircleButton variant='outline'>
      <FontAwesomeIcon icon={faCloudUploadAlt} />
    </CircleButton>
    <CircleButton variant='outline' color='success'>
      <FontAwesomeIcon icon={faUserPlus} />
    </CircleButton>
    <CircleButton variant='outline' color='error'>
      <FontAwesomeIcon icon={faUserSlash} />
    </CircleButton>
  </>
)

export const Text = () => (
  <>
    <CircleButton variant='text'>
      <FontAwesomeIcon icon={faChevronLeft} />
    </CircleButton>
    <CircleButton variant='text' color='success'>
      <FontAwesomeIcon icon={faCheck} />
    </CircleButton>
    <CircleButton variant='text' color='error'>
      <FontAwesomeIcon icon={faTrash} />
    </CircleButton>
  </>
)
