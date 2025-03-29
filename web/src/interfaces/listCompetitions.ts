import {
    COMPETITION_LEVEL,
    COMPETITION_STATUS,
} from "@/enum/competitions/competitionStatus";
import { User } from "./userInterface";

// TODO: Change to match Attributes
export interface CompetitionsList {
    competitions: CompetitionsDetails[];
}

export interface CompetitionsDetails {
    id: string;
    title: string;
    description: string;
    details: string;
    requirements: string;
    rule: string;
    judgingCriteria: string;
    organizer: User;
    level: COMPETITION_LEVEL;
    startDate: string;
    endDate: string;
    status: COMPETITION_STATUS;
    point: number;
    rankingPoint: number;
    isRegistered: boolean;
}
