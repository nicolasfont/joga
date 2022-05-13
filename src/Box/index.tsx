import { css, cx } from "@emotion/css";
import { ReactNode, ElementType } from "react";

export type BoxProps = {
  align?: "center" | "start" | "end";
  display?: "flex" | "inline-flex";
  justify?:
    | "center"
    | "start"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  children?: ReactNode;
  className?: string;
  classNames?: Array<string | undefined>;
  component?: ElementType;
  direction?: "column" | "row";
  gap?: number;
};

export const Box = ({
  align,
  className,
  classNames = [],
  component: Component = "div",
  direction,
  display = "flex",
  gap,
  justify,
  ...props
}: BoxProps) => (
  <Component
    className={cx(
      css`
        display: ${display};
        ${align && `align-items: ${align};`}
        ${direction && `flex-direction: ${direction};`}
        ${gap && `gap: ${gap}px;`}
        ${justify && `justify-content: ${justify};`}
      `,
      className,
      ...classNames
    )}
    {...props}
  />
);
