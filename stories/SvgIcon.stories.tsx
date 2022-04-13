import { ComponentMeta } from "@storybook/react"

import { SvgIcon } from "../src/"

export default {
  component: SvgIcon,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      defaultValue: "primary",
      options: [
        "inherit",
        "action",
        "disabled",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    fontSize: {
      control: {
        type: "select",
      },
      defaultValue: "medium",
      options: ["inherit", "large", "medium", "small"],
    },
  },
} as ComponentMeta<typeof SvgIcon>

const Template = (args: ComponentMeta<typeof SvgIcon>["args"]) => (
  <SvgIcon {...args}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
)

export const svgIcon = Template.bind({})
