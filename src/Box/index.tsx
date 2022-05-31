import { css, cx } from "@emotion/css";
import { ElementType, ReactNode } from "react";

export type BoxProps<C extends ElementType> =
  React.ComponentPropsWithoutRef<C> & {
    align?: "center" | "start" | "end";
    area?: string;
    as?: C;
    backgroundColor?: string;
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

export const Box = <C extends ElementType = "div">({
  align,
  area,
  as,
  backgroundColor,
  border,
  className,
  direction,
  flex,
  gap,
  justify,
  padding,
  ...props
}: BoxProps<C>) => {
  const Component = as || "div";
  return (
    <Component
      className={cx(
        css`
          display: flex;
          ${align && `align-items: ${align};`}
          ${area && `grid-area: ${area};`}
          ${backgroundColor && `background-color: ${backgroundColor};`}
          ${border && `border: ${border}px solid;`}
          ${direction && `flex-direction: ${direction};`}
          ${flex && `flex: ${flex};`}
          ${gap && `gap: ${gap}px;`}
          ${justify && `justify-content: ${justify};`}
          ${padding && `padding: ${padding}px;`}
        `,
        className
      )}
      {...props}
    />
  );
};
