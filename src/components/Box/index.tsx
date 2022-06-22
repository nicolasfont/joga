import { css, cx, injectGlobal } from "@emotion/css";
import { ElementType, ReactNode } from "react";

injectGlobal`
  :root {
    --joga-primary: #333;
    --joga-foreground: #fff;

    --joga-xs: 2px;
    --joga-s: 4px;
    --joga-m: 8px;
    --joga-l: 16px;
    --joga-xl: 32px;
  }
`;

export type BoxProps<C extends ElementType> = React.ComponentPropsWithoutRef<C> & {
  align?: "center" | "start" | "end" | "stretch";
  area?: string;
  as?: C;
  backgroundColor?: string;
  border?: number;
  children?: ReactNode;
  className?: string;
  color?: string;
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
          ${color && `color: var(--joga-${color}, ${color});`}
          ${backgroundColor && `background-color: var(--joga-${backgroundColor}, ${backgroundColor});`}
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
