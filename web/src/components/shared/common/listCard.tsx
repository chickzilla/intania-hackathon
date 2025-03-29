import { CoursesList } from "@/interfaces/listCouses";
import { CompetitionsList } from "@/interfaces/listCompetitions";
import { Grid, GridCol } from "@mantine/core";
import Card from "./card";

type ListCardProps = {
    coursesData?: CoursesList;
    competitionsData?: CompetitionsList;
};
type Props = ListCardProps;

// TODO: Modify this component
export default function ListCard(props: Props) {
    const courses = props.coursesData?.courses;
    const competitions = props.competitionsData?.competitions;
    return (
        <Grid mx="xl" mt="xl">
            {courses && courses.length > 0 ? (
                courses.map((course) => (
                    <GridCol key={course.id} span={{ base: 12, sm: 6, md: 4 }}>
                        <Card courseData={course} />
                    </GridCol>
                ))
            ) : competitions && competitions.length > 0 ? (
                competitions.map((competition) => (
                    <GridCol
                        key={competition.id}
                        span={{ base: 12, sm: 6, md: 4 }}
                    >
                        <Card competitionData={competition} />
                    </GridCol>
                ))
            ) : (
                <GridCol span={12}>
                    <Card />
                </GridCol>
            )}
        </Grid>
    );
}
