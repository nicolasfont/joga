import { ElementType } from "react";
import { Button, ButtonProps } from "../..";

export type PrimaryButtonProps<C extends ElementType> = ButtonProps<C>;

export const PrimaryButton = <C extends ElementType>({
  color = "primary-color-1",
  backgroundColor = "primary-color-0",
  ...props
}: PrimaryButtonProps<C>) => (
  <Button backgroundColor={backgroundColor} color={color} {...props} />
);
