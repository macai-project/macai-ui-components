import { createTheme } from "@mui/material/styles"
import * as typographyMobile from "./typographyMobile"
import * as typographyDesktop from "./typographyDesktop"
import * as palette from "./palette"
import * as components from "./components"
import * as mixins from "./mixins"

export const mobileTheme = createTheme({
  palette,
  typography: typographyMobile,
  mixins: mixins.mobileMixins,
  components,
})

export const desktopTheme = createTheme({
  palette,
  typography: typographyDesktop,
  components,
})
