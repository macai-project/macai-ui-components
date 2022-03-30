import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Typography } from "../src/index"

export default {
  component: Typography,
} as ComponentMeta<typeof Typography>

export const Header = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
    <Typography variant="h1">
      Almost before we knew it, we had left the ground.
    </Typography>
    <Typography variant="h2">
      Almost before we knew it, we had left the ground.
    </Typography>
    <Typography variant="h3">
      Almost before we knew it, we had left the ground.
    </Typography>
    <Typography variant="h4">
      Almost before we knew it, we had left the ground.
    </Typography>
    <Typography variant="h5">
      Almost before we knew it, we had left the ground.
    </Typography>
    <Typography variant="h6">
      Almost before we knew it, we had left the ground.
    </Typography>
  </div>
)

export const Body = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
    <Typography variant="body1">
      Almost before we knew it, we had left the ground.
    </Typography>
    <Typography variant="body2">
      Almost before we knew it, we had left the ground.
    </Typography>
  </div>
)

export const Subtitle = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
    <Typography variant="subtitle1">
      Almost before we knew it, we had left the ground.
    </Typography>
    <Typography variant="subtitle2">
      Almost before we knew it, we had left the ground.
    </Typography>
  </div>
)

export const Caption = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
    <Typography variant="caption">
      Almost before we knew it, we had left the ground.
    </Typography>
  </div>
)

export const Overline = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
    <Typography variant="overline">
      Almost before we knew it, we had left the ground.
    </Typography>
  </div>
)
