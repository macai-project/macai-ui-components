import React from "react"
import { ComponentMeta } from "@storybook/react"

import { LoadingButton, Stack } from "../src/index"

export default {
  component: LoadingButton,
} as ComponentMeta<typeof LoadingButton>

export const LoadingButtonMUI = () => {
  async function a() {
    await new Promise((res) => {
      setTimeout(res, 2000)
    })

    alert("done")
  }

  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton loading onClick={a} variant="outlined">
        Click me
      </LoadingButton>
    </Stack>
  )
}
