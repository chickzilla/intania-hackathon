"use client";
import Header from "@/components/shared/common/header";
import { CoursesHeader } from "@/constants/header";
import { USER_ROLE } from "@/enum/auth/user-role";
import { CoursesList } from "@/interfaces/listCouses";
import { Stack } from "@mantine/core";

// TODO: This Page
export default function CoursesPage() {
    // TODO: Modify Onsearch To get data to fetch listData
    const searchHandler = (e: string) => {
        console.log(e);
    };
    const searchByTabHandler = (tab: string) => {
        console.log(tab);
    };

    // TODO: Modify to real Data
    const mockList: CoursesList = {
        courses: [
            {
                id: "1",
                title: "Course 1",
                description: "Description 1",
                details: "Details 1",
                objectives: ["Objective 1", "Objective 2"],
                modules: [
                    { name: "Module 1", isFinished: false },
                    { name: "Module 2", isFinished: true },
                ],
                instructor: {
                    id: "1",
                    name: "Instructor 1",
                    role: USER_ROLE.STUDENT_ROLE
                },
                level: "Beginner",
                startDate: new Date(),
                endDate: new Date(),
                isEnrolled: false,
                isCompleted: false,
            },
            {
                id: "2",
                title: "Course 2",
                description: "Description 2",
                details: "Details 2",
                objectives: ["Objective 1", "Objective 2"],
                modules: [
                    { name: "Module 1", isFinished: false },
                    { name: "Module 2", isFinished: true },
                ],
                instructor: {
                    id: "2",
                    name: "Instructor 2",
                    role: USER_ROLE.STUDENT_ROLE
                },
                level: "Intermediate",
                startDate: new Date(),
                endDate: new Date(),
                isEnrolled: false,
                isCompleted: false,
            },
        ],
    };
    return (
        <Stack>
            <Header
                title={CoursesHeader.title}
                description={CoursesHeader.description}
                tabs={CoursesHeader.tabs}
                onSearch={searchHandler}
                onSearchByTab={searchByTabHandler}
            ></Header>
        </Stack>
    );
}
