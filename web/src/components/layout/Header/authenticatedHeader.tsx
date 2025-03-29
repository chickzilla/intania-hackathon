"use client";
import ThemeToggle from "@/components/ui/actionIcons/themeToggle";
import { Group, Text, Avatar, Box, Menu } from "@mantine/core";
import {
  IconDeviceGamepad2,
  IconLogout2,
  IconUserFilled,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const AuthenticatedHeader = () => {
  const router = useRouter();

  // TODO: Modify to get real name
  const userName = "John Doe";

  return (
    <Group h="100%" px="xl" justify="space-between">
      <Box
        w={{ base: "30%", md: "20%", sm: "15%" }}
        style={{ display: "flex", alignItems: "center" }}
      >
        <IconDeviceGamepad2
          style={{ width: "1.5em", height: "1.5em" }}
          stroke={1.5}
          color="red"
        />
        <Text ml="xs" size="lg" fw={700}>
          Scuola
        </Text>
      </Box>

      <Group
        w={{ base: "30%", md: "50%", sm: "60%" }}
        justify="center"
        visibleFrom="sm"
      >
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/dashboard")}
          visibleFrom="sm"
          size="lg"
          fw={600}
        >
          Dashboard
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/courses")}
          visibleFrom="sm"
          size="lg"
          fw={600}
        >
          Courses
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/competitions")}
          visibleFrom="sm"
          size="lg"
          fw={600}
        >
          Competitions
        </Text>
      </Group>
      <Group w={{ base: "30%", md: "20%", sm: "15%" }} justify="flex-end">
        <ThemeToggle />
        <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Avatar key={userName} name={userName} color="red"></Avatar>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconUserFilled size={16} />}
              // TODO: Modity to route to profile
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
                console.log("Logout clicked");
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
