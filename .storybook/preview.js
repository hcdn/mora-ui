import { addDecorator } from '@storybook/react';
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

addDecorator(withThemes(ThemeProvider, [defaultLightTheme, defaultDarkTheme]))