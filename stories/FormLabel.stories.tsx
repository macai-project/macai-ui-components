import { FormLabel } from "@mui/material"
import { ComponentMeta } from "@storybook/react"
import React from "react"

export default {
  component: FormLabel,
} as ComponentMeta<typeof FormLabel>

export const formLabel = () => (
  <FormLabel
    sx={{
      color: "red",
    }}
  >
    Test
  </FormLabel>
)
