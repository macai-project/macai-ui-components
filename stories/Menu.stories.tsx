import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Button, Menu, MenuItem } from "../src/index"

export default {
  component: Menu,
} as ComponentMeta<typeof Menu>

export const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu id="basic-menu" open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Test1</MenuItem>
        <MenuItem onClick={handleClose}>Test2</MenuItem>
      </Menu>
    </>
  )
}
