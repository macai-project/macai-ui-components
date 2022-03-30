import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

export default function WarningFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </SvgIcon>
  )
}