import { ElementType } from "react";
import { Button, ButtonProps } from "../..";

export type OutlineButtonProps<C extends ElementType> = ButtonProps<C>;

export const OutlineButton = <C extends ElementType>({
  border = "default-border",
  color = "primary-color-0",
  ...props
}: OutlineButtonProps<C>) => (
  <Button border={border} color={color} {...props} />
);
