"use client";
import Header from "@/components/shared/common/header";
import ListCard from "@/components/shared/common/listCard";
import { CompetitionsHeader } from "@/constants/header";
import { USER_ROLE } from "@/enum/auth/user-role";
import {
    COMPETITION_LEVEL,
    COMPETITION_STATUS,
} from "@/enum/competitions/competitionStatus";
import { CompetitionsList } from "@/interfaces/listCompetitions";
import { Stack } from "@mantine/core";

// TODO: This Page
export default function CompetitionsPage() {
    //TODO: Modify Onsearch
    const searchHandler = (e: string) => {
        console.log(e);
    };
    const searchByTabHandler = (tab: string) => {
        console.log(tab);
    };

    // TODO: Modify to real Data
    const mockList2: CompetitionsList = {
        competitions: [
            {
                id: "1",
                title: "Competition 1",
                description: "Description 1",
                details: "Details 1",
                requirements: ["Requirement 1", "Requirement 2"],
                rule: ["Rule 1", "Rule 2"],
                judgingCriteria: ["Criteria 1", "Criteria 2"],
                organizer: {
                    id: "1",
                    name: "Organizer 1",
                    role: USER_ROLE.ADMIN_ROLE,
                },
                level: COMPETITION_LEVEL.BEGINNER,
                startDate: new Date(),
                endDate: new Date(),
                status: COMPETITION_STATUS.ONGOING,
                point: 100,
                rankingPoint: 50,
            },
            {
                id: "2",
                title: "Competition 2",
                description: "Description 2",
                details: "Details 2",
                requirements: ["Requirement 1", "Requirement 2"],
                rule: ["Rule 1", "Rule 2"],
                judgingCriteria: ["Criteria 1", "Criteria 2"],
                organizer: {
                    id: "2",
                    name: "Organizer 2",
                    role: USER_ROLE.ADMIN_ROLE,
                },
                level: COMPETITION_LEVEL.INTERMEDIATE,
                startDate: new Date(),
                endDate: new Date(),
                status: COMPETITION_STATUS.FINISHED,
                point: 200,
                rankingPoint: 100,
            },
            {
                id: "3",
                title: "Competition 3",
                description: "Description 3",
                details: "Details 3",
                requirements: ["Requirement 1", "Requirement 2"],
                rule: ["Rule 1", "Rule 2"],
                judgingCriteria: ["Criteria 1", "Criteria 2"],
                organizer: {
                    id: "3",
                    name: "Organizer 3",
                    role: USER_ROLE.ADMIN_ROLE,
                },
                level: COMPETITION_LEVEL.ADVANCED,
                startDate: new Date(),
                endDate: new Date(),
                status: COMPETITION_STATUS.UPCOMING,
                point: 300,
                rankingPoint: 150,
            },
        ],
    };
    return (
        <Stack>
            <Header
                title={CompetitionsHeader.title}
                description={CompetitionsHeader.description}
                tabs={CompetitionsHeader.tabs}
                onSearch={searchHandler}
                onSearchByTab={searchByTabHandler}
            ></Header>
            <ListCard competitionsData={mockList2} />
        </Stack>
    );
}
