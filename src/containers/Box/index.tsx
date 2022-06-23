import { css, cx, injectGlobal } from "@emotion/css";
import { ElementType, ReactNode } from "react";
import { jogaVar } from "../..";

injectGlobal`
  :root {
    --joga-xs: 2px;
    --joga-s: 4px;
    --joga-m: 8px;
    --joga-l: 16px;
    --joga-xl: 32px;

    --joga-default-color-0: #fff;
    --joga-default-color-1: #333;
    --joga-default-color-2: #666;
    --joga-primary-color-0: #333;
    --joga-primary-color-1: #fff;
    --joga-primary-color-2: #666;

    --joga-default-border: 1px solid;
    --joga-default-border-radius: 4px;
  }
`;

export type BoxProps<C extends ElementType> = React.ComponentPropsWithoutRef<C> & {
  align?: "center" | "start" | "end" | "stretch";
  area?: string;
  as?: C;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  children?: ReactNode;
  className?: string;
  color?: string;
  direction?: "column" | "row";
  flex?: string;
  gap?: string;
  justify?:
    | "center"
    | "start"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch";
  padding?: string;
};

export const Box = <C extends ElementType = "div">({
  align,
  area,
  as,
  backgroundColor = "transparent",
  border,
  borderRadius,
  className,
  color,
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
          ${color && `color: ${jogaVar(color)};`}
          ${backgroundColor && `background-color: ${jogaVar(backgroundColor)};`}
          ${border && `border: ${jogaVar(border)};`}
          ${borderRadius && `border-radius: ${jogaVar(borderRadius)};`}
          ${direction && `flex-direction: ${direction};`}
          ${flex && `flex: ${flex};`}
          ${gap && `gap: ${jogaVar(gap)};`}
          ${justify && `justify-content: ${justify};`}
          ${padding && `padding: ${jogaVar(padding)};`}
        `,
        className
      )}
      {...props}
    />
  );
};
