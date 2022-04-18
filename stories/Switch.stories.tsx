import Switch from "@mui/material/Switch"
import { ComponentMeta } from "@storybook/react"
import React from "react"

export default {
  component: Switch,
} as ComponentMeta<typeof Switch>

export const SwitchComponent = () => {
  const [checked, setChecked] = React.useState<boolean>(false)
  return <Switch checked={checked} onChange={() => setChecked(!checked)} />
}
