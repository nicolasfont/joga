import { ComponentStory } from "@storybook/react";

export const storyOf =
  (Component: React.ComponentType): ComponentStory<typeof Component> =>
  (args) =>
    <Component {...args} />;
