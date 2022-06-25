import { ElementType } from "react";
import { TextInput, TextInputProps } from "../TextInput";

export type PasswordInputProps<C extends ElementType> = TextInputProps<C>;

export const PasswordInput = <C extends ElementType>({
  ...props
}: PasswordInputProps<C>) => <TextInput type="password" {...props} />;
