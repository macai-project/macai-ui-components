import React from "react"
import { ComponentMeta } from "@storybook/react"

import {
  Box,
  Divider,
  Typography
} from "../src/index"

export default {
  component: Divider,
} as ComponentMeta<typeof Divider>

export const divider = () => (
  <Box>
    <Typography>Header1</Typography>
    <Divider />
    <Typography>Header2</Typography>
  </Box>
)
