import { formatDate } from "@/functions/dateFormat";
import { COURSE_STATUS } from "@/enum/course/courseStatus";
import { CompetitionsDetails } from "@/interfaces/listCompetitions";
import { CourseDetails } from "@/interfaces/listCouses";
import { Card, Image, Text, Stack, Group, Badge, Button } from "@mantine/core";
import { IconAward } from "@tabler/icons-react";

type CardProps = {
    courseData?: CourseDetails;
    competitionData?: CompetitionsDetails;
    onEnroll?: (e: string) => void;
    onComplete?: (e: string) => void;
    onRegister?: (e: string) => void;
};

export default function MiniCard(props: CardProps) {
    const currentDate = new Date().toISOString();
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
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    Instructor:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {course.instructor.name}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    Points:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {course.point}
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
                    {course.status === COURSE_STATUS.AVAILABLE ? (
                        <Button
                            fullWidth
                            mt="md"
                            radius="md"
                            onClick={() => {
                                props.onEnroll?.(course.id);
                            }}
                        >
                            Enroll Now
                        </Button>
                    ) : course.status === COURSE_STATUS.ENROLLED ? (
                        <Button
                            fullWidth
                            mt="md"
                            radius="md"
                            onClick={() => {
                                props.onComplete?.(course.id);
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
                <Stack>
                    <Card withBorder radius="md" p="md" w={250}>
                        {/* TODO: Real Image */}
                        <Image
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                            height={120}
                            radius="md"
                            alt="Competition Image"
                        />

                        <Stack mt="sm" gap={4}>
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    Start Date:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {formatDate(competition.startDate)}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    End Date:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {formatDate(competition.endDate)}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    Organizer:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {competition.organizer.name}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    Points:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {competition.point}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <Text size="sm" c="dimmed" fw={500}>
                                    Ranking Points:
                                </Text>
                                <Text size="sm" fw={600}>
                                    {competition.point}
                                </Text>
                            </Group>
                        </Stack>
                    </Card>

                    {currentDate > competition.endDate ? (
                        <></>
                    ) : (
                        <>
                            <Button
                                fullWidth
                                mt="md"
                                radius="md"
                                onClick={() => {
                                    props.onRegister?.(competition.id);
                                }}
                                disabled={competition.isRegistered}
                            >
                                {!competition.isRegistered
                                    ? "Register Now"
                                    : "Registered"}
                            </Button>
                            {competition.isRegistered ? (
                                <Button
                                    fullWidth
                                    radius="md"
                                    onClick={() => {
                                        // TODO: Implement Complete Competition
                                        console.log("Complete Competition");
                                        window.location.href = "/competitions";
                                    }}
                                >
                                    Complete Competition
                                </Button>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </Stack>
            ) : (
                <></>
            )}
        </>
    );
}
