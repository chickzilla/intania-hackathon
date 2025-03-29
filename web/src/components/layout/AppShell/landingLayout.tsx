"use client";
import { AppShell, useComputedColorScheme, Box } from "@mantine/core";

import LandingHeader from "../Header/landingHeader";

const LandingLayout = ({
  scrollToSection1,
  scrollToSection2,
  scrollToSection3,
  children,
}: {
  scrollToSection1: () => void;
  scrollToSection2: () => void;
  scrollToSection3: () => void;
  children: React.ReactNode;
}) => {
  const darkMode = useComputedColorScheme() === "dark";

  return (
    <Box bg={darkMode ? "dark.6" : "gray.0"}>
      <AppShell header={{ height: 60 }} padding="xl">
        <AppShell.Header>
          <LandingHeader
            scrollToSection1={scrollToSection1}
            scrollToSection2={scrollToSection2}
            scrollToSection3={scrollToSection3}
          />
        </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </Box>
  );
};

export default LandingLayout;
