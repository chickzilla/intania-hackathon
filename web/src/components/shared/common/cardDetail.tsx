import { COURSE_LEVEL } from "@/enum/cousres/courseStatus";
import { CompetitionsDetails } from "@/interfaces/listCompetitions";
import { CourseDetails } from "@/interfaces/listCouses";
import {
    Modal,
    Button,
    Text,
    Badge,
    Group,
    Stack,
    List,
    ThemeIcon,
    Box,
    rem,
    Divider,
    ScrollArea,
    useComputedColorScheme,
    Grid,
    GridCol,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MiniCard from "./miniCard";
import CourseModuleContent from "../courses/cousrseModuleContent";
import ModalComponent from "./modal";

type CardProps = {
    courseData?: CourseDetails;
    competitionData?: CompetitionsDetails;
};

export default function CardDetail(props: CardProps) {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <ModalComponent
                {...props}
                opened={opened}
                close={close}
            ></ModalComponent>
            <Button onClick={open} fullWidth mt="md" radius="md">
                View Details
            </Button>
        </>
    );
}
