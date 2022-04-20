import React from "react"
import { ComponentMeta } from "@storybook/react"

import { MenuItem, TextField } from "../src/index"

export default {
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>

const items = ["1", "2", "3"]

type MenuItemComponentProps = {
  id: string
  value: string
}

export const MenuItemComponent = () => {
  const [value, setValue] = React.useState<string>("1")
  return (
    <TextField
      id="Items"
      sx={{ display: "flex", marginBottom: "16px", zIndex: 2 }}
      select
      label="Items"
      value={value}
      onChange={(event) => setValue(event.target.value as string)}
    >
      {items.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}
