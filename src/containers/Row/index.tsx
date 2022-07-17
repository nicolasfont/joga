import { ElementType } from "react";
import { Stack, StackProps } from "../..";

export type RowProps<C extends ElementType> = StackProps<C>;

export const Row = <C extends ElementType>({
  direction = "row",
  ...props
}: RowProps<C>) => <Stack direction={direction} {...props} />;
