import { Components } from "@mui/material"

export const MuiButton: Components["MuiButton"] = {
  variants: [
    {
      props: { size: "large" },
      style: { fontSize: 19 },
    },
    {
      props: { size: "small" },
      style: { fontSize: 17 },
    },
    {
      props: { size: "large", variant: "contained" },
      style: { padding: "16px 32px" },
    },
    {
      props: { size: "large", variant: "outlined" },
      style: {
        padding: "16px 32px",
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

export const MuiSvgIcon: Components["MuiSvgIcon"] = {
  styleOverrides: {
    root: {
      display: "block",
    },
  },
}
