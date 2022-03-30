import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

export default function Promotion(props: SvgIconProps) {
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
          d="M23 12.49L20.56 9.7L20.9 6.01L17.29 5.19L15.4 2L12 3.46L8.6 2L6.71 5.19L3.1 6L3.44 9.7L1 12.49L3.44 15.28L3.1 18.98L6.71 19.8L8.6 23L12 21.53L15.4 22.99L17.29 19.8L20.9 18.98L20.56 15.29L23 12.49ZM19.05 13.97L18.49 14.62L18.57 15.47L18.75 17.42L16.85 17.85L16.01 18.04L15.57 18.78L14.58 20.46L12.8 19.69L12 19.35L11.21 19.69L9.43 20.46L8.44 18.79L8 18.05L7.16 17.86L5.26 17.43L5.44 15.47L5.52 14.62L4.96 13.97L3.67 12.5L4.96 11.02L5.52 10.37L5.43 9.51L5.25 7.57L7.15 7.14L7.99 6.95L8.43 6.21L9.42 4.53L11.2 5.3L12 5.64L12.79 5.3L14.57 4.53L15.56 6.21L16 6.95L16.84 7.14L18.74 7.57L18.56 9.52L18.48 10.37L19.04 11.02L20.33 12.49L19.05 13.97Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </SvgIcon>
  )
}