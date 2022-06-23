import { ComponentMeta } from "@storybook/react";
import { Heading } from "../..";

export default {
  title: "Text/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Default = () => <Heading>This is a Heading</Heading>;

export const Large = () => (
  <Heading size={1.5}>This is a large Heading</Heading>
);

export const Larger = () => <Heading size={2}>This is a larger Heading</Heading>;
