import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Alert } from "../src/index"

export default {
  title: "Example/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>

export const Alerts = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
    <Alert severity="error">This is an error alert — check it out!</Alert>
    <Alert severity="warning">This is a warning alert — check it out!</Alert>
    <Alert severity="info">This is an info alert — check it out!</Alert>
    <Alert severity="success">"This is a success alert — check it out!</Alert>
  </div>
)
