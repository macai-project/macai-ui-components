// @ts-ignore
import Paper from "@mui/material/Paper"
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon"

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    "x-small": true
    "x-large": true
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    neutral: true
    info: true
    success: true
    warning: true
    error: true
  }
}
