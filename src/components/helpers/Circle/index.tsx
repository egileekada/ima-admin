import React from "react";

export const Circle = function ({
  children,
  style,
  size = 80
}: {
  style: object;
  [x: string]: any;
}) {
  return (
    <div
      style={{
        borderRadius: 100,
        width: size,
        height: size,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        ...style
      }}
    >
      {children}
    </div>
  );
};
