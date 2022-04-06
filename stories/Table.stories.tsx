import React from "react"
import { ComponentMeta } from "@storybook/react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "../src/index"

export default {
  component: Table,
} as ComponentMeta<typeof Table>

const items = [
  { id: "123", col1: "row11", col2: "row12", col3: "row13" },
  { id: "546", col1: "row21", col2: "row22", col3: "row23" },
  { id: "789", col1: "row31", col2: "row32", col3: "row33" },
]

export const table = () => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Header1</TableCell>
          <TableCell>Header2</TableCell>
          <TableCell>Header3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={item.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.col1}
            </TableCell>
            <TableCell component="th" scope="row">
              {item.col2}
            </TableCell>
            <TableCell component="th" scope="row">
              {item.col3}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
