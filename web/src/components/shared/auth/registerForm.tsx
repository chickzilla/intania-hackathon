"use client";

import { USER_ROLE } from "@/enum/auth/user-role";
import useRegisterForm from "@/forms/useRegisterForm";
import register from "@/services/auth/register";
import {
  Anchor,
  Button,
  Center,
  Grid,
  GridCol,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

import {
  IconRobotFace,
  IconSchool,
  IconSeedling,
  IconUsers,
} from "@tabler/icons-react";
import { useState } from "react";
const RegisterForm = () => {
  const form = useRegisterForm();
  const [selectedRole, setSelectedRole] = useState<USER_ROLE | null>(null);

  const roleConfigurations = [
    {
      role: USER_ROLE.STUDENT_ROLE,
      label: "Student",
      icon: IconSchool,
    },
    {
      role: USER_ROLE.LECTURER_ROLE,
      label: "Lecturer",
      icon: IconRobotFace,
    },
    {
      role: USER_ROLE.ADMIN_ROLE,
      label: "Admin",
      icon: IconUsers,
    },
    {
      role: USER_ROLE.PARTNER_ROLE,
      label: "Partner",
      icon: IconSeedling,
    },
  ];
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        register(values)
          .then((res) => {
            notifications.show({
              title: "Register successful",
              message: "Sending you to login page",
              color: "green",
            });
            window.location.href = "/login";
          })
          .catch((err) => {
            notifications.show({
              title: "Something went wrong",
              message: err.message || "Register failed",
              color: "red",
            });
          });
      })}
    >
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
          label="Full Name"
          placeholder="username"
          key={form.key("fullName")}
          {...form.getInputProps("fullName")}
        />
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
        <PasswordInput
          label="Confirm Password"
          placeholder="password"
          key={form.key("confirmedPassword")}
          {...form.getInputProps("confirmedPassword")}
        />
        <Stack gap={0}>
          <Text>I am</Text>
          <Grid>
            {roleConfigurations.map((config) => (
              <GridCol key={config.role} span={6}>
                <Button
                  fullWidth
                  variant={selectedRole === config.role ? "filled" : "default"}
                  color={selectedRole === config.role ? "red.8" : undefined}
                  leftSection={<config.icon size={20} />}
                  onClick={() => {
                    form.setFieldValue("userRole", config.role);
                    form.validateField("userRole");
                    setSelectedRole(config.role);
                  }}
                >
                  {config.label}
                </Button>
              </GridCol>
            ))}
          </Grid>
          {form.errors.userRole && (
            <Text c="red" size="sm" mt="xs">
              {form.errors.userRole}
            </Text>
          )}
        </Stack>
        <Button color="red.8" type="submit">
          <Text>Create Account</Text>
        </Button>
        <Center>
          <Group gap="xs">
            <Text size="sm" c="gray">
              Already have an account?
            </Text>
            <Anchor size="sm" href="/login">
              Log In
            </Anchor>
          </Group>
        </Center>
      </Stack>
    </form>
  );
};

export default RegisterForm;
