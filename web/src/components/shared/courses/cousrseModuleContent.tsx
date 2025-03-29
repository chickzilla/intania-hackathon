"use client";
import {
    Grid,
    GridCol,
    List,
    Stack,
    Group,
    ThemeIcon,
    Text,
    useComputedColorScheme,
    Box,
} from "@mantine/core";
import MiniCard from "../common/miniCard";
import { CourseDetails } from "@/interfaces/listCouses";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

export default function CourseModuleContent(detail: CourseDetails) {
    const computedColorScheme = useComputedColorScheme();
    const darkMode = computedColorScheme !== "light";

    const [selectedCourse, setSelectedCourse] = useState<CourseDetails>({
        ...detail,
        isEnrolled: false,
    });

    const handleEnroll = () => {
        setSelectedCourse((prev) => ({ ...prev, isEnrolled: true }));
    };
    return (
        <Grid gutter="xl" mt="md" ml="sm">
            <GridCol span={{ base: 12, lg: 8 }}>
                <Text size="xl" fw={700}>
                    About This Course
                </Text>
                <Text size="md" fw={500}>
                    {detail.details}
                </Text>

                <Text size="xl" fw={700} mt="md">
                    Learning Objectives
                </Text>
                <List spacing="xs" size="md" icon="🔴">
                    {detail.objectives.map((objective, index) => (
                        <List.Item key={index}>{objective}</List.Item>
                    ))}
                </List>

                <Text size="xl" fw={700} mt="md">
                    Course Modules
                </Text>
                <Stack gap="xs">
                    {detail.modules.map((mod, index) => (
                        <Group
                            key={index}
                            p="xs"
                            style={{
                                border: `1px solid ${
                                    darkMode ? "grey" : "lightgray"
                                }`,
                                borderRadius: "10px",
                            }}
                        >
                            <ThemeIcon
                                variant="filled"
                                radius="xl"
                                size={25}
                                color="red"
                            >
                                {index + 1}
                            </ThemeIcon>
                            <Text size="md" fw={500}>
                                {mod.name}
                            </Text>
                        </Group>
                    ))}
                </Stack>
            </GridCol>

            <GridCol
                span={{ base: 12, lg: 4 }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                <Box style={{ width: "full" }}>
                    <MiniCard courseData={detail} />
                </Box>
            </GridCol>
        </Grid>
    );
}
