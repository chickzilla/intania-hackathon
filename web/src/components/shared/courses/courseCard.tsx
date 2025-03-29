import {
  Group,
  Badge,
  Card,
  Text,
  Image,
  Button,
  Rating,
  Progress,
} from "@mantine/core";

interface CourseCardProps {
  courseType: string;
  courseName: string;
  courseDetails: string;
  date: string;
  progress: number;
  avgRating: number;
  amountRating: number;
}

const CourseCard = ({
  courseType,
  courseName,
  courseDetails,
  date,
  progress,
  avgRating,
  amountRating,
}: CourseCardProps) => {
  const completed = progress === 100;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h={"100%"}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Badge color="red">{courseType}</Badge>
        <Group gap="5">
          <Rating defaultValue={2} count={1} />
          <Text size="sm">{avgRating}</Text>
          <Text size="sm" c={"gray"}>
            ({amountRating})
          </Text>
        </Group>
      </Group>
      <Text size="xl" fw={700}>
        {courseName}
      </Text>
      <Text size="sm" c="dimmed">
        {courseDetails}
      </Text>
      <Group justify="space-between" py="xs">
        <Text c="gray" size="sm">
          {date}
        </Text>
        {completed && (
          <Text c="gray" size="sm">
            Completed
          </Text>
        )}
      </Group>
      {progress ? (
        <Progress color={completed ? "green" : "red.8"} value={progress} />
      ) : null}
      {progress ? (
        <Button variant="default" fullWidth mt="md" radius="md">
          View Details
        </Button>
      ) : (
        <Button fullWidth mt="md" radius="md">
          Enroll
        </Button>
      )}
    </Card>
  );
};

export default CourseCard;
