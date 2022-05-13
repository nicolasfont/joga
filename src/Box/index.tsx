import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

export type BoxProps = {
  align?: "center" | "start" | "end";
  justify?:
    | "center"
    | "start"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  children?: ReactNode;
  className?: string;
  direction?: "column" | "row";
  gap?: number;
  padding?: number;
};

export const Box = ({
  align,
  className,
  direction,
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
        ${direction && `flex-direction: ${direction};`}
        ${gap && `gap: ${gap}px;`}
        ${justify && `justify-content: ${justify};`}
        ${padding && `padding: ${padding}px;`}
      `,
      className
    )}
  />
);
