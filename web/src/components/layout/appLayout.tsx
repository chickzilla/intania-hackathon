"use client";
import {
  AppShell,
  Group,
  Burger,
  Title,
  Anchor,
  Avatar,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ThemeToggle from "../ui/actionIcons/themeToggle";
import { IconBell } from "@tabler/icons-react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md" justify="space-between">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Title>Scuola</Title>
            <Group align="center">
              <Group visibleFrom="sm">
                <Anchor c="black">Dashboard</Anchor>
                <Anchor c="black">Profile</Anchor>
                <Anchor c="black">Courses</Anchor>
                <Anchor c="black">Competitions</Anchor>
              </Group>
            </Group>
            <Group>
              <ActionIcon color="black" variant="transparent">
                <IconBell
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ThemeToggle />
              <Avatar color="cyan" name="John doe" radius="xl" />
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          {/* SOME LINK */}
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
};

export default AppLayout;
