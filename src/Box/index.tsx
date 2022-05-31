import { css, cx } from "@emotion/css";
import { ElementType, ReactNode } from "react";

export type BoxProps<C extends ElementType> = React.ComponentPropsWithoutRef<C> & {
  align?: "center" | "start" | "end";
  area?: string;
  as?: C;
  border?: number;
  children?: ReactNode;
  className?: string;
  classNames?: Array<string | undefined>;
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
  border,
  className,
  classNames = [],
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
          ${border && `border: ${border}px solid;`}
          ${direction && `flex-direction: ${direction};`}
          ${flex && `flex: ${flex};`}
          ${gap && `gap: ${gap}px;`}
          ${justify && `justify-content: ${justify};`}
          ${padding && `padding: ${padding}px;`}
        `,
        ...classNames,
        className
      )}
      {...props}
    />
  );
};
