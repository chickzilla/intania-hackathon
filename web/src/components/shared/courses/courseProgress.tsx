import { Group, Paper, Pill, Progress, Stack, Text } from "@mantine/core";

interface CourseProgressProps {
  course_name: string;
  modules: number;
  progress: number;
  date?: string;
}

const CourseProgress = ({
  course_name,
  modules,
  progress,
  date,
}: CourseProgressProps) => {
  const completed = progress === 100;
  return (
    <Paper p="lg" radius="lg" withBorder>
      <Stack gap="xs">
        <Group justify="space-between">
          <Text fw={500}>{course_name}</Text>
          {completed ? (
            <Pill bg="green.0" c="green.9">
              Completed
            </Pill>
          ) : (
            <Pill bg="red.0" c="red.9">
              In progress
            </Pill>
          )}
        </Group>
        <Group justify="space-between">
          <Text c="gray" size="sm">
            {modules} modules
          </Text>
          {completed ? (
            <Text c="gray" size="sm">
              Completed: {date}
            </Text>
          ) : (
            <Text c="gray" size="sm">
              {progress}%
            </Text>
          )}
        </Group>
        <Progress color={completed ? "green" : "red.8"} value={progress} />
      </Stack>
    </Paper>
  );
};

export default CourseProgress;
