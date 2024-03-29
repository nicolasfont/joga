import { ComponentMeta } from "@storybook/react";
import { Button, Grid, Stack } from "../..";

export default {
  title: "Containers/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default = () => (
  <Grid gap="m">
    <Button>Lorem</Button>
    <Button>ipsum</Button>
    <Button>dolor</Button>
  </Grid>
);

export const Columns = () => (
  <Grid columns="auto 1fr auto" gap="m">
    <Button>Lorem</Button>
    <Button>ipsum</Button>
    <Button>dolor</Button>
  </Grid>
);

export const Rows = () => (
  <Grid rows="auto 1fr auto" gap="m">
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
    gap="m"
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
