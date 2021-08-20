import React, { FC } from 'react'
import styled from 'styled-components'
import { Box } from '../../Box/Box'
import { BoxProps } from '../../Box/BoxTypes'
import { ClickArea } from '../../ClickArea/ClickArea'
import { Text } from '../../Text/Text'

interface FileNamesProps extends BoxProps {
  selectedFilesNames?: string
  deleteFiles?: Function
}

type FileNamesAttrsProps = FC<FileNamesProps>['arguments']

const FileNamesAttrs = ({
  selectedFilesNames,
  deleteFiles,
  ...props
}: FileNamesAttrsProps): FileNamesAttrsProps => {
  const newChildren = (
    <>
      <Text className='selectedFileNames'>{selectedFilesNames}</Text>
      <ClickArea
        sx={{
          pointerEvents: 'all',
          cursor: 'pointer',
          fontSize: '1.5rem'
        }}
        onClick={deleteFiles}
      >
        ×
      </ClickArea>
    </>
  )
  return {
    flex: true,
    align: 'center',
    noWrap: true,
    ...props,
    selectedFilesNames,
    children: newChildren
  }
}

export const FileNames = styled(Box).attrs(FileNamesAttrs)<FileNamesProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  ${Text} {
    white-space: nowrap;
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 0;
  }
`
