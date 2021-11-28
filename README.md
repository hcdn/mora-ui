# mora-ui

> mora-ui es una librería de código abierto pensada para la creación de aplicaciones en la [Cámara de Diputados de la Nación - Argentina](https://www.hcdn.gob.ar).

[![NPM](https://img.shields.io/npm/v/mora-ui.svg)](https://www.npmjs.com/package/mora-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License](https://img.shields.io/github/license/hcdn/mora-ui?style=flat)](https://github.com/hcdn/mora-ui/blob/main/LICENSE)
[![Github](https://shields.io/badge/hcdn-mora--ui-blue?logo=github&style=flat)](https://github.com/hcdn/mora-ui)

## Install

```bash
npm i mora-ui styled-components
```

## Usage

```tsx
import * as React from 'react';
import ReactDOM from 'react-dom';

import {Box, Text, defaultLightTheme, MoraGlobalStyle} from 'mora-ui'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={defaultLightTheme}>
      <MoraGlobalStyle />
      <Box p={4}>
        <Text variant='h6'>MORA UI</Text>
      </Box>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Documentation

[Documentation Storybook](https://main--614c815a6d4096003a977ae9.chromatic.com/?path=/docs/)

## License

MIT © [Honorable Cámara de Diputados de la Nación](https://github.com/hcdn)
