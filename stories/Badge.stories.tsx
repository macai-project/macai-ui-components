import React from "react"
import { ComponentMeta } from "@storybook/react"

import { Badge } from "../src/index"
import { MailFilled } from "../src/icons"

export default {
  title: "Example/Badge",
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
      <MailFilled />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="secondary"
    >
      <MailFilled />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="error"
    >
      <MailFilled />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="warning"
    >
      <MailFilled />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="info"
    >
      <MailFilled />
    </Badge>
    <Badge
      variant="standard"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      badgeContent="42"
      color="success"
    >
      <MailFilled />
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
      <MailFilled />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="secondary"
    >
      <MailFilled />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="error"
    >
      <MailFilled />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="warning"
    >
      <MailFilled />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="info"
    >
      <MailFilled />
    </Badge>
    <Badge
      variant="dot"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      color="success"
    >
      <MailFilled />
    </Badge>
  </div>
)
