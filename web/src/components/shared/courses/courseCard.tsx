import { COURSE_LEVEL } from "@/enum/course/courseStatus";
import { CourseDetails } from "@/interfaces/listCouses";
import {
    Group,
    Badge,
    Button,
    Card as MTCard,
    Text,
    Image,
} from "@mantine/core";
import CardDetail from "../common/cardDetail";

type CardProps = {
    course: CourseDetails;
    onComplete?: (n: number) => void;
};

export default function CourseCard(props: CardProps) {
    const { course } = props;
    return (
        <MTCard shadow="sm" padding="lg" radius="md" withBorder>
            <MTCard.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="mock Img"
                />
            </MTCard.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text size="xl" fw={700}>
                    {course.title}
                </Text>
                <Badge
                    color={
                        course.level === COURSE_LEVEL.BEGINNER
                            ? "green"
                            : course.level === COURSE_LEVEL.INTERMEDIATE
                            ? "yellow"
                            : "red"
                    }
                >
                    {course.level}
                </Badge>
            </Group>

            <Text size="md" fw={500} c="dimmed">
                {course.description}
            </Text>

            <CardDetail
                courseData={course}
                onComplete={props.onComplete}
            ></CardDetail>
        </MTCard>
    );
}
