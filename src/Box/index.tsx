import { css, cx } from "@emotion/css";
import { ReactNode } from "react";

type BoxProps = {
  children?: ReactNode;
  className?: string;
  direction?: "column" | "row";
  gap?: number;
};

export const Box = ({ className, direction, gap, ...props }: BoxProps) => (
  <div
    className={cx(
      css`
        display: flex;
        ${direction && `flex-direction: ${direction};`}
        ${gap && `gap: ${gap}px`}
      `,
      className
    )}
    {...props}
  />
);
