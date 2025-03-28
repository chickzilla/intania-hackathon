"use client";
import useLoginForm from "@/forms/useLoginForm";
import {
  Anchor,
  Button,
  Center,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react";
const LoginForm = () => {
  const form = useLoginForm();

  return (
    <form onSubmit={form.onSubmit((values) => {})}>
      <Stack>
        <Stack gap="0">
          <Center>
            <Title>Scuola</Title>
          </Center>
          <Center>
            <Text c="gray">The ultimate educational gaming platform</Text>
          </Center>
        </Stack>
        <TextInput
          label="Email"
          placeholder="m@example.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button color="red.8" type="submit">
          <Text>Login</Text>
        </Button>
        <Divider my="xs" label="Or continue with" labelPosition="center" />
        <Group grow>
          <Button variant="default">
            <IconBrandGithub size={20} />
          </Button>
          <Button variant="default">
            <IconBrandGoogleFilled size={20} />
          </Button>
        </Group>
        <Center>
          <Group gap="xs">
            <Text size="sm" c="gray">
              Don't have an account?
            </Text>
            <Anchor size="sm" href="/register">
              Sign Up
            </Anchor>
          </Group>
        </Center>
      </Stack>
    </form>
  );
};

export default LoginForm;
