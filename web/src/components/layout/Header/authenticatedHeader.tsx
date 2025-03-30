"use client";
import PointToggle from "@/components/ui/actionIcons/pointToggle";
import ThemeToggle from "@/components/ui/actionIcons/themeToggle";
import getMe from "@/services/user/getMe";
import {
    Group,
    Text,
    Avatar,
    Menu,
    Center,
    Burger,
    Button,
    Dialog,
    TextInput,
} from "@mantine/core";

import {
    IconAward,
    IconDeviceGamepad2,
    IconLogout2,
    IconMoneybag,
    IconUserFilled,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface AuthenticatedHeaderProps {
    opened: boolean;
    toggle: () => void;
}

const AuthenticatedHeader = ({ opened, toggle }: AuthenticatedHeaderProps) => {
    const router = useRouter();
    const userName = sessionStorage.getItem("name") || "John Doe";
    const userPoint = sessionStorage.getItem("point");
    const rankingPoint = sessionStorage.getItem("rankingPoint");
    return (
        <Group h="100%" px="xl" justify="space-between">
            <Center inline>
                <IconDeviceGamepad2
                    style={{ width: "1.5em", height: "1.5em" }}
                    stroke={1.5}
                    color="red"
                />
                <Text ml="xs" size="lg" fw={700}>
                    Scuola
                </Text>
            </Center>

            <Group visibleFrom="sm" gap="lg">
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/dashboard")}
                    visibleFrom="sm"
                >
                    Dashboard
                </Text>
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/profile")}
                    visibleFrom="sm"
                >
                    Profile
                </Text>
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/courses")}
                    visibleFrom="sm"
                >
                    Courses
                </Text>
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/competitions")}
                    visibleFrom="sm"
                >
                    Competitions
                </Text>
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/leaderboard")}
                    visibleFrom="sm"
                >
                    Leaderboard
                </Text>
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/rewards")}
                    visibleFrom="sm"
                >
                    Rewards
                </Text>
            </Group>
            <Group>
                <PointToggle toggle={toggle} />
                <ThemeToggle />
                <Menu trigger="click" openDelay={100} closeDelay={400}>
                    <Menu.Target>
                        <Avatar
                            style={{ cursor: "pointer" }}
                            key={userName}
                            name={userName}
                            color="red"
                        ></Avatar>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item
                            leftSection={<IconUserFilled size={16} />}
                            onClick={() => {
                                router.push("/profile");
                            }}
                        >
                            My Profile
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item
                            color="red"
                            leftSection={<IconLogout2 size={16} />}
                            onClick={() => {
                                window.sessionStorage.removeItem("jwt_token");
                                window.sessionStorage.removeItem("id");
                                window.sessionStorage.removeItem("role");
                                window.sessionStorage.removeItem("point");
                                window.sessionStorage.removeItem("name");
                                window.sessionStorage.removeItem(
                                    "rankingPoint"
                                );
                                router.push("/login");
                            }}
                        >
                            Logout
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>

            {/* TODO: Dialog Point */}
            <Dialog
                opened={opened}
                onClose={close}
                size="lg"
                radius="md"
                position={{ bottom: 40, left: 40 }}
                style={{ right: "auto", width: "fit-content" }}
            >
                <Group gap="xs">
                    <IconMoneybag size={16} />
                    <Text size="md" fw={500}>
                        Point: {userPoint}
                    </Text>
                </Group>

                <Group gap="xs">
                    <IconAward size={16} />
                    <Text size="md" fw={500}>
                        Ranking Point: {rankingPoint}
                    </Text>
                </Group>
            </Dialog>
        </Group>
    );
};

export default AuthenticatedHeader;
