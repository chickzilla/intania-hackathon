import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => setColorScheme("light")}
      variant="default"
      radius="xl"
      size="lg"
    >
      <IconSun style={{ width: "50%", height: "50%" }} stroke={1.5} />
    </ActionIcon>
  );
};

export default ThemeToggle;
