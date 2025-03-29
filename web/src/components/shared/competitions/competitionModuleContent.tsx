"use client";
import { CompetitionsDetails } from "@/interfaces/listCompetitions";
import { Box, Grid, GridCol, List, Text } from "@mantine/core";
import MiniCard from "../common/miniCard";
import { useState } from "react";

export default function CompetitionModuleContent(detail: CompetitionsDetails) {
    const [selectedCourse, setSelectedCourse] = useState<CompetitionsDetails>({
        ...detail,
        isRegistered: false,
    });
    // TODO: Modify handle functions
    const handleRegister = (e: string) => {
        console.log("Clicked Register!", e);
        setSelectedCourse((prev) => {
            const updated = { ...prev, isRegistered: true };
            console.log("Setting isRegistered to true");
            return updated;
        });
    };
    return (
        <Grid gutter="xl" mt="md" ml="sm">
            <GridCol span={{ base: 12, lg: 8 }}>
                <Text size="xl" fw={700}>
                    About This Competition
                </Text>
                <Text size="md" fw={500}>
                    {detail.details}
                </Text>

                <Text size="xl" fw={700} mt="md">
                    Requirements
                </Text>
                <List spacing="xs" size="md" icon="🔴">
                    {detail.requirements.split(",").map((req, index) => (
                        <List.Item key={index}>{req.trim()}</List.Item>
                    ))}
                </List>

                <Text size="xl" fw={700} mt="md">
                    Rules
                </Text>
                <List spacing="xs" size="md" icon="🔴">
                    {detail.rule.split(",").map((r, index) => (
                        <List.Item key={index}>{r.trim()}</List.Item>
                    ))}
                </List>

                <Text size="xl" fw={700} mt="md">
                    Judging Criteria
                </Text>
                <List spacing="xs" size="md" icon="🔴">
                    {detail.judgingCriteria.split(",").map((jud, index) => (
                        <List.Item key={index}>{jud.trim()}</List.Item>
                    ))}
                </List>
            </GridCol>
            <GridCol
                span={{ base: 12, lg: 4 }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                <Box style={{ width: "full" }}>
                    <MiniCard
                        competitionData={detail}
                        onRegister={handleRegister}
                    />
                </Box>
            </GridCol>
        </Grid>
    );
}
