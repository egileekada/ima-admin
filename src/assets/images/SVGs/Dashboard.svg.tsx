import * as React from "react";

export const DashboardSVG = ({ fill = "#0C0507", ...rest }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M17.54 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM6.46 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM17.54 21.11a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM6.46 21.11a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
      fill={fill}
    />
  </svg>
);
