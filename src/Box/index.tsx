import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

export type BoxProps = {
  align?: "center" | "start" | "end";
  area?: string;
  border?: number;
  children?: ReactNode;
  className?: string;
  direction?: "column" | "row";
  flex?: string;
  gap?: number;
  justify?:
    | "center"
    | "start"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  padding?: number;
};

export const Box = ({
  align,
  area,
  border,
  className,
  direction,
  flex,
  gap,
  justify,
  padding,
  ...props
}: BoxProps) => (
  <div
    {...props}
    className={cx(
      css`
        display: flex;
        ${align && `align-items: ${align};`}
        ${area && `grid-area: ${area};`}
        ${border && `border: ${border}px solid;`}
        ${direction && `flex-direction: ${direction};`}
        ${flex && `flex: ${flex};`}
        ${gap && `gap: ${gap}px;`}
        ${justify && `justify-content: ${justify};`}
        ${padding && `padding: ${padding}px;`}
      `,
      className
    )}
  />
);
