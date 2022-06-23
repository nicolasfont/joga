import { ComponentMeta } from "@storybook/react";
import { ExampleForm } from "../..";

export default {
  title: "Examples/ExampleForm",
  component: ExampleForm,
} as ComponentMeta<typeof ExampleForm>;

export const Default = () => <ExampleForm />;
