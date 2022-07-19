import { ElementType } from "react";
import { Text, TextProps, useTheme } from "../..";

export type ParagraphProps<C extends ElementType> = TextProps<C>;

export const Paragraph = <C extends ElementType>({
  lineHeight,
  ...props
}: ParagraphProps<C>) => {
  const theme = useTheme();
  return <Text lineHeight={lineHeight || theme.lineHeight} {...props} />;
};
