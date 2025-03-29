import { Group, Paper, ThemeIcon, Text, Stack } from "@mantine/core";
import { IconCertificate2 } from "@tabler/icons-react";

interface CertificatesDisplayProps {
  subjectName: string;
  date: string;
}

const CertificatesDisplay = ({
  subjectName,
  date,
}: CertificatesDisplayProps) => {
  return (
    <Paper p="md" radius="lg" withBorder h="100%">
      <Group justify="space-between" w="100%">
        <Group>
          <ThemeIcon size="xl" radius="lg" bg="red.8" c="white">
            <IconCertificate2 />
          </ThemeIcon>
          <Stack gap={0}>
            <Text>{subjectName}</Text>
            <Text c={"gray"} size="sm">
              Issued: {date}
            </Text>
          </Stack>
        </Group>
      </Group>
    </Paper>
  );
};

export default CertificatesDisplay;
