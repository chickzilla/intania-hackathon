import { COMPETITION_LEVEL } from "@/enum/competitions/competitionStatus";
import { COURSE_LEVEL } from "@/enum/course/courseStatus";
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
import CardDetail from "../common/cardDetail";

type CardProps = {
  competition: CompetitionsDetails;
};

export default function CompetitionCard(props: CardProps) {
  const { competition } = props;
  return (
    <MTCard
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        opacity:
          competition.isFinished ||
          competition.status == "UPCOMING" ||
          competition.status == "FINISHED"
            ? 0.5
            : 1,
        pointerEvents:
          competition.isFinished ||
          competition.status == "UPCOMING" ||
          competition.status == "FINISHED"
            ? "none"
            : "auto",
      }}
    >
      <MTCard.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="mock Img"
        />
      </MTCard.Section>
      {(competition.isFinished ||
        competition.status === "UPCOMING" ||
        competition.status === "FINISHED") && (
        <Text
          fw={700}
          size="3rem"
          c="white"
          ta="center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
            opacity: 0.85,
            zIndex: 2,
            borderRadius: "8px",
            padding: "1rem 2.5rem",
            backgroundColor: competition.isFinished
              ? "green"
              : competition.status === "UPCOMING"
              ? "orange"
              : "gray",
          }}
        >
          {competition.isFinished
            ? "DONE"
            : competition.status === "UPCOMING"
            ? "COMING SOON"
            : "FINISHED"}
        </Text>
      )}

      <Group justify="space-between" mt="md" mb="xs">
        <Text size="xl" fw={700}>
          {competition.title}
        </Text>
        <Badge
          color={
            competition.level === COMPETITION_LEVEL.BEGINNER
              ? "green"
              : competition.level === COMPETITION_LEVEL.INTERMEDIATE
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

      <CardDetail competitionData={competition} />
    </MTCard>
  );
}
