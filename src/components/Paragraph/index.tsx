import { injectGlobal } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps } from "../Text";

injectGlobal`
  :root {
    --joga-line-height: 1.6;
  }
`;

export type ParagraphProps<C extends ElementType> = TextProps<C>;

export const Paragraph = <C extends ElementType>({
  lineHeight = "line-height",
  ...props
}: ParagraphProps<C>) => <Text lineHeight={lineHeight} {...props} />;
