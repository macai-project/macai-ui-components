import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Alert } from "../src/index"

export default {
  component: Alert,
  args: {
    children: "This is a message",
  },
  argTypes: {
    severity: {
      control: {
        type: "select",
      },
      options: ["info", "error", "warning", "success"],
    },
  },
} as ComponentMeta<typeof Alert>

const Template = (args: ComponentMeta<typeof Alert>["args"]) => (
  <Alert {...args} />
)

export const Info = Template.bind({})
Info.args = {
  severity: "info",
}

export const Error = Template.bind({})
Error.args = {
  severity: "error",
}

export const Warning = Template.bind({})
Warning.args = {
  severity: "warning",
}

export const Success = Template.bind({})
Success.args = {
  severity: "success",
}
