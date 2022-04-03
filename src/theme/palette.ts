import { PaletteColorOptions, TypeAction, TypeText } from "@mui/material"

export const primary: PaletteColorOptions = {
  main: "#F7931E",
  light: "#F7B51C",
  dark: "#F15B24",
  contrastText: "#FFFFFF",
}
export const secondary: PaletteColorOptions = {
  main: "#009CC5",
  light: "#2ED3FF",
  dark: "#007594",
  contrastText: "#FFFFFF",
}
export const error: PaletteColorOptions = {
  main: "#F15B24",
  dark: "#C62828",
  contrastText: "#FFFFFF",
}
export const warning: PaletteColorOptions = {
  main: "#FF9800",
  dark: "#E65100",
  contrastText: "#FFFFFF",
}
export const info: PaletteColorOptions = {
  main: "#009CC5",
  dark: "#01579B",
  contrastText: "#FFFFFF",
}
export const success: PaletteColorOptions = {
  main: "#2EA836",
  dark: "#18581C",
  contrastText: "#FFFFFF",
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
