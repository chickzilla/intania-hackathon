"use client";
import Header from "@/components/shared/common/header";
import ListCard from "@/components/shared/common/listCard";
import { CompetitionsHeader } from "@/constants/header";
import { USER_ROLE } from "@/enum/auth/user-role";
import {
  COMPETITION_LEVEL,
  COMPETITION_STATUS,
} from "@/enum/competitions/competitionStatus";
import {
  CompetitionsDetails,
  CompetitionsList,
} from "@/interfaces/listCompetitions";
import findByStatus from "@/services/contest/findByStatus";
import { Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
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
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("jwt_token") || "";
        const status = activeTab.toUpperCase();

        const result = await findByStatus(token, status);

        const transformed = result.map((c: any, index: number) => ({
          ...c,
          organizer: {
            id: "0",
            name: "Mock Organizer",
            role: USER_ROLE.ADMIN_ROLE,
          },
        }));

        let filtered = transformed;

        if (search.trim()) {
          const lower = search.toLowerCase();
          filtered = filtered.filter((contest: CompetitionsDetails) =>
            contest.title.toLowerCase().includes(lower)
          );
        }

        setFilteredCompetitions({ competitions: filtered });
      } catch (err: any) {
        notifications.show({
          title: "Something went wrong",
          message: err.message || "Fail to get competitions failed",
          color: "red",
        });
      }
    };

    fetchData();
  }, [search, activeTab]);

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
