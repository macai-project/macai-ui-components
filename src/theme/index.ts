import { createTheme } from "@mui/material"
import * as typographyMobile from "./typographyMobile"
import * as typographyDesktop from "./typographyDesktop"
import * as palette from "./palette"
import * as components from "./components"

export const mobileTheme = createTheme({
  palette,
  typography: typographyMobile,
  components,
})

export const desktopTheme = createTheme({
  palette,
  typography: typographyDesktop,
  components,
})
