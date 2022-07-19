import { ElementType } from "react";
import { Button, ButtonProps, useTheme } from "../..";

export type OutlineButtonProps<C extends ElementType> = ButtonProps<C>;

export const OutlineButton = <C extends ElementType>({
  theme = useTheme(),
  borderColor = theme.borderColor,
  ...props
}: OutlineButtonProps<C>) => <Button borderColor={borderColor} {...props} />;
