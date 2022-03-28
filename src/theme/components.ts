import { Components } from "@mui/material"

export const MuiButton: Components["MuiButton"] = {
  variants: [
    {
      props: { size: "large" },
      style: { fontSize: 19 },
    },
    {
      props: { size: "small" },
      style: { fontSize: 17 },
    },
    {
      props: { size: "large", variant: "contained" },
      style: { padding: "16px 32px" },
    },
    {
      props: { size: "large", variant: "outlined" },
      style: {
        padding: "16px 32px",
        border: "2px solid",
        ":hover": {
          border: "2px solid",
        },
      },
    },
    {
      props: { size: "large", variant: "text" },
      style: { padding: "16px" },
    },
    {
      props: { size: "small", variant: "text" },
      style: { padding: "4px" },
    },
  ],
}
