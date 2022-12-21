import React from "react"
import { mobileTheme, ThemeProvider } from "../src"
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, context) => (
    // needed because of https://github.com/mui/material-ui/issues/24282#issuecomment-1065413808
    <Emotion10ThemeProvider theme={mobileTheme}>
      <ThemeProvider theme={mobileTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  ),
]
