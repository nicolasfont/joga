import { ElementType } from "react";
import { Text, TextProps } from "../Text";

export type ParagraphProps<C extends ElementType> = TextProps<C>;

export const Paragraph = <C extends ElementType>({
  lineHeight = "1.6",
  ...props
}: ParagraphProps<C>) => <Text lineHeight={lineHeight} {...props} />;
