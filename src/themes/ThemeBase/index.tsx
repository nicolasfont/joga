import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Box, BoxProps } from "../../components";
import { jogaVar } from "../../utils";

export type ThemeBaseProps<C extends ElementType> = BoxProps<C> & {
  primaryButtonColor?: string;
  primaryButtonBackgroundColor?: string;
  primaryColor?: string;
  foregroundColor?: string;
};

export const ThemeBase = <C extends ElementType>({
  className,
  foregroundColor = "#fff",
  primaryButtonColor = "foreground-color",
  primaryButtonBackgroundColor = "primary-color",
  primaryColor = "#333",
  ...props
}: ThemeBaseProps<C>) => (
  <Box
    className={cx(
      css`
        & {
          --joga-foreground-color: ${jogaVar(foregroundColor)};
          --joga-primary-button-color: ${jogaVar(primaryButtonColor)};
          --joga-primary-button-background-color: ${jogaVar(
            primaryButtonBackgroundColor
          )};
          --joga-primary-color: ${jogaVar(primaryColor)};
        }
      `,
      className
    )}
    {...props}
  />
);
