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
import { CoursesList } from "@/interfaces/listCouses";
import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";

// TODO: This Page
export default function CompetitionsPage() {
    const [search, setSearch] = useState<string>("");
    const [activeTab, setActiveTab] = useState<string>(
        COMPETITION_STATUS.ONGOING
    );
    const [filteredCompetitions, setFilteredCompetitions] =
        useState<CompetitionsList>({
            competitions: [],
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

    useEffect(() => {
        let filtered = mockList2.competitions;

        if (activeTab) {
            filtered = filtered.filter(
                (competition) =>
                    competition.status.toLowerCase() === activeTab.toLowerCase()
            );
        }

        if (search.trim()) {
            const lower = search.toLowerCase();
            filtered = filtered.filter((course) =>
                course.title.toLowerCase().includes(lower)
            );
        }

        setFilteredCompetitions({ competitions: filtered });
    }, [search, activeTab]);

    // TODO: Modify to real Data
    const mockList2: CompetitionsList = {
        competitions: [
            {
                id: "1",
                title: "Competition 1",
                description: "Description 1",
                details: "Details 1",
                requirements: "Requirement 1, Requirement 2",
                rule: "Rule 1, Rule 2",
                judgingCriteria: "Criteria 1, Criteria 2",
                organizer: {
                    id: "1",
                    name: "Organizer 1",
                    role: USER_ROLE.ADMIN_ROLE,
                },
                level: COMPETITION_LEVEL.BEGINNER,
                startDate: "2025-01-01T01:00:00Z",
                endDate: "2029-12-31T01:00:00Z",
                status: COMPETITION_STATUS.ONGOING,
                point: 100,
                rankingPoint: 50,
                isRegistered: false,
            },
            {
                id: "2",
                title: "Competition 2",
                description: "Description 2",
                details: "Details 2",
                requirements: "Requirement 1, Requirement 2",
                rule: "Rule 1, Rule 2",
                judgingCriteria: "Criteria 1, Criteria 2",
                organizer: {
                    id: "2",
                    name: "Organizer 2",
                    role: USER_ROLE.ADMIN_ROLE,
                },
                level: COMPETITION_LEVEL.INTERMEDIATE,
                startDate: "2023-01-01T01:00:00Z",
                endDate: "2023-12-31T01:00:00Z",
                status: COMPETITION_STATUS.FINISHED,
                point: 200,
                rankingPoint: 100,
                isRegistered: true,
            },
            {
                id: "3",
                title: "Competition 3",
                description: "Description 3",
                details: "Details 3",
                requirements: "Requirement 1, Requirement 2",
                rule: "Rule 1, Rule 2",
                judgingCriteria: "Criteria 1, Criteria 2",
                organizer: {
                    id: "3",
                    name: "Organizer 3",
                    role: USER_ROLE.ADMIN_ROLE,
                },
                level: COMPETITION_LEVEL.ADVANCED,
                startDate: "2025-12-31T01:00:00Z",
                endDate: "2026-02-12T01:00:00Z",
                status: COMPETITION_STATUS.UPCOMING,
                point: 300,
                rankingPoint: 150,
                isRegistered: false,
            },
            {
                id: "4",
                title: "Done",
                description: "Description 4",
                details: "Details 4",
                requirements:
                    "Requirement 1, Requirement 2, Requirement 3, Requirement 4",
                rule: "Rule 1, Rule 2, Rule 3, Rule 4, Rule 5",
                judgingCriteria: "Criteria 1, Criteria 2",
                organizer: {
                    id: "4",
                    name: "Organizer 4",
                    role: USER_ROLE.ADMIN_ROLE,
                },
                level: COMPETITION_LEVEL.ADVANCED,
                startDate: "2026-12-31T01:00:00Z",
                endDate: "2027-02-12T01:00:00Z",
                status: COMPETITION_STATUS.UPCOMING,
                point: 1000,
                rankingPoint: 1500,
                isRegistered: true,
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
            <ListCard competitionsData={filteredCompetitions} />
        </Stack>
    );
}
