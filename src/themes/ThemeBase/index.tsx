import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Box, BoxProps } from "../../components";

export type ThemeBaseProps<C extends ElementType> = BoxProps<C> & {
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
};

export const ThemeBase = <C extends ElementType>({
  className,
  defaultColors = ["#fff", "#333", "#666"],
  primaryColors = ["#333", "#fff", "#666"],
  spacings = {
    xs: "2px",
    s: "4px",
    m: "8px",
    l: "16px",
    xl: "32px",
  },
  ...props
}: ThemeBaseProps<C>) => (
  <Box
    className={cx(
      css`
        & {
          --joga-xs: ${spacings.xs};
          --joga-s: ${spacings.s};
          --joga-m: ${spacings.m};
          --joga-l: ${spacings.l};
          --joga-xl: ${spacings.xl};

          --joga-default-color-0: ${defaultColors[0]};
          --joga-default-color-1: ${defaultColors[1]};
          --joga-default-color-2: ${defaultColors[2]};

          --joga-primary-color-0: ${primaryColors[0]};
          --joga-primary-color-1: ${primaryColors[1]};
          --joga-primary-color-2: ${primaryColors[2]};
        }
      `,
      className
    )}
    {...props}
  />
);
