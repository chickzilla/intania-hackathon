import { COMPETITION_LEVEL } from "@/enum/competitions/competitionStatus";
import { COURSE_LEVEL } from "@/enum/course/courseStatus";
import { CompetitionsDetails } from "@/interfaces/listCompetitions";
import { CourseDetails } from "@/interfaces/listCouses";
import {
  Badge,
  Button,
  Card as MTCard,
  Group,
  Image,
  Text,
  Center,
} from "@mantine/core";
import {
  IconAward,
  IconMilitaryRank,
  IconMilitaryRankFilled,
  IconMoneybag,
} from "@tabler/icons-react";
import CourseCard from "../../ui/courses/courseCard";
import CompetitionCard from "../competitions/competitionCard";

type CardProps = {
    courseData?: CourseDetails;
    competitionData?: CompetitionsDetails;
    onComplete?: (n: number) => void;
};
type Props = CardProps;

export default function Card(props: Props) {
  const course = props.courseData;
  const competition = props.competitionData;

    return (
        <>
            {course ? (
                <CourseCard course={course} onComplete={props.onComplete}></CourseCard>
            ) : competition ? (
                <CompetitionCard competition={competition}></CompetitionCard>
            ) : (
                <Center style={{ height: "100%" }}>
                    <Text size="30px" fw={700}>
                        No Content
                    </Text>
                </Center>
            )}
        </>
    );
}
