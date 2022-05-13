import { css } from "@emotion/css";
import { Box, BoxProps } from "../Box";

export type TextProps = BoxProps;

export const Text = ({ className, ...props }: TextProps) => (
  <Box
    component="span"
    display="inline-flex"
    classNames={[
      css`
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.6;
      `,
      className,
    ]}
    {...props}
  />
);
