import { ComponentMeta } from "@storybook/react"
import React from "react"

import { Button, Dialog, DialogActions, DialogTitle } from "../src/index"

export default {
  component: Dialog,
} as ComponentMeta<typeof Dialog>

export const DialogComponent = () => {
  const [openDialog, setOpenDialog] = React.useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want accept this conditions"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Disagree</Button>
          <Button onClick={() => setOpenDialog(false)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
