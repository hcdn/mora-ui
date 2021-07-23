import React from 'react'
import { createRangeColor } from '../../theme/colors/colors'
import { usePalette } from './usePalette'
import { Text } from '../../components/Text/Text'
import { Box } from '../../components'

export default {
  title: 'Utils/Colors'
}

export const index = () => <Text>Utils for colors.</Text>

export const rangeColor = () => {
  const rangeColors = createRangeColor('#1c6ed5')
  const rangeArray = Object.entries(rangeColors)
  return (
    <div>
      {rangeArray.map(([i, v]) => (
        <Box p={3} background={v} key={i} flex justify='left'>
          <Box background={rangeColors.default}>
            <Text cssStyles={{ color: 'white' }}>
              {i}: {v}
            </Text>
          </Box>
        </Box>
      ))}
    </div>
  )
}

rangeColor.parameters = {
  docs: {
    description: {
      story: 'Generate colors using **createRangeColor("string")**'
    }
  }
}

export const usePaletteHOC = () => {
  const ShowTheme = () => {
    const palette = usePalette()
    return (
      <div>
        <Text>{JSON.stringify(palette)}</Text>
      </div>
    )
  }
  return <ShowTheme />
}

export const backgroundColors = () => {
  const Example = () => {
    const palette = usePalette()
    const mySelectedColor = palette.colors.red[2]
    return (
      <Box>
        <Box p={3} background='primary'>
          <Text>background="primary" (uses light version)</Text>
        </Box>
        <Box p={3} background={['primary', 'main']}>
          <Text>{'background={["primary", "main"]}'}</Text>
        </Box>
        <Box p={3} background={mySelectedColor}>
          <Text>{'background={mySelectedColor}'}</Text>
        </Box>
        <Box p={3} background='#00FF00'>
          <Text>background="#00FF00"</Text>
        </Box>
      </Box>
    )
  }
  return <Example />
}
