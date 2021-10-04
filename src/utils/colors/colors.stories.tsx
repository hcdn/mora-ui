import React from 'react'
import { usePalette } from './usePalette'
import { Text } from '../../components/Text/Text'
import { Box, Card } from '../../components'
import { createRangeColor } from '.'

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
            <Text sx={{ color: 'white' }}>
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

export const TextColor = () => {
  const Example = () => {
    const palette = usePalette()
    return (
      <Box container textColor='error'>
        <Card mb={4}>
          <Text>All children will have 'error' color.</Text>
          <Text color='primary'>Manually override text color.</Text>
        </Card>
        <Text color='textDark'>Theme font dark color.</Text>
        <Text color='rgba(0, 100, 100, .7)'>Custom color.</Text>
        <Text color={palette.colors.blue[4]}>Use other color from theme.</Text>
      </Box>
    )
  }
  return <Example />
}

export const BackgroundAndTextVariants = () => {
  return (
    <Card
      container
      background='backgroundSecondary'
      textColor='backgroundSecondary'
    >
      <Text>Automatic contrast text for secondary background.</Text>
    </Card>
  )
}
