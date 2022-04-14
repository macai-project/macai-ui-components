import React from "react"
import { ComponentMeta } from "@storybook/react"

import { TextField, TextFieldProps } from "../src/index"

export default {
  component: TextField,
  args: {
    variant: "filled",
  },
} as ComponentMeta<typeof TextField>

const Template = (args: TextFieldProps) => <TextField {...args} />

export const Text = Template.bind({})
Text.args = {
  label: "Username",
}

export const Password = Template.bind({})
Password.args = {
  type: "password",
  label: "PIN",
}
