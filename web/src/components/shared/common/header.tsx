"use client";
import { HeaderProps } from "@/interfaces/headerInterface";
import {
    ActionIcon,
    Box,
    Grid,
    Group,
    Input,
    Stack,
    Tabs,
    Text,
    Title,
    useComputedColorScheme,
    useMantineTheme,
} from "@mantine/core";
import {
    IconMessageCircle,
    IconPhoto,
    IconSearch,
    IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";

export default function Header({
    title,
    description,
    onSearch,
    onSearchByTab,
    tabs,
}: HeaderProps) {
    const computedColorScheme = useComputedColorScheme();
    const darkMode = computedColorScheme !== "light";

    const [value, setValue] = useState<string>("");
    const activeTab = tabs ? tabs[0].toLowerCase() : "";
    // TODO: Correct Handlers
    const handleSearch = () => {
        if (value.trim()) {
            onSearch(value.trim());
            setValue("");
        }
    };

    return (
        <Stack mx="xl" mt="xl">
            {/* Header with title, description, and search bar*/}
            <Group justify="space-between">
                <Stack gap="0">
                    <Title order={1}>{title}</Title>
                    <Text size="lg" fw={500}>
                        {description}
                    </Text>
                </Stack>

                <Input
                    placeholder={`Search ${title.toLowerCase()}...`}
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                    rightSectionPointerEvents="all"
                    w={{ base: "100%", md: "40%" }}
                    miw="300px"
                    size="md"
                    radius="md"
                    styles={{
                        input: {
                            borderWidth: 2,
                        },
                    }}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") handleSearch();
                    }}
                    rightSection={
                        <ActionIcon
                            variant="subtle"
                            aria-label="Search"
                            onClick={handleSearch}
                        >
                            <IconSearch size={26} />
                        </ActionIcon>
                    }
                />
            </Group>

            {/* Tabs */}
            <Box
                p="4px"
                style={{
                    backgroundColor: darkMode ? "grey" : "lightgray",
                    borderRadius: "12px",
                }}
            >
                <Tabs variant="pills" defaultValue={activeTab}>
                    <Tabs.List grow>
                        {tabs?.map((tab) => (
                            <Tabs.Tab
                                key={tab}
                                value={tab.toLowerCase()}
                                w={{
                                    base: "100%",
                                    sm: "50%",
                                    md: `calc(80% / ${tabs.length})`,
                                }}
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    borderRadius: "10px",
                                    textAlign: "center",
                                }}
                                onClick={() => onSearchByTab(tab.toLowerCase())}
                            >
                                {tab}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>
                </Tabs>
            </Box>
        </Stack>
    );
}
