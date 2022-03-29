import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Radio, RadioGroup as _RadioGroup } from "../src/index"
import { FormControlLabel } from "@mui/material"

export default {
  title: "Example/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>

export const RadioGroup = () => (
  <_RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="pizza"
    name="radio-buttons-group"
  >
    <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
    <FormControlLabel value="sushi" control={<Radio />} label="Sushi" />
    <FormControlLabel value="hamburger" control={<Radio />} label="Hamburger" />
  </_RadioGroup>
)
