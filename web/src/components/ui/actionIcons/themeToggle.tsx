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
      radius="lg"
      size="lg"
    >
      {darkMode ? (
        <IconMoon style={{ width: "50%", height: "50%" }} stroke={2} />
      ) : (
        <IconSun style={{ width: "50%", height: "50%" }} stroke={2} />
      )}
    </ActionIcon>
  );
};

export default ThemeToggle;
