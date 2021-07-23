import React, { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Box } from '../../components'
import { Text } from '../../components/Text/Text'
import { cssGetSize, getSize } from './sizing'

export default {
  title: 'Utils/Sizing',
  parameters: {
    docs: {
      description: {
        component:
          'getSize(5, theme) y cssGetSize(5) generan tamaños a partir del theme.'
      }
    }
  }
}

export const getSizeFunction = () => {
  const ShowValue: FC = () => {
    const theme = useContext(ThemeContext)
    const size = getSize(8, theme)
    return <Text m={0}>getSize(8, theme) === {size}</Text>
  }
  return <ShowValue />
}

export const cssGetSizeFunction = () => {
  interface CustomBoxProps {
    size: number
  }
  const CustomBox = styled.div<CustomBoxProps>`
    color: white;
    background: black;

    /* Recibiendo el valor como propiedad */
    width: ${({ size }) => cssGetSize(size)};

    /* Recibiendo el valor directamente */
    height: ${cssGetSize(2.5)};
  `

  const ShowBoxes = () => {
    const theme = useContext(ThemeContext)
    return (
      <Box container containerSize='m'>
        {Array.from(Array(31)).map((_v, i) => {
          // Get the size outside a styled function
          const size = getSize(i, theme)

          // Custom component to show size
          return (
            <Box key={i} mb={1} flex align='center' justify='left'>
              <CustomBox size={i} />
              <Text m={0} ml={2}>
                {i}: {size}
              </Text>
            </Box>
          )
        })}
      </Box>
    )
  }
  return <ShowBoxes />
}

cssGetSizeFunction.parameters = {
  docs: {
    description: {
      story: `
Es una función para utirlizar dentro de un componente styled.

cssGetSize(string | number)

- number: utiliza el número para calcular el tamaño con la función del tema.
- string: coloca ese valor exacto.
      `
    }
  }
}
