import { css, injectGlobal } from "@emotion/css";
import { ReactNode, useEffect } from "react";
import { Box } from "../Box";

export const ThemeLight = ({ children }: { children?: ReactNode }) => {
  return <Box className={css`
    & {
      --joga-button-background-color-default: #fff;
      --joga-button-border-default: 1px solid #333;
      --joga-button-border-radius-default: 4px;
      --joga-button-color-default: #000;
    }
  `}>{children}</Box>;
};
