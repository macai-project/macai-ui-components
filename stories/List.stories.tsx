import React from "react"
import { ComponentMeta } from "@storybook/react"

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "../src/index"
import { ChevronRight } from "../src/icons"

export default {
  component: List,
} as ComponentMeta<typeof List>

const itemsList = [
  {
    text: "Item 1",
    icon: <ChevronRight />,
  },
  {
    text: "Item 2",
    icon: <ChevronRight />,
  },
  {
    text: "Item 3",
    icon: <ChevronRight />,
  }
];

export const list = () => (
  <List>
    {itemsList.map((item, index) => {
      const { text, icon } = item;
      return (
        <ListItem button key={text}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText primary={text} />
        </ListItem>
      );
    })}
  </List>
)
