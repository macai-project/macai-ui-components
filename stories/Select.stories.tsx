import React from "react"
import { ComponentMeta } from "@storybook/react"

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormHelperText,
} from "../src/index"

export default {
  component: Select,
} as ComponentMeta<typeof Select>

export const SelectComponent = () => {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-label">Age</InputLabel>
        <Select
          labelId="demo-label"
          id="demo-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Select age</FormHelperText>
      </FormControl>
    </>
  )
}
