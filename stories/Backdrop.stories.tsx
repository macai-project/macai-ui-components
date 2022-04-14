import { ComponentMeta } from "@storybook/react"
import { useState } from "react"

import { Backdrop, CircularProgress, Button } from "../src/index"

export default {
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>

const Template = (args: ComponentMeta<typeof Backdrop>["args"]) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Backdrop {...args} onClick={() => setOpen(false)} open={open}>
        <CircularProgress />
      </Backdrop>
    </>
  )
}

export const backdrop = Template.bind({})
