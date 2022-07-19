import { css, cx } from "@emotion/css";
import { ElementType, ReactNode } from "react";
import { useTheme, Spacing, ThemeType } from "../..";

export type StackProps<C extends ElementType> =
  React.ComponentPropsWithoutRef<C> & {
    align?: "center" | "start" | "end" | "stretch";
    area?: string;
    as?: C;
    backgroundColor?: string;
    border?: string;
    borderColor?: string;
    borderRadius?: string;
    children?: ReactNode;
    className?: string;
    color?: string;
    direction?: "column" | "row";
    flex?: string;
    gap?: Spacing;
    justify?:
      | "center"
      | "start"
      | "end"
      | "space-around"
      | "space-between"
      | "space-evenly"
      | "stretch";
    padding?: Spacing;
    theme?: ThemeType;
  };

export const Stack = <C extends ElementType = "div">({
  theme = useTheme(),
  align,
  area,
  as,
  backgroundColor = "transparent",
  border,
  borderColor,
  borderRadius,
  className,
  color,
  direction = "column",
  flex,
  gap,
  justify,
  padding,
  ...props
}: StackProps<C>) => {
  const Component = as || "div";
  return (
    <Component
      className={cx(
        css`
          display: flex;
          ${align && `align-items: ${align};`}
          ${area && `grid-area: ${area};`}
          ${color && `color: ${color};`}
          ${backgroundColor && `background-color: ${backgroundColor};`}
          ${border && `border: ${border};`}
          ${borderColor && `border-color: ${borderColor};`}
          ${borderRadius && `border-radius: ${borderRadius};`}
          ${direction && `flex-direction: ${direction};`}
          ${flex && `flex: ${flex};`}
          ${gap && `gap: ${theme.spacings[gap]};`}
          ${justify && `justify-content: ${justify};`}
          ${padding && `padding: ${theme.spacings[padding]};`}
        `,
        className
      )}
      {...props}
    />
  );
};
