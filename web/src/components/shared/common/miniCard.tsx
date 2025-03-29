import { CompetitionsDetails } from "@/interfaces/listCompetitions";
import { CourseDetails } from "@/interfaces/listCouses";
import { Card, Image, Text, Stack, Group, Badge, Button } from "@mantine/core";
import { IconAward } from "@tabler/icons-react";

type CardProps = {
    courseData?: CourseDetails;
    competitionData?: CompetitionsDetails;
    onEnroll: (e: string) => void;
    onComplete: (e: string) => void;
};

export default function MiniCard(props: CardProps) {
    const course = props.courseData;
    const competition = props.competitionData;
    return (
        <>
            {course ? (
                <Stack>
                    <Card withBorder radius="md" p="md" w={250}>
                        {/* TODO: Real Image */}
                        <Image
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                            height={120}
                            radius="md"
                            alt="Course Image"
                        />

                        <Stack mt="sm" gap={4}>
                            {/* Instructor */}
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    Instructor:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {course?.instructor.name}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    Points:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {course?.point}
                                </Text>
                            </Group>
                            {course?.achievements.map((achievement) => (
                                <Badge
                                    key={achievement}
                                    variant="light"
                                    leftSection={<IconAward size={14} />}
                                    size="sm"
                                    mt="xs"
                                    radius="sm"
                                >
                                    {achievement}
                                </Badge>
                            ))}
                        </Stack>
                    </Card>
                    {!course.isEnrolled && !course.isCompleted ? (
                        <Button
                            fullWidth
                            mt="md"
                            radius="md"
                            onClick={() => {
                                props.onEnroll(course.id);
                            }}
                        >
                            Enroll Now
                        </Button>
                    ) : !course.isCompleted ? (
                        <Button
                            fullWidth
                            mt="md"
                            radius="md"
                            onClick={() => {
                                props.onComplete(course.id);
                            }}
                        >
                            Complete Course
                        </Button>
                    ) : (
                        <></>
                    )}
                </Stack>
            ) : competition ? (
                // TODO: Implement Competition
                <></>
            ) : (
                <></>
            )}
        </>
    );
}
