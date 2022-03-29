import React from "react"
import { ComponentMeta } from "@storybook/react"

import {
  DesktopDatePicker,
  LocalizationProvider,
  TextField,
  AdapterDateFns,
} from "../src/index"

export default {
  title: "Example/Input",
  component: DesktopDatePicker,
} as ComponentMeta<typeof DesktopDatePicker>

export const NoPicker = () => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        views={["day", "month", "year"]}
        label="Data di scadenza"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
        disableOpenPicker
      />
    </LocalizationProvider>
  )
}

export const WithPicker = () => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        views={["day", "month", "year"]}
        label="Data di scadenza"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
