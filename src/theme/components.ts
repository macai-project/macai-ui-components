import { Components } from "@mui/material"

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

export const MuiSvgIcon: Components["MuiSvgIcon"] = {
  styleOverrides: {
    root: {
      display: "block",
    },
  },
}

export const MuiCard: Components["MuiCard"] = {
  styleOverrides: {
    root: {
      padding: "16px",
      boxShadow: "none",
    },
  },
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
      paddingY: "16px",
    },
  },
}
