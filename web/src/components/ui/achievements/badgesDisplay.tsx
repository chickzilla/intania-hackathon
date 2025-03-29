import { Center, Paper, ThemeIcon, Text } from "@mantine/core";

interface BadgesDisplayProps {
  label: string;
  icon: any;
  color: string;
}

const BadgesDisplay = ({ label, icon, color }: BadgesDisplayProps) => {
  return (
    <Paper p="lg" radius="lg" withBorder h="100%">
      <Center>
        <ThemeIcon size="xl" radius="xl" variant="light" color={color}>
          {icon}
        </ThemeIcon>
      </Center>
      <Center>
        <Text>{label}</Text>
      </Center>
    </Paper>
  );
};

export default BadgesDisplay;
