import { ComponentMeta } from "@storybook/react";
import { Button, Row, Separator, Stack } from "..";

export default {
  title: "Separator",
  component: Separator,
} as ComponentMeta<typeof Separator>;

export const Horizontal = () => (
  <Stack gap={8}>
    <Button>One</Button>
    <Separator />
    <Button>Three</Button>
  </Stack>
);

export const Vertical = () => (
  <Row gap={8}>
    <Button>One</Button>
    <Separator />
    <Button>Three</Button>
  </Row>
);
