import { CoursesList } from "@/interfaces/listCouses";
import { CompetitionsList } from "@/interfaces/listCompetitions";

// TODO: Modify this component
export default function ListCard({ ...props }: CoursesList | CompetitionsList) {
    console.log(props);
    return (
        <div>
            <h1>List Card</h1>
            <p>This is a list card component.</p>
        </div>
    );
}
