import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Badge } from "../src/index"
import { Mail } from "../src/icons"

export default {
  component: Badge,
} as ComponentMeta<typeof Badge>

export const Standard = () => (
  <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="primary"
    >
      <Mail />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="secondary"
    >
      <Mail />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="error"
    >
      <Mail />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="warning"
    >
      <Mail />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="info"
    >
      <Mail />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="success"
    >
      <Mail />
    </Badge>
  </div>
)

export const Dot = () => (
  <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="primary"
    >
      <Mail />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="secondary"
    >
      <Mail />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="error"
    >
      <Mail />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="warning"
    >
      <Mail />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="info"
    >
      <Mail />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="success"
    >
      <Mail />
    </Badge>
  </div>
)
