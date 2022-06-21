import { css } from "@emotion/css";
import { ElementType } from "react";
import { ThemeLight, ThemeLightProps } from "../ThemeLight";

export type ThemeDarkProps<C extends ElementType> = ThemeLightProps<C>;

export const ThemeDark = <C extends ElementType>({ ...props }: ThemeDarkProps<C>) =>
  <ThemeLight className={css`
    & {
      --joga-primary: #fff;
      --joga-foreground: #333;
      --joga-primary-button-color: var(--joga-foreground);
      --joga-primary-button-background-color: var(--joga-primary);
    }
  `} {...props} />;
