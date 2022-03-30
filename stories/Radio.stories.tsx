import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Radio, RadioGroup as RadioGroup } from "../src/index"
import { FormControlLabel } from "@mui/material"

export default {
  component: Radio,
} as ComponentMeta<typeof Radio>

export const radio = () => (
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="pizza"
    name="radio-buttons-group"
  >
    <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
    <FormControlLabel value="sushi" control={<Radio />} label="Sushi" />
    <FormControlLabel value="hamburger" control={<Radio />} label="Hamburger" />
  </RadioGroup>
)
