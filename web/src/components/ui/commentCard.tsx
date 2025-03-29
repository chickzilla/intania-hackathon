import { Avatar, Group, Paper, Stack, Text } from "@mantine/core";

interface CommentCardProp {
  name: string;
  role: string;
  comment: string;
}

const CommentCard = ({ name, role, comment }: CommentCardProp) => {
  return (
    <Paper radius="lg" shadow="sm" p="lg" h="100%">
      <Stack>
        <Group>
          <Avatar name={name} size="lg" />
          <Stack gap="0">
            <Text fw={700}>{name}</Text>
            <Text size="sm" c="gray">
              {role}
            </Text>
          </Stack>
        </Group>
        <Text>"{comment}"</Text>
      </Stack>
    </Paper>
  );
};

export default CommentCard;
