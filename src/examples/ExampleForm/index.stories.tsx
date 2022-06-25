import { ComponentMeta } from "@storybook/react";
import {
  Heading,
  OutlineButton,
  Paragraph,
  PrimaryButton,
  Row,
  Stack,
} from "../..";
import { PasswordInput, TextInput } from "../../inputs";
import { Text } from "../../text";

export default {
  title: "Examples/ExampleForm",
} as ComponentMeta<typeof ExampleForm>;

export const ExampleForm = () => (
  <Stack gap="l" padding="l">
    <Heading size={1.2}>Please Read Carefully</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc
      scelerisque viverra mauris in aliquam. Tincidunt tortor aliquam nulla
      facilisi cras fermentum odio eu. Aliquet lectus proin nibh nisl
      condimentum. Tristique nulla aliquet enim tortor at auctor urna nunc id.
      Enim nec dui nunc mattis. Nunc sed augue lacus viverra. Eros donec ac odio
      tempor. Augue ut lectus arcu bibendum at varius vel pharetra vel. Volutpat
      lacus laoreet non curabitur gravida. Condimentum vitae sapien pellentesque
      habitant. At tellus at urna condimentum mattis pellentesque id. Mattis
      aliquam faucibus purus in massa. Aenean pharetra magna ac placerat
      vestibulum. Dignissim cras tincidunt lobortis feugiat vivamus at augue
      eget. Scelerisque purus semper eget duis at tellus. Cras adipiscing enim
      eu turpis. Adipiscing enim eu turpis egestas. Pellentesque sit amet
      porttitor eget dolor morbi non arcu.
    </Paragraph>
    <Stack gap="m">
      <Text weight={500}>Name</Text>
      <TextInput placeholder="What is your name?" />
    </Stack>
    <Stack gap="m">
      <Text weight={500}>Password</Text>
      <PasswordInput placeholder="What is your password?" />
    </Stack>
    <Row gap="m" justify="end">
      <OutlineButton>Cancel</OutlineButton>
      <PrimaryButton>Submit</PrimaryButton>
    </Row>
  </Stack>
);
