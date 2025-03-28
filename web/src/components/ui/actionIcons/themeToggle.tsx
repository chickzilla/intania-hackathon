import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();
  const darkMode = computedColorScheme !== "light";
  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark")
      }
      variant="default"
    >
      {darkMode ? (
        <IconMoon style={{ width: "70%", height: "70%" }} stroke={1.5} />
      ) : (
        <IconSun style={{ width: "70%", height: "70%" }} stroke={1.5} />
      )}
    </ActionIcon>
  );
};

export default ThemeToggle;
