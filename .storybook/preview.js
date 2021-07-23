import React from 'react'
import { withThemes } from '@react-theming/storybook-addon';
import { defaultLightTheme, defaultDarkTheme } from '../src/theme/theme'
import { ThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemesDecorator = withThemes(ThemeProvider, [defaultLightTheme, defaultDarkTheme])

// const withThemeProvider = (Story, context) => {
//   return (
//       <ThemeProvider theme={defaultLightTheme}>
//         <Story {...context} />
//       </ThemeProvider>
//   )
// }

export const decorators = [withThemesDecorator]