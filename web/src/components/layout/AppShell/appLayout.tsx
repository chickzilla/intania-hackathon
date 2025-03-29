"use client";

import {
  AppShell,
  useComputedColorScheme,
  Box,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import AuthenticatedHeader from "../Header/authenticatedHeader";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const darkMode =
    (colorScheme === "auto" ? computedColorScheme : colorScheme) === "dark";

  return (
    <Box bg={darkMode ? "dark.6" : "gray.0"}>
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
          <AuthenticatedHeader opened={opened} toggle={toggle} />
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          {/* SOME LINK */}
        </AppShell.Navbar>

        <AppShell.Main
          mx={{ base: "1rem", xs: "2rem", sm: "4rem", md: "6rem", lg: "8rem" }}
        >
          {children}
        </AppShell.Main>
      </AppShell>
    </Box>
  );
};

export default AppLayout;
