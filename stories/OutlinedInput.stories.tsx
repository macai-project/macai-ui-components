import React from "react"
import { ComponentMeta } from "@storybook/react"

import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "../src/index"
import { RemoveRedEye, VisibilityOff } from "../src/icons"

export default {
  component: Select,
} as ComponentMeta<typeof Select>

export const SelectComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [password, setPassword] = React.useState("")

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  return (
    <>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => handlePasswordChange(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff fontSize="x-small" />
                ) : (
                  <RemoveRedEye fontSize="x-small" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </>
  )
}
