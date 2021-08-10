import React, { useState } from 'react'
import { Box } from '../../Box/Box'
import { Text } from '../../Text/Text'
import { OnChangeFunction } from '../MoraInput'
import { FileUpload } from './FileUpload'

export default {
  title: 'Components/Inputs/FileUpload',
  component: FileUpload,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=8%3A13'
    }
  },
  decorators: [
    (Story: any) => (
      <Box py={6} container containerSize='s' flex space={3}>
        <Story />
      </Box>
    )
  ]
}

export const SingleFile = () => {
  const [inputValue, setInputValue] = useState<FileList | null>(null)
  const handleChange: OnChangeFunction = ({ value }) => {
    setInputValue(value[0].name)
  }
  return (
    <>
      <FileUpload
        mb={4}
        label='My label'
        value={inputValue}
        onChange={handleChange}
      />
      <Text>Selected value: {inputValue}</Text>
    </>
  )
}

export const MultipleFiles = () => {
  const [inputValue, setInputValue] = useState<File[] | null>(null)
  const handleChange: OnChangeFunction = (data) => {
    const files = Array.from<File>(data.value)
    setInputValue(files)
  }
  const fileNames = inputValue ? inputValue.map((file) => file.name) : []
  return (
    <>
      <FileUpload
        mb={4}
        label='Upload files'
        multiple
        value={inputValue}
        onChange={handleChange}
        helperText='Select some files to test the component.'
      />
      <Box>
        <Text>(Debug) Files:</Text>
        <ul>
          {fileNames.map((name, key) => (
            <li key={key}>
              <Text>{name}</Text>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}
