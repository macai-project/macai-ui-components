import { createTheme } from "@mui/material"
import * as typography from "./typography"
import * as palette from "./palette"
import * as components from "./components"

export const mobileTheme = createTheme({
  palette,
  typography,
  components,
})

export const desktopTheme = createTheme({
  palette,
  typography,
  components,
})
