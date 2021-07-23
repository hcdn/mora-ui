import React from 'react'
import { Box } from '../Box/Box'
import { Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=68%3A94'
    }
  }
}

export const Index = () => (
  <Box flex direction='column'>
    <Text variant='h1'>H1 Title</Text>
    <Text variant='h2'>H2 Title</Text>
    <Text variant='h3'>H3 Title</Text>
    <Text variant='h4'>H4 Title</Text>
    <Text variant='h5'>H5 Title</Text>
    <Text variant='h6'>H6 Title</Text>
    <Text variant='subtitle1'>
      Subtitle 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant='subtitle2'>
      Subtitle 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Text>
    <Text variant='body1'>
      Body 1. <b>Used for long texts.</b> Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Exercitationem officiis minus consectetur. Quam, dolorem
      sit repudiandae molestiae, consectetur voluptatum aperiam quis, recusandae
      nisi laborum nesciunt fugiat quia. Dicta, reprehenderit cumque?
    </Text>
    <Text variant='body2'>
      Body 2. <b>Used for shorter UI texts.</b> Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Exercitationem officiis minus consectetur.
    </Text>
  </Box>
)
