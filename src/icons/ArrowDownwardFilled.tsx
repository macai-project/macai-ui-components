import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

export default function ArrowDownwardFilled(props: SvgIconProps) {
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
          d="M20 12L18.59 10.59L13 16.17V4H11V16.17L5.42 10.58L4 12L12 20L20 12Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </SvgIcon>
  )
}
