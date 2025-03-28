"use client";
import {
  AppShell,
  Group,
  useComputedColorScheme,
  Box,
  Button,
  Flex,
  Center,
  Title,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { IconDeviceGamepad2 } from "@tabler/icons-react";
import ThemeToggle from "../../ui/actionIcons/themeToggle";
import { Text } from "@mantine/core";
import LandingHeader from "../Header/landingHeader";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useComputedColorScheme() === "dark";

  return (
    <Box bg={darkMode ? "dark.6" : "gray.0"}>
      <AppShell header={{ height: 60 }} padding="xl">
        <AppShell.Header>
          <LandingHeader />
        </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </Box>
  );
};

export default LandingLayout;
