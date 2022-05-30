import { css } from "@emotion/css";
import { ElementType, MouseEventHandler, ReactNode } from "react";
import { Box, BoxProps } from "../Box";
import { Heading } from "../Heading";

export type ButtonProps<C extends ElementType> = BoxProps<C> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = <C extends ElementType>({
  className,
  children,
  ...props
}: ButtonProps<C>) => (
  <Box
    {...props}
    as="button"
    type="button"
    padding={8}
    classNames={[
      css`
        background-color: #000;
        border: 0;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        text-transform: uppercase;
      `,
      className,
    ]}
  >
    <Heading>{children}</Heading>
  </Box>
);
