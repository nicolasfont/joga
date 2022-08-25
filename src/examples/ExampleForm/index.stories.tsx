import { ComponentMeta } from "@storybook/react";
import {
  Heading,
  OutlineButton,
  Paragraph,
  Row,
  SolidButton,
  Stack,
} from "../..";
import { PasswordInput, TextInput } from "../../inputs";
import { Text } from "../../text";

export default {
  title: "Examples/ExampleForm",
} as ComponentMeta<typeof ExampleForm>;

export const ExampleForm = () => (
  <Stack gap="l" padding="l">
    <Stack gap="m">
      <Heading fontSize={1.2}>Please Read Carefully</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc
        scelerisque viverra mauris in aliquam. Tincidunt tortor aliquam nulla
        facilisi cras fermentum odio eu.
      </Paragraph>
      <Stack gap="s">
        <Text fontWeight={500}>Name</Text>
        <TextInput placeholder="What is your name?" />
      </Stack>
      <Stack gap="s">
        <Text fontWeight={500}>Password</Text>
        <PasswordInput placeholder="What is your password?" />
      </Stack>
    </Stack>
    <Row gap="m" justify="end">
      <OutlineButton>Cancel</OutlineButton>
      <SolidButton>Submit</SolidButton>
    </Row>
  </Stack>
);
