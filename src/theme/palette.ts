import {
  SimplePaletteColorOptions,
  TypeAction,
  TypeText,
} from "@mui/material/styles"

export const primary: SimplePaletteColorOptions = {
  main: "#F7931E",
  light: "#F7B51C",
  dark: "#F15B24",
  contrastText: "#FFFFFF",
}
export const secondary = {
  main: "#009CC5",
  light: "#2ED3FF",
  dark: "#007594",
  contrastText: "#FFFFFF",
  shades: { "8p": "rgba(0, 156, 197, 0.08)" },
}
export const error = {
  main: "#F15B24",
  dark: "#C62828",
  contrastText: "#FFFFFF",
  shades: { "12p": "rgba(241, 91, 36, 0.12)" },
}
export const warning = {
  main: "#FF9800",
  dark: "#E65100",
  contrastText: "#FFFFFF",
  shades: { "12p": "rgba(237, 108, 2, 0.12)" },
}
export const info = {
  main: "#009CC5",
  dark: "#01579B",
  contrastText: "#FFFFFF",
}
export const success = {
  main: "#2EA836",
  dark: "#18581C",
  contrastText: "#FFFFFF",
  shades: { "12p": "rgba(46, 125, 50, 0.12)" },
}
export const action: Partial<TypeAction> = {
  active: "rgba(0, 0, 0, 0.54)",
  hover: "rgba(0, 0, 0, 0.04)",
  selected: "rgba(0, 0, 0, 0.08)",
  disabled: "rgba(0, 0, 0, 0.26)",
  disabledBackground: "rgba(0, 0, 0, 0.12)",
  focus: "rgba(0, 0, 0, 0.12)",
}
export const text: Partial<TypeText> = {
  primary: "rgba(0, 0, 0, 0.87)",
  secondary: "rgba(0, 0, 0, 0.6)",
  disabled: "rgba(0, 0, 0, 0.38)",
}
