import { ComponentMeta } from "@storybook/react";
import { Grid, Text } from "..";

export default {
  title: "Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default = () => (
  <Grid>
    <Text>Lorem ipsum</Text>
  </Grid>
);

export const Columns = () => (
  <Grid columns="auto 1fr auto">
    <Text>Lorem</Text>
    <Text>ipsum</Text>
    <Text>dolor</Text>
  </Grid>
);

export const Rows = () => (
  <Grid rows="auto 1fr auto">
    <Text>Lorem</Text>
    <Text>ipsum</Text>
    <Text>dolor</Text>
  </Grid>
);
