import { COMPETITION_LEVEL } from "@/enum/competitions/competitionStatus";
import { COURSE_LEVEL } from "@/enum/cousres/courseStatus";
import { CompetitionsDetails } from "@/interfaces/listCompetitions";
import { CourseDetails } from "@/interfaces/listCouses";
import {
    Group,
    Badge,
    Button,
    Card as MTCard,
    Text,
    Image,
} from "@mantine/core";
import { IconMoneybag, IconAward } from "@tabler/icons-react";

type CardProps = {
    competition: CompetitionsDetails;
};

export default function CompetitionCard(props: CardProps) {
    const { competition } = props;
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
                    {competition.title}
                </Text>
                <Badge
                    color={
                        competition.level === COMPETITION_LEVEL.BEGINNER
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

            <Text size="md" fw={500} c="dimmed">
                {competition.description}
            </Text>
            <Group gap="xs" mt="md">
                <IconMoneybag size={16} />
                <Text size="md" fw={500}>
                    Point: {competition.point}
                </Text>
            </Group>

            <Group gap="xs">
                <IconAward size={16} />
                <Text size="md" fw={500}>
                    Ranking Point: {competition.rankingPoint}
                </Text>
            </Group>

            {/* TODO: Open Dialog */}
            <Button fullWidth mt="md" radius="md">
                View Details
            </Button>
        </MTCard>
    );
}
