import React from "react"
import { ComponentMeta } from "@storybook/react"
import { Cancel } from "@mui/icons-material"

import { IconButton, Tooltip } from "../src/index"

export default {
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

export const TooltipComponent = () => (
  <Tooltip title="Delete">
    <IconButton>
      <Cancel />
    </IconButton>
  </Tooltip>
)
