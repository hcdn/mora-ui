import React from 'react'
import { Button } from '../Button/Button'
import { Text } from '../Text/Text'
import { Box } from './Box'
// import mdx from './Box.mdx'

// export default {
//   title: 'Components/Box',
//   component: Box,
//   parameters: {
//     doc: {
//       description: {
//         component: 'The box comopnent allows you crete layouts for components.'
//       }
//     }
//   }
// }

export const Index = () => (
  <Box container containerSize='m' p={4}>
    <Text>I'm inside a container.</Text>
  </Box>
)

export const FlexBox = () => (
  <Box flex space={8} justify='center' align='center'>
    <Text>Element 1.</Text>
    <Text>Element 2.</Text>
    <Button>Element 3</Button>
  </Box>
)

export const GridBox = () => (
  <Box cols container containerSize='l'>
    <Box span={3}>
      <Text>3 columns</Text>
    </Box>
    <Box span={9} cols>
      <Box span={6}>
        <Text>6 columns</Text>
      </Box>
      <Box span={3}>
        <Text>3 columns</Text>
      </Box>
    </Box>
  </Box>
)
