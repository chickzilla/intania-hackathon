"use client";

import getLeaderBoard from "@/services/rank/getLeaderboard";
import { User } from "@/types/user";
import {
  ScrollArea,
  Stack,
  Table,
  Title,
  Text,
  TableCaption,
  TableTbody,
  TableTh,
  TableThead,
  TableTr,
  Center,
  Group,
  Paper,
  ThemeIcon,
  useComputedColorScheme,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function LeaderBoard() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUserRank, setCurrentUserRank] = useState<number>(0);
  const darkMode = useComputedColorScheme() === "dark";

  useEffect(() => {
    const fetchData = async () => {
      const user_id = sessionStorage.getItem("id");
      getLeaderBoard()
        .then((res) => {
          setUsers(res.result);
          const userRank = res.result.findIndex(
            (user: User) => user.ID === user_id
          );
          setCurrentUserRank(userRank + 1 || 0);
        })
        .catch((err) => {
          console.log(err);
          notifications.show({
            title: "Error",
            message: err.message || "Failed to fetch leaderboard",
            color: "red",
          });
        });
    };
    fetchData();
  }, []);

  return (
    <Stack px="xl" pt="lg">
      <Title order={1}>🏆 Leaderboard</Title>
      <Text c="dimmed" mb="md">
        See who’s topping the ranks!
      </Text>
      <Paper p="lg" radius="lg" withBorder>
        <Paper bg={darkMode ? "dark.6" : "gray.1"} p="lg" my="sm">
          <Stack gap={0}>
            <Center>
              <Text size="2.5rem" fw={700} c="red.8">
                #{currentUserRank.toLocaleString()}
              </Text>
            </Center>
            <Center>
              <Text c="gray" size="sm">
                Global Rank
              </Text>
            </Center>
          </Stack>
        </Paper>
        <ScrollArea h={400}>
          <Stack gap="xs">
            {users.map((user, index) => (
              <Paper
                key={user.ID}
                p="sm"
                radius="lg"
                withBorder
                bg={
                  user.ID === sessionStorage.getItem("id") ? "red.1" : undefined
                }
                style={
                  user.ID === sessionStorage.getItem("id")
                    ? {
                        border: "2px solid #fa5252",
                        boxShadow: "0 0 10px rgba(250, 82, 82, 0.4)",
                      }
                    : {}
                }
              >
                <Group justify="space-between" w="100%">
                  <Group>
                    <ThemeIcon
                      size="lg"
                      radius="xl"
                      bg={
                        user.ID === sessionStorage.getItem("id")
                          ? "red.8"
                          : "red.6"
                      }
                      c="white"
                    >
                      {index + 1}
                    </ThemeIcon>
                    <Text
                      fw={user.ID === sessionStorage.getItem("id") ? 700 : 400}
                    >
                      {user.FullName}
                    </Text>
                  </Group>
                  <Text
                    fw={user.ID === sessionStorage.getItem("id") ? 700 : 400}
                  >
                    {user.RankPoint.toLocaleString()} EXP
                  </Text>
                </Group>
              </Paper>
            ))}
          </Stack>
        </ScrollArea>
      </Paper>
    </Stack>
  );
}
