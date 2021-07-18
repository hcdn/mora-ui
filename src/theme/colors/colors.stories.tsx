import React from 'react'
import { createRangeColor } from './colors'
import styled from 'styled-components'

export default {
  title: 'Theme/Colors'
}

interface ColorTileProps {
  color: string
}
const ColorTile = styled.div<ColorTileProps>`
  background-color: ${({ color }) => color};
  /* border: solid 1px black; */
  padding: 10px;
`

export const rangeColor = () => {
  const rangeColors = createRangeColor('#ff00ff')
  const rangeArray = Object.entries(rangeColors)
  return (
    <div>
      {rangeArray.map(([i, v]) => (
        <ColorTile color={v} key={i}>
          {v}
        </ColorTile>
      ))}
    </div>
  )
}
