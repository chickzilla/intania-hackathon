"use client";

import getLeaderBoard from "@/services/rank/getLeaderboard";
import { User } from "@/types/user";
import { ScrollArea, Stack, Table, Title, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import cx from "clsx";
import classes from "./TableScrollArea.module.css"; // 👈 Your CSS module

export default function LeaderBoard() {
  const [users, setUsers] = useState<User[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      getLeaderBoard()
        .then((res) => {
          setUsers(res.result);
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

  const rows = users.map((user, index) => (
    <tr key={user.ID}>
      <td>{index + 1}</td>
      <td>{user.FullName}</td>
      <td>{user.RankPoint}</td>
    </tr>
  ));

  return (
    <Stack px="xl" pt="lg">
      <Title order={1}>🏆 Leaderboard</Title>
      <Text c="dimmed" mb="md">
        See who’s topping the ranks!
      </Text>

      <ScrollArea
        h={400}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table highlightOnHover striped withColumnBorders>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>Rank</th>
              <th>Full name</th>
              <th>Rank point</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "transparent" }}>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Stack>
  );
}
