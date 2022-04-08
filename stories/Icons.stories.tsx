import React from "react"
import { ComponentMeta } from "@storybook/react"
import SvgIcon from "@mui/material/SvgIcon"

import { Stack } from "../src"
import * as icons from "../src/icons"

export default {
  component: SvgIcon,
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
    fontSize: {
      control: { type: "select" },
      options: ["small", "medium", "large", "x-large"],
    },
  },
} as ComponentMeta<typeof SvgIcon>

const Template = (args: ComponentMeta<typeof SvgIcon>["args"]) => (
  <Stack gap="24px" direction="row" flexWrap="wrap">
    {Object.entries(icons).map(([name, Icon]) => (
      <Icon color={args.color} fontSize={args.fontSize} />
    ))}
  </Stack>
)

export const Icons = Template.bind({})
Icons.args = {
  color: "primary",
  fontSize: "medium",
}
