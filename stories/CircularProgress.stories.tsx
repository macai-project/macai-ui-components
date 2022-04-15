import { ComponentMeta } from "@storybook/react"

import { CircularProgress } from "../src/index"

export default {
  component: CircularProgress,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "inherit",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    disableShrink: {
      type: "boolean",
    },
    value: {
      type: "number",
    },
    thickness: {
      type: "number",
    },
    size: {
      type: "string",
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["determinate", "indeterminate"],
    },
  },
} as ComponentMeta<typeof CircularProgress>

const Template = (args: ComponentMeta<typeof CircularProgress>["args"]) => (
  <CircularProgress {...args} />
)

export const circularProgress = Template.bind({})
