import React from "react"
import { ComponentMeta } from "@storybook/react"

import * as icons from "../src/icons"
import { SvgIcon } from "@mui/material"

export default {
  title: "Example/SvgIcon",
  component: SvgIcon,
} as ComponentMeta<typeof SvgIcon>

export const Icons = () => (
  <div
    style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 25 }}
  >
    {Object.entries(icons).map(([_, Icon]) => (
      <Icon />
    ))}
  </div>
)
