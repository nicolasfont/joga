import { ElementType } from "react";
import { Button, ButtonProps, useTheme } from "../..";

export type OutlineButtonProps<C extends ElementType> = ButtonProps<C>;

export const OutlineButton = <C extends ElementType>({
  border,
  color,
  borderColor,
  ...props
}: OutlineButtonProps<C>) => {
  const theme = useTheme();
  return (
    <Button
      border={border || theme.border}
      borderColor={borderColor || theme.colors.accent}
      color={color || theme.colors.accent}
      {...props}
    />
  );
};
