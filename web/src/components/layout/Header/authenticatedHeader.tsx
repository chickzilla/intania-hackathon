"use client";
import ThemeToggle from "@/components/ui/actionIcons/themeToggle";
import { Group, Text, Avatar, Menu, Center, Burger } from "@mantine/core";

import {
  IconDeviceGamepad2,
  IconLogout2,
  IconUserFilled,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface AuthenticatedHeaderProps {
  opened: boolean;
  toggle: () => void;
}

const AuthenticatedHeader = ({ opened, toggle }: AuthenticatedHeaderProps) => {
  const router = useRouter();

  const userName = "John Doe";

  return (
    <Group h="100%" px="xl" justify="space-between">
      <Center inline>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          mr="sm"
        />
        <IconDeviceGamepad2
          style={{ width: "1.5em", height: "1.5em" }}
          stroke={1.5}
          color="red"
        />
        <Text ml="xs" size="lg" fw={700}>
          Scuola
        </Text>
      </Center>

      <Group visibleFrom="sm" gap="lg">
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/dashboard")}
          visibleFrom="sm"
        >
          Dashboard
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/profile")}
          visibleFrom="sm"
        >
          Profile
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/courses")}
          visibleFrom="sm"
        >
          Courses
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/competitions")}
          visibleFrom="sm"
        >
          Competitions
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/leaderboard")}
          visibleFrom="sm"
        >
          Leaderboard
        </Text>
      </Group>
      <Group>
        <ThemeToggle />
        <Menu trigger="click" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Avatar
              style={{ cursor: "pointer" }}
              key={userName}
              name={userName}
              color="red"
            ></Avatar>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconUserFilled size={16} />}
              onClick={() => {
                router.push("/profile");
              }}
            >
              My Profile
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              color="red"
              leftSection={<IconLogout2 size={16} />}
              onClick={() => {
                window.sessionStorage.removeItem("jwt_token");
                router.push("/login");
              }}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  );
};

export default AuthenticatedHeader;
