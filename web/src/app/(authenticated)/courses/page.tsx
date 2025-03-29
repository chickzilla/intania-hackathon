"use client";
import Header from "@/components/shared/common/header";
import ListCard from "@/components/shared/common/listCard";
import { CoursesHeader } from "@/constants/header";
import { USER_ROLE } from "@/enum/auth/user-role";
import { COMPETITION_STATUS } from "@/enum/competitions/competitionStatus";
import { COURSE_ACHIEVEMENT } from "@/enum/course/courseAchievement";
import { COURSE_LEVEL, COURSE_STATUS } from "@/enum/course/courseStatus";
import { CompetitionsList } from "@/interfaces/listCompetitions";
import { CoursesList } from "@/interfaces/listCouses";
import { Stack } from "@mantine/core";
import { on } from "events";
import { title } from "process";
import { useEffect, useState } from "react";

// TODO: This Page
export default function CoursesPage() {
  const [search, setSearch] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState<CoursesList>({
    courses: [],
  });
  // TODO: Modify Onsearch To get data to fetch listData
  const searchHandler = (e: string) => {
    console.log(e);
    setSearch(e);
  };
  const searchByTabHandler = (tab: string) => {
    console.log(tab);
    setActiveTab(tab);
    setSearch("");
  };

  const headerParams = {
    title: CoursesHeader.title,
    description: CoursesHeader.description,
    tabs: CoursesHeader.tabs,
    onSearch: searchHandler,
    onSearchByTab: searchByTabHandler,
  };

  useEffect(() => {
    let filtered = mockList.courses;

    if (activeTab === "enrolled" || activeTab === "completed") {
      filtered = filtered.filter(
        (course) => course.status.toLowerCase() === activeTab.toLowerCase()
      );
    } else if (activeTab === "available") {
      filtered = filtered.filter((course) => !course.isEnrolled);
    }

    if (search.trim()) {
      const lower = search.toLowerCase();
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(lower)
      );
    }

    setFilteredCourses({ courses: filtered });
  }, [search, activeTab]);

  // TODO: Modify to real Data
  const mockList: CoursesList = {
    courses: [
      {
        id: "1",
        title: "React Basics",
        description: "Learn the fundamentals of React",
        details: "In-depth overview of React hooks, state, and props",
        objectives: ["JSX", "Hooks", "Component Design"],
        modules: [
          { name: "Intro to JSX", isFinished: true },
          { name: "useEffect & useState", isFinished: false },
        ],
        instructor: {
          id: "1",
          name: "Jane Doe",
          role: USER_ROLE.LECTURER_ROLE,
        },
        level: COURSE_LEVEL.BEGINNER,
        startDate: new Date(),
        endDate: new Date(),
        status: COURSE_STATUS.ENROLLED,
        point: 100,
        achievements: [
          COURSE_ACHIEVEMENT.PYTHON,
          COURSE_ACHIEVEMENT.JS,
          COURSE_ACHIEVEMENT.REACT,
        ],
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
          { name: "Module 3", isFinished: false },
          { name: "Module 4", isFinished: true },
          { name: "Module 5", isFinished: false },
          { name: "Module 6", isFinished: true },
          { name: "Module 7", isFinished: false },
          { name: "Module 8", isFinished: true },
          { name: "Module 9", isFinished: false },
          { name: "Module 10", isFinished: true },
          { name: "Module 11", isFinished: false },
          { name: "Module 12", isFinished: true },
          { name: "Module 13", isFinished: false },
          { name: "Module 14", isFinished: true },
          { name: "Module 15", isFinished: false },
          { name: "Module 16", isFinished: true },
          { name: "Module 17", isFinished: false },
        ],
        instructor: {
          id: "2",
          name: "Instructor 2",
          role: USER_ROLE.LECTURER_ROLE,
        },
        level: COURSE_LEVEL.INTERMEDIATE,
        startDate: new Date(),
        endDate: new Date(),
        status: COURSE_STATUS.COMPLETED,
        point: 200,
        achievements: [COURSE_ACHIEVEMENT.HTML, COURSE_ACHIEVEMENT.CSS],
        isEnrolled: true,
        isCompleted: false,
      },
      {
        id: "3",
        title: "Course 3",
        description: "Description 3",
        details: "Details 3",
        objectives: ["Objective 1", "Objective 2"],
        modules: [
          { name: "Module 1", isFinished: false },
          { name: "Module 2", isFinished: true },
        ],
        instructor: {
          id: "3",
          name: "Instructor 3",
          role: USER_ROLE.LECTURER_ROLE,
        },
        level: COURSE_LEVEL.ADVANCED,
        startDate: new Date(),
        endDate: new Date(),
        status: COURSE_STATUS.ENROLLED,
        point: 300,
        achievements: [COURSE_ACHIEVEMENT.JAVA],
        isEnrolled: true,
        isCompleted: true,
      },
    ],
  };
  return (
    <Stack>
      <Header
        title={headerParams.title}
        description={headerParams.description}
        tabs={headerParams.tabs}
        onSearch={headerParams.onSearch}
        onSearchByTab={headerParams.onSearchByTab}
      ></Header>
      <ListCard coursesData={filteredCourses}></ListCard>
    </Stack>
  );
}
