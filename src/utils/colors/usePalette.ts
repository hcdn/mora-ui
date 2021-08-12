import { useContext } from 'react'
import { ThemeContext, DefaultTheme } from 'styled-components'

export const usePalette = (): DefaultTheme['palette'] => {
  const theme = useContext(ThemeContext)
  return theme.palette
}
