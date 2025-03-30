"use client";
import RewardCard from "@/components/shared/rewards/rewardCard";
import getAllRewards from "@/services/reward/getAllRewards";
import { RewardCardValues } from "@/types/reward";
import {
    Stack,
    Group,
    Box,
    Title,
    TextInput,
    ActionIcon,
    SegmentedControl,
    Grid,
    GridCol,
    Text,
} from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconSearch, IconFilter } from "@tabler/icons-react";
import { get } from "http";
import { useEffect, useState } from "react";

const token = sessionStorage.getItem("jwt_token") || "";

export default function RewardsPage() {
    const [rewards, setRewards] = useState<RewardCardValues[]>([
        {
            id: "1",
            name: "Free Course",
            detail: "Get a free course of your choice",
            imageUrl:
                "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
            point: 100,
            isClaimed: false,
        },
        {
            id: "2",
            name: "Discount Voucher",
            detail: "Get a 20% discount on your next purchase",
            imageUrl:
                "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
            point: 200,
            isClaimed: true,
        },
        {
            id: "3",
            name: "Exclusive Webinar",
            detail: "Access to an exclusive webinar with industry experts",
            imageUrl:
                "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
            point: 300,
            isClaimed: false,
        },
    ]);

    useEffect(() => {
        getAllRewards(token)
            .then((res) => {
                const rewards = res.map((reward: any) => {
                    return {
                        id: reward.ID,
                        name: reward.Name,
                        detail: reward.Detail,
                        imageUrl: reward.ImageURL,
                        point: reward.Point,
                        isClaimed: reward.IsClaimed,
                    };
                });
                setRewards(rewards);
            })
            .catch((err) => {
                console.log(err);
                notifications.show({
                    title: "Something went wrong",
                    message: err.message || "Fetch rewards failed",
                    color: "red",
                });
            });
    }, [token]);

    const [searchQuery, setSearchQuery] = useDebouncedState("", 200);
    const [activeTab, setActiveTab] = useState("Unclaimed");

    const filteredRewards = rewards.filter((reward) => {
        if (activeTab === "Unclaimed") return reward.isClaimed === false;
        if (activeTab === "Claimed") return reward.isClaimed === true;
        return true;
    });

    const searchedRewards = filteredRewards.filter((reward) =>
        reward.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <Stack mt="xl">
            <Group justify="space-between">
                <Box>
                    <Title>Rewards</Title>
                    <Text c="gray">Exchange your rewards</Text>
                </Box>
                <Box>
                    <Group gap="xs">
                        <TextInput
                            radius="md"
                            placeholder="Search courses..."
                            leftSection={<IconSearch size={16} />}
                            onChange={(event) =>
                                setSearchQuery(event.target.value)
                            }
                        />
                        <ActionIcon variant="default" size="lg">
                            <IconFilter
                                style={{ width: "70%", height: "70%" }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Group>
                </Box>
            </Group>
            <SegmentedControl
                onChange={setActiveTab}
                value={activeTab}
                fullWidth
                radius="md"
                withItemsBorders={false}
                data={["Unclaimed", "Claimed"]}
            />
            <Grid>
                {searchedRewards.map((reward, index) => (
                    <GridCol key={index} span={{ base: 12, sm: 6, md: 4 }}>
                        <RewardCard {...reward} />
                    </GridCol>
                ))}
            </Grid>
        </Stack>
    );
}
