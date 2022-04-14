import { ComponentMeta } from "@storybook/react"

import { LinearProgress } from "../src/index"

export default {
  component: LinearProgress,
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
} as ComponentMeta<typeof LinearProgress>

const Template = (args: ComponentMeta<typeof LinearProgress>["args"]) => (
  <LinearProgress {...args} />
)

export const linearProgress = Template.bind({})
