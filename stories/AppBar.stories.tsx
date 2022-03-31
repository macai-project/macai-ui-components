import React from "react"
import { ComponentMeta } from "@storybook/react"

import { AppBar, Box, Typography } from "../src/index"

export default {
  component: AppBar,
  args: {
    children: (
      <Box
        height={64}
        paddingX="16px"
        boxShadow="none"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5">Content</Typography>
      </Box>
    ),
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary"],
    },
  },
} as ComponentMeta<typeof AppBar>

const Template = (args: ComponentMeta<typeof AppBar>["args"]) => (
  <AppBar {...args}></AppBar>
)

export const appBar = Template.bind({})
appBar.args = {
  color: "primary",
}
