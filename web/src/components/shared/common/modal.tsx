import { COURSE_LEVEL } from "@/enum/course/courseStatus";
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
import CourseModuleContent from "../courses/courseModuleContent";
import {
    COMPETITION_LEVEL,
    COMPETITION_STATUS,
} from "@/enum/competitions/competitionStatus";
import CompetitionModuleContent from "../competitions/competitionModuleContent";

type CardProps = {
    courseData?: CourseDetails;
    competitionData?: CompetitionsDetails;
    opened: boolean;
    onComplete?: (n: number) => void;
    close: () => void;
};

export default function ModalComponent(props: CardProps) {
    const isAdmin = sessionStorage.getItem("role") === "ADMIN";
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
                        <CourseModuleContent
                            detail={course}
                            onComplete={props.onComplete}
                        />
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
                        <CompetitionModuleContent {...competition} />
                        <Group justify="flex-end">
                            {isAdmin &&
                            !(
                                competition.status ===
                                COMPETITION_STATUS.FINISHED
                            ) ? (
                                <Button
                                    onClick={() => {
                                        // TODO: Add Action
                                        console.log("Admin Action");
                                    }}
                                >
                                    Complete Competition
                                </Button>
                            ) : (
                                <></>
                            )}
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
