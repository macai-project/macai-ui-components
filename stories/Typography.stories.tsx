import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Typography } from "../src/index"

export default {
  component: Typography,
  args: {
    children: "Almost before we knew it, we had left the ground.",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body1",
        "body2",
        "subtitle1",
        "subtitle2",
        "caption",
        "overline",
      ],
    },
  },
} as ComponentMeta<typeof Typography>

const Template = (args: ComponentMeta<typeof Typography>["args"]) => (
  <Typography {...args} />
)

export const typography = Template.bind({})
typography.args = {
  variant: "h4",
}
