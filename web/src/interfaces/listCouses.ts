//TODO: Change to match Attributes

import { COURSE_LEVEL, COURSE_STATUS } from "@/enum/course/courseStatus";
import { User } from "./userInterface";
import { COURSE_ACHIEVEMENT } from "@/enum/course/courseAchievement";

export interface CoursesList {
  courses: CourseDetails[];
}

export interface CourseDetails {
    id: string;
    title: string;
    description: string;
    details: string;
    objectives: string[];
    modules: ModuleDetails[];
    instructor: User;
    level: COURSE_LEVEL;
    startDate: Date;
    endDate: Date;
    status: COURSE_STATUS;
    point: number;
    achievements: COURSE_ACHIEVEMENT[];
}

interface ModuleDetails {
  name: string;
  isFinished: boolean;
}
