import { css } from "@emotion/css";
import { ReactNode } from "react";
import { Box } from "../Box";

export const ThemeDark = ({ children }: { children?: ReactNode }) => {
  return <Box className={css`
    & {
      --joga-button-background-color-default: #333;
      --joga-button-border-default: 1px solid #333;
      --joga-button-border-radius-default: 4px;
      --joga-button-color-default: #fff;
    }
  `}>{children}</Box>;
};
