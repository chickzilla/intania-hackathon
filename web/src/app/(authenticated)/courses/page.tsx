"use client";

import CourseCard from "@/components/shared/courses/courseCard";
import { CourseCardValues } from "@/types/course";
import {
    Box,
    Group,
    Stack,
    Title,
    Text,
    TextInput,
    ActionIcon,
    SegmentedControl,
    Grid,
    GridCol,
} from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { IconFilter, IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const CoursePage = () => {
    const [searchQuery, setSearchQuery] = useDebouncedState("", 200);
    const [courses, setCourses] = useState<CourseCardValues[]>([
        {
            courseType: "Beginner",
            courseName: "JavaScript Fundamentals",
            courseDetails: "Learn the basics of JavaScript programming",
            date: "4 weeks",
            progress: 100,
            avgRating: 4.8,
            amountRating: 124,
        },
        {
            courseType: "Intermediate",
            courseName: "React Development",
            courseDetails: "Build modern web applications with React",
            date: "6 weeks",
            progress: 100,
            avgRating: 4.9,
            amountRating: 98,
        },
        {
            courseType: "Intermediate",
            courseName: "Node.js Basics",
            courseDetails: "Server-side JavaScript with Node.js",
            date: "5 weeks",
            progress: 100,
            avgRating: 4.7,
            amountRating: 86,
        },
        {
            courseType: "Advanced",
            courseName: "Advanced JavaScript",
            courseDetails: "Master advanced JavaScript concepts",
            date: "8 weeks",
            progress: 75,
            avgRating: 4.9,
            amountRating: 112,
        },
        {
            courseType: "Beginner",
            courseName: "React Fundamentals",
            courseDetails: "Learn the basics of React",
            date: "4 weeks",
            progress: 40,
            avgRating: 4.6,
            amountRating: 78,
        },
        {
            courseType: "Intermediate",
            courseName: "TypeScript Essentials",
            courseDetails: "Add static typing to your JavaScript",
            date: "4 weeks",
            progress: 0,
            avgRating: 4.7,
            amountRating: 86,
        },
    ]);
    const [activeTab, setActiveTab] = useState("All");

    const filteredCourses = courses.filter((course) => {
        if (activeTab === "All") return true;
        if (activeTab === "Enrolled")
            return course.progress < 100 && course.progress != 0;
        if (activeTab === "Completed") return course.progress === 100;
        if (activeTab === "Recommended") return course.avgRating > 4.8;
        return true;
    });

    const searchedCourses = filteredCourses.filter((course) =>
        course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Stack mt="xl">
            <Group justify="space-between">
                <Box>
                    <Title>Courses</Title>
                    <Text c="gray">Browse and enroll in courses</Text>
                </Box>
                <Box>
                    <Group gap="xs">
                        <TextInput
                            radius="md"
                            placeholder="Search courses..."
                            leftSection={<IconSearch size={16} />}
                            onChange={(event) =>
                                setSearchQuery(event.target.value)
                            }
                        />
                        <ActionIcon variant="default" size="lg">
                            <IconFilter
                                style={{ width: "70%", height: "70%" }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Group>
                </Box>
            </Group>
            <SegmentedControl
                onChange={setActiveTab}
                value={activeTab}
                fullWidth
                radius="md"
                withItemsBorders={false}
                data={["All", "Enrolled", "Completed", "Recommended"]}
            />
            <Grid>
                {searchedCourses.map((course, index) => (
                    <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
                        <CourseCard {...course} />
                    </GridCol>
                ))}
            </Grid>
        </Stack>
    );
};

export default CoursePage;
