import React, { useState } from 'react'
import { Button } from '../Button/Button'
// import { Box } from '../Box/Box'
import { MenuItem, Menu } from './Menu'

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o2XarByGc3Ba58PpOk3mYm/Libreria-de-UI?node-id=68%3A96'
    }
  }
}

export const ExampleMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <Menu width={40} closedSize={12} closed={toggleMenu}>
        <MenuItem icon=' ' label='Files' />
        <MenuItem icon='☺' label='Archive' />
        <MenuItem selected icon='☺' label='Directory' />
        <MenuItem icon='☺' label='' />
      </Menu>

      <Button mt={4} size='small' onClick={() => setToggleMenu(!toggleMenu)}>
        Toggle!
      </Button>
    </>
  )
}

export const WithSubMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <Menu width={40} closedSize={12} closed={toggleMenu}>
        <MenuItem
          icon=' '
          label='Files'
          selected
          subMenu={
            <Menu width={40}>
              <MenuItem label='File 1' />
              <MenuItem label='File 2' />
            </Menu>
          }
        />
        <MenuItem icon='☺' label='Archive' />
        <MenuItem icon='☺' label='Directory' />
        <MenuItem icon='☺' label='' />
      </Menu>

      <Button mt={4} size='small' onClick={() => setToggleMenu(!toggleMenu)}>
        Toggle!
      </Button>
    </>
  )
}
