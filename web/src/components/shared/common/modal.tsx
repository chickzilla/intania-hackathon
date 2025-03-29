import { COURSE_LEVEL } from "@/enum/cousres/courseStatus";
import { CompetitionsDetails } from "@/interfaces/listCompetitions";
import { CourseDetails } from "@/interfaces/listCouses";
import {
    Modal,
    ScrollArea,
    Stack,
    Group,
    Badge,
    Divider,
    Text,
    Center,
    Button,
} from "@mantine/core";
import CourseModuleContent from "../courses/cousrseModuleContent";
import { COMPETITION_LEVEL } from "@/enum/competitions/competitionStatus";

type CardProps = {
    courseData?: CourseDetails;
    competitionData?: CompetitionsDetails;
    opened: boolean;
    close: () => void;
};

export default function ModalComponent(props: CardProps) {
    const course = props.courseData;
    const competition = props.competitionData;
    const { opened, close } = props;

    return (
        //TODO: Add Close and ActionButton in each
        <>
            {course ? (
                <Modal
                    opened={opened}
                    onClose={close}
                    size="80%"
                    centered
                    overlayProps={{
                        backgroundOpacity: 0.55,
                        blur: 3,
                    }}
                    radius="md"
                    scrollAreaComponent={ScrollArea.Autosize}
                >
                    <Stack px="md">
                        <Group justify="space-between">
                            <Stack>
                                <Text size="32px" fw={700}>
                                    {course.title}
                                </Text>
                                <Text size="md" c="dimmed" fw={500}>
                                    {course.description}
                                </Text>
                            </Stack>
                            <Badge
                                color={
                                    course.level === COURSE_LEVEL.BEGINNER
                                        ? "green"
                                        : course.level ===
                                          COURSE_LEVEL.INTERMEDIATE
                                        ? "yellow"
                                        : "red"
                                }
                            >
                                {course.level}
                            </Badge>
                        </Group>
                        <Divider my="xs" />
                        <CourseModuleContent {...course} />
                        <Group justify="flex-end">
                            <Button onClick={close}>Close</Button>
                        </Group>
                    </Stack>
                </Modal>
            ) : competition ? (
                <Modal
                    opened={opened}
                    onClose={close}
                    size="80%"
                    centered
                    overlayProps={{
                        backgroundOpacity: 0.55,
                        blur: 3,
                    }}
                    radius="md"
                    scrollAreaComponent={ScrollArea.Autosize}
                >
                    <Stack px="md">
                        <Group justify="space-between">
                            <Stack>
                                <Text size="32px" fw={700}>
                                    {competition.title}
                                </Text>
                                <Text size="md" c="dimmed" fw={500}>
                                    {competition.description}
                                </Text>
                            </Stack>
                            <Badge
                                color={
                                    competition.level ===
                                    COMPETITION_LEVEL.BEGINNER
                                        ? "green"
                                        : competition.level ===
                                          COMPETITION_LEVEL.INTERMEDIATE
                                        ? "yellow"
                                        : "red"
                                }
                            >
                                {competition.level}
                            </Badge>
                        </Group>
                        <Divider my="xs" />
                        {/* TODO: Add CompetitionModuleContent */}
                        {/* <CourseModuleContent {...course} /> */}
                        <Group justify="flex-end">
                            <Button onClick={close}>Close</Button>
                        </Group>
                    </Stack>
                </Modal>
            ) : (
                <Modal
                    opened={opened}
                    onClose={close}
                    size="80%"
                    centered
                    overlayProps={{
                        backgroundOpacity: 0.55,
                        blur: 3,
                    }}
                    radius="md"
                    scrollAreaComponent={ScrollArea.Autosize}
                >
                    <Center style={{ height: "100%" }}>
                        <Text size="30px" fw={700}>
                            No Content
                        </Text>
                    </Center>
                </Modal>
            )}
        </>
    );
}
