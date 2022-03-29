import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

export default function ArrowDropDownFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="black" fill-opacity="0.54" />
      </svg>
    </SvgIcon>
  )
}
