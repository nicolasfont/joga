import { ComponentMeta } from "@storybook/react";
import { Grid, Text } from "..";
import { Box } from "../Box";
import { Button } from "../Button";
import { Stack } from "../Stack";

export default {
  title: "Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default = () => (
  <Grid gap={8}>
    <Button>Lorem</Button>
    <Button>ipsum</Button>
    <Button>dolor</Button>
  </Grid>
);

export const Columns = () => (
  <Grid columns="auto 1fr auto" gap={8}>
    <Button>Lorem</Button>
    <Button>ipsum</Button>
    <Button>dolor</Button>
  </Grid>
);

export const Rows = () => (
  <Grid rows="auto 1fr auto" gap={8}>
    <Button>Lorem</Button>
    <Button>ipsum</Button>
    <Button>dolor</Button>
  </Grid>
);

export const Areas = () => (
  <Grid
    areas={`
      "header header"
      "side main"
      "footer footer"
    `}
    columns="auto 1fr"
    gap={8}
  >
    <Stack area="header">
      <Button>Header</Button>
    </Stack>
    <Stack area="side">
      <Button>Sidebar</Button>
    </Stack>
    <Stack area="main">
      <Button>Main</Button>
    </Stack>
    <Stack area="footer">
      <Button>Footer</Button>
    </Stack>
  </Grid>
);
