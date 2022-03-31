import React from "react"
import { ComponentMeta } from "@storybook/react"
import { SvgIcon } from "@mui/material"

import { Stack, IconButton } from "../src"
import * as icons from "../src/icons"

export default {
  component: IconButton,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "action",
        "text",
      ],
    },
  },
} as ComponentMeta<typeof SvgIcon>

const Template = (args: ComponentMeta<typeof SvgIcon>["args"]) => (
  <Stack gap="24px" direction="row" flexWrap="wrap">
    {Object.entries(icons).map(([name, Icon]) => (
      <IconButton>
        <Icon color={args.color} />
      </IconButton>
    ))}
  </Stack>
)

export const iconButtons = Template.bind({})
iconButtons.args = {
  color: "primary",
}
