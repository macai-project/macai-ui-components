import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Checkbox } from "../src/index"

export default {
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const CheckboxComponent = () => {
  return (
    <>
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </>
  )
}
