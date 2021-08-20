import React from 'react'
import { Text } from '../../components/Text/Text'
import { Box, Card, TextProps } from '../../components'
import { css } from 'styled-components'
import { cssGetSize } from '../sizing/sizing'

export default {
  title: 'Utils/Styles',
  decorators: [
    (Story: any) => (
      <Box flex container justify='center' p={4}>
        <Story />
      </Box>
    )
  ]
}

export const Sx = () => {
  return (
    <Card sx={{ transform: 'rotate(45deg)' }}>
      <Text sx={{ fontSize: '15px' }}>Hi!</Text>
    </Card>
  )
}

export const CssStyles = () => {
  const style = css`
    font-size: 15px;
  `
  return (
    <Card>
      <Text css={style}>Hi!</Text>
    </Card>
  )
}

export const TypescriptCssStyles = () => {
  const style = css<TextProps>`
    font-size: ${({ p }) => cssGetSize(p || 4)};
  `
  return (
    <Card>
      <Text p={4} css={style}>
        Hi!
      </Text>
    </Card>
  )
}
