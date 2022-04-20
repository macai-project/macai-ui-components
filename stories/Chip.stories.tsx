import { Cancel } from "@mui/icons-material"
import { Chip } from "@mui/material"
import { ComponentMeta } from "@storybook/react"
import React from "react"

export default {
  component: Chip,
} as ComponentMeta<typeof Chip>

export const ChipComponent = () => {
  const [value, setValue] = React.useState<string[]>(["1", "2", "3"])
  const handleDelete = (chipToDelete: string) => {
    const chipFiltered: string[] = value
      ? value.filter((chip) => chip !== chipToDelete)
      : []
    setValue(chipFiltered)
  }

  return (
    <>
      {value.map((item) => (
        <Chip
          sx={{
            marginRight: "8px",
            marginBottom: "16px",
            backgroundColor: "red",
          }}
          label={item}
          onDelete={() => handleDelete(item)}
          deleteIcon={<Cancel fontSize="inherit" />}
        />
      ))}
    </>
  )
}
