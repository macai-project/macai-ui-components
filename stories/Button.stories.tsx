import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Button } from "../src/index"

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>

export const Large = () => (
  <div
    style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 25 }}
  >
    <Button size="large" variant="contained">
      Click me
    </Button>
    <Button size="large" variant="contained" disabled>
      Click me
    </Button>
    <Button size="large" variant="outlined">
      Click me
    </Button>
    <Button size="large" variant="text">
      Click me
    </Button>
  </div>
)

export const Small = () => (
  <div
    style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 25 }}
  >
    <Button size="small" variant="contained">
      Click me
    </Button>
    <Button size="small" variant="contained" disabled>
      Click me
    </Button>
    <Button size="small" variant="outlined">
      Click me
    </Button>
    <Button size="small" variant="text">
      Click me
    </Button>
  </div>
)
