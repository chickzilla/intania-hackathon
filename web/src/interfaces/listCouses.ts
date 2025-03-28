//TODO: Change to match Attributes

import { User } from "./userInterface";

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
    level: string;
    startDate: Date;
    endDate: Date;
    isEnrolled: boolean;
    isCompleted: boolean;
}

interface ModuleDetails {
    name: string;
    isFinished: boolean;
}
