import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Drawer, Box } from "../src/index"

export default {
  component: Drawer,
  args: {
    children: "This is a message",
  },
  argTypes: {
    anchor: {
      control: {
        type: "select",
      },
      options: ["bottom", "left", "right", "top"],
      defaultValue: "left",
    },
  },
} as ComponentMeta<typeof Drawer>

const Template = (args: ComponentMeta<typeof Drawer>["args"]) => (
  <Box py={5} height="calc(100vh - 80px)">
    <Drawer {...args} open={true}></Drawer>
  </Box>
)

export const drawer = Template.bind({})
