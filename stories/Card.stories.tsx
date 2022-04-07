import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Card, Typography } from "../src/index"

export default {
  component: Card,
  args: {
    children: <Typography variant="body1">content of the card</Typography>,
  },
} as ComponentMeta<typeof Card>

const Template = (args: ComponentMeta<typeof Card>["args"]) => (
  <Card {...args} />
)

export const neutral = Template.bind({})
neutral.args = {
  variant: "neutral",
}
export const info = Template.bind({})
info.args = {
  variant: "info",
}
export const success = Template.bind({})
success.args = {
  variant: "success",
}
export const warning = Template.bind({})
warning.args = {
  variant: "warning",
}
export const error = Template.bind({})
error.args = {
  variant: "error",
}
