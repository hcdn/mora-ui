import { create } from '@storybook/theming';
import Logo from '../docs/images/mora-ui-logo-alt.png'

const baseBlue = '#1C6ED5'
const altBackground = '#F6F7FB'

export default create({
  base: 'light',

  colorPrimary: baseBlue,
  colorSecondary: baseBlue,

  // UI
  appBg: altBackground,
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  barSelectedColor: baseBlue,
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'MORA-UI',
  // brandUrl: 'https://www.hcdn.gob.ar',
  brandImage: Logo,
});