import { ComponentMeta } from "@storybook/react";
import { PrimaryButton, Grid, Stack } from "../..";

export default {
  title: "Containers/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default = () => (
  <Grid gap="m">
    <PrimaryButton>Lorem</PrimaryButton>
    <PrimaryButton>ipsum</PrimaryButton>
    <PrimaryButton>dolor</PrimaryButton>
  </Grid>
);

export const Columns = () => (
  <Grid columns="auto 1fr auto" gap="m">
    <PrimaryButton>Lorem</PrimaryButton>
    <PrimaryButton>ipsum</PrimaryButton>
    <PrimaryButton>dolor</PrimaryButton>
  </Grid>
);

export const Rows = () => (
  <Grid rows="auto 1fr auto" gap="m">
    <PrimaryButton>Lorem</PrimaryButton>
    <PrimaryButton>ipsum</PrimaryButton>
    <PrimaryButton>dolor</PrimaryButton>
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
      <PrimaryButton>Header</PrimaryButton>
    </Stack>
    <Stack area="side">
      <PrimaryButton>Sidebar</PrimaryButton>
    </Stack>
    <Stack area="main">
      <PrimaryButton>Main</PrimaryButton>
    </Stack>
    <Stack area="footer">
      <PrimaryButton>Footer</PrimaryButton>
    </Stack>
  </Grid>
);
