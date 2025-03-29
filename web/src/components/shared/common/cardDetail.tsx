import { COURSE_LEVEL } from "@/enum/course/courseStatus";
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
import CourseModuleContent from "../courses/courseModuleContent";
import ModalComponent from "./modal";

type CardProps = {
    courseData?: CourseDetails;
    competitionData?: CompetitionsDetails;
    onComplete?: (n: number) => void;
};

export default function CardDetail(props: CardProps) {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <ModalComponent
                {...props}
                opened={opened}
                close={close}
                onComplete={props.onComplete}
            ></ModalComponent>
            <Button onClick={open} fullWidth mt="md" radius="md">
                View Details
            </Button>
        </>
    );
}
