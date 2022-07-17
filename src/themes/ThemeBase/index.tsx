import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Stack, StackProps } from "../..";
import { jogaVar } from "../../utils";

export type ThemeBaseProps<C extends ElementType> = StackProps<C> & {
  defaultColors?: string[];
  alternateColors?: string[];
  primaryColors?: string[];
  secondaryColors?: string[];
  successColors?: string[];
  errorColors?: string[];
  warningColors?: string[];
  spacings?: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  lineHeight?: string;
  defaultBorder?: string;
  defaultBorderRadius?: string;
};

export const ThemeBase = <C extends ElementType>({
  className,
  defaultColors = ["#fff", "#333", "#999"],
  primaryColors = ["#333", "#fff", "#999"],
  spacings = {
    xs: "2px",
    s: "4px",
    m: "8px",
    l: "16px",
    xl: "32px",
  },
  lineHeight = "1.6",
  defaultBorder = "1px solid",
  defaultBorderRadius = "4px",
  defaultInputPadding = "m",
  ...props
}: ThemeBaseProps<C>) => (
  <Stack
    backgroundColor="default-color-0"
    color="default-color-1"
    className={cx(
      css`
        & {
          --joga-xs: ${jogaVar(spacings.xs)};
          --joga-s: ${jogaVar(spacings.s)};
          --joga-m: ${jogaVar(spacings.m)};
          --joga-l: ${jogaVar(spacings.l)};
          --joga-xl: ${jogaVar(spacings.xl)};
          --joga-default-color-0: ${jogaVar(defaultColors[0])};
          --joga-default-color-1: ${jogaVar(defaultColors[1])};
          --joga-default-color-2: ${jogaVar(defaultColors[2])};
          --joga-primary-color-0: ${jogaVar(primaryColors[0])};
          --joga-primary-color-1: ${jogaVar(primaryColors[1])};
          --joga-primary-color-2: ${jogaVar(primaryColors[2])};
          --joga-line-height: ${jogaVar(lineHeight)};
          --joga-default-border: ${jogaVar(defaultBorder)};
          --joga-default-border-radius: ${jogaVar(defaultBorderRadius)};
          --joga-default-input-padding: ${jogaVar(defaultInputPadding)};
        }
      `,
      className
    )}
    {...props}
  />
);
