"use client";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
      variant="default"
      radius="lg"
      size="lg"
    >
      {colorScheme === "dark" ? (
        <IconMoon style={{ width: "50%", height: "50%" }} stroke={2} />
      ) : (
        <IconSun style={{ width: "50%", height: "50%" }} stroke={2} />
      )}
    </ActionIcon>
  );
};

export default ThemeToggle;
