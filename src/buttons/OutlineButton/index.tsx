import { ElementType } from "react";
import { Button, ButtonProps } from "../..";

export type OutlineButtonProps<C extends ElementType> = ButtonProps<C>;

export const OutlineButton = <C extends ElementType>({
  border = "default-border",
  color = "primary-color-0",
  borderColor = color,
  ...props
}: OutlineButtonProps<C>) => (
  <Button border={border} borderColor={borderColor} color={color} {...props} />
);
