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
    requirements: string[];
    rule: string[];
    judgingCriteria: string[];
    organizer: User;
    level: string;
    startDate: Date;
    endDate: Date;
}

