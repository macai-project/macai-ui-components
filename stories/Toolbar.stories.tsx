import { ComponentMeta } from "@storybook/react"

import { Toolbar } from "../src/index"

export default {
  component: Toolbar,
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["dense", "regular"],
    },
  },
} as ComponentMeta<typeof Toolbar>

const Template = (args: ComponentMeta<typeof Toolbar>["args"]) => (
  <Toolbar
    {...args}
    sx={{
      bgcolor: "antiquewhite",
    }}
  />
)

export const toolbar = Template.bind({})
toolbar.args = {
  variant: "regular",
}
