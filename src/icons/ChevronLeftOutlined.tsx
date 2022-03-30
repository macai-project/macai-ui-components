import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

export default function ChevronLeftOutlined(props: SvgIconProps) {
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
          d="M15.705 7.41L14.295 6L8.29498 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </SvgIcon>
  )
}