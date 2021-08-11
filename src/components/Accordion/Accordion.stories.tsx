import React, { useState } from 'react'
import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { Accordion } from './Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion,
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
      <Box flex container p={4}>
        <Story />
      </Box>
    )
  ]
}

export const Index = () => (
  <>
    <Accordion title='Data'>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        eum. Exercitationem nulla sapiente similique vero est delectus, nostrum
        id totam ratione laboriosam animi temporibus doloremque dolores
        reprehenderit voluptate! Quaerat, libero?
      </Text>
    </Accordion>
    <Accordion title='Files'>
      <ul>
        <li>C</li>
        <li>D</li>
      </ul>
    </Accordion>
  </>
)

export const Controlled = () => {
  const [expanded, setExpanded] = useState<string | null>(null)
  const handleChange =
    (id: string) => (_e: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : null)
    }
  return (
    <>
      <Accordion
        title='A'
        expanded={expanded === 'A'}
        onChange={handleChange('A')}
      >
        A content
      </Accordion>
      <Accordion
        title='B'
        expanded={expanded === 'B'}
        onChange={handleChange('B')}
      >
        B content
      </Accordion>
      <Accordion
        title='C'
        expanded={expanded === 'C'}
        onChange={handleChange('C')}
      >
        C content
      </Accordion>
    </>
  )
}
