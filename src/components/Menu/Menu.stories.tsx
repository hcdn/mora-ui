import React from 'react'
// import { Box } from '../Box/Box'
import { MenuItem, Menu } from './Menu'

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=17%3A141'
    }
  }
}

export const ExampleMenu = () => {
  return(
<Menu maxWidth={30}>
  <MenuItem selected icon="☺" label="Icono"/> 
  <MenuItem icon="☺" label="Icono"/> 
  <MenuItem icon="☺" label="Icono"/> 
  <MenuItem icon="☺" label="Icono"/> 
</Menu>
  )
  
}
