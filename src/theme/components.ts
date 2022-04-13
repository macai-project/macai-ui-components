import { Components } from "@mui/material/styles"
import * as palette from "./palette"

export const MuiButton: Components["MuiButton"] = {
  variants: [
    {
      props: { size: "large" },
      style: {
        fontSize: 19,
        lineHeight: "26px",
        letterSpacing: "0.46px",
        fontWeight: 600,
      },
    },
    {
      props: { size: "small" },
      style: {
        fontSize: 17,
        lineHeight: "22px",
        letterSpacing: "0.46px",
        fontWeight: 600,
      },
    },
    {
      props: { size: "large", variant: "contained" },
      style: { padding: "16px" },
    },
    {
      props: { size: "large", variant: "outlined" },
      style: {
        padding: "16px",
        border: "2px solid",
        ":hover": {
          border: "2px solid",
        },
      },
    },
    {
      props: { size: "large", variant: "text" },
      style: { padding: "16px" },
    },
    {
      props: { size: "small", variant: "text" },
      style: { padding: "4px" },
    },
  ],
}

export const MuiRadio: Components["MuiRadio"] = {
  defaultProps: {
    size: "small",
  },
}

export const MuiAppBar: Components["MuiAppBar"] = {
  variants: [
    {
      props: {},
      style: {
        boxShadow: "none",
      },
    },
  ],
}

export const MuiCssBaseline: Components["MuiCssBaseline"] = {
  styleOverrides: {
    root: {
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
    },
  },
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    "x-small": true
    "x-large": true
  }
}

export const MuiSvgIcon: Components["MuiSvgIcon"] = {
  variants: [
    { props: { fontSize: "x-small" }, style: { height: 24, width: 24 } },
    { props: { fontSize: "small" }, style: { height: 35, width: 35 } },
    { props: { fontSize: "medium" }, style: { height: 48, width: 48 } },
    { props: { fontSize: "large" }, style: { height: 64, width: 64 } },
    { props: { fontSize: "x-large" }, style: { height: 120, width: 120 } },
  ],
  styleOverrides: {
    root: {
      display: "block",
    },
  },
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

export const MuiCard: Components["MuiCard"] = {
  styleOverrides: {
    root: {
      padding: "16px",
    },
  },
  variants: [
    {
      props: { variant: "neutral" },
      style: {
        boxShadow: `0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px rgba(0, 0, 0, 0.14),
          0px 1px 3px rgba(0, 0, 0, 0.12)
        `,
      },
    },
    {
      props: { variant: "info" },
      style: {
        boxShadow: "none",
        backgroundColor: palette.secondary.shades["8p"],
      },
    },
    {
      props: { variant: "success" },
      style: {
        boxShadow: "none",
        backgroundColor: palette.success.shades["12p"],
      },
    },
    {
      props: { variant: "warning" },
      style: {
        boxShadow: "none",
        backgroundColor: palette.warning.shades["12p"],
      },
    },
    {
      props: { variant: "error" },
      style: {
        boxShadow: "none",
        backgroundColor: palette.error.shades["12p"],
      },
    },
  ],
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    "x-large": true
  }
}

export const MuiDrawer: Components["MuiDrawer"] = {
  styleOverrides: {
    root: {
      borderRadius: "4px 4px 0px 0px",
    },
  },
}

export const MuiContainer: Components["MuiContainer"] = {
  styleOverrides: {
    root: {
      paddingTop: "16px",
      paddingBottom: "16px",
    },
  },
}

export const MuiToolbar: Components["MuiToolbar"] = {
  styleOverrides: {
    dense: {
      minHeight: 44,
    },
  },
}
